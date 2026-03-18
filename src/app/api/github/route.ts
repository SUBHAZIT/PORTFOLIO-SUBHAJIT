import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 });
  }

  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {};

  try {
    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/events`, { headers, next: { revalidate: 3600 } })
    ]);

    const userData = await userRes.json();
    const reposData = await reposRes.json();
    const eventsData = await eventsRes.json();

    return NextResponse.json({ userData, reposData, eventsData });
  } catch (error) {
    console.error("Failed to fetch GitHub API data", error);
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
