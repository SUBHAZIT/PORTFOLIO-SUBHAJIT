import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import GitHubStats from "@/components/github-stats";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "GITHUB SHOWCASE | " + DATA.name,
  description: "LIVE GITHUB STATISTICS AND CONTRIBUTION ACTIVITY.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function GitHubPage() {
  const username = DATA.contact.social.GitHub.url.split("/").filter(Boolean).pop() || "SUBHAZIT";
  
  // Fetch GitHub profile data to get the avatar URL
  let avatarUrl = DATA.avatarUrl;
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = token ? { Authorization: `token ${token}` } : {};
    const res = await fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } });
    const data = await res.json();
    if (data.avatar_url) {
      avatarUrl = data.avatar_url;
    }
  } catch (e) {
    console.error("Failed to fetch GitHub avatar", e);
  }

  return (
    <main className="min-h-dvh flex flex-col gap-10 relative py-8">
      {/* Navigation */}
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link 
            href="/" 
            className="flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4 border rounded-full px-4 py-1.5 bg-background shadow-sm"
        >
          <ArrowLeft className="size-4" />
          BACK TO PORTFOLIO
        </Link>
      </BlurFade>

      {/* Header */}
      <section id="github-header" className="flex flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-card border rounded-2xl p-6 shadow-sm">
            <Avatar className="size-20 border rounded-full shadow-md ring-2 ring-muted bg-background">
              <AvatarImage alt={DATA.name} src={avatarUrl} className="object-cover" />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold tracking-tight">GITHUB SHOWCASE</h1>
              <p className="text-muted-foreground">
                LIVE ACTIVITY, CONSISTENCY, AND TOP LANGUAGES FOR <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">@{username}</a>.
              </p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Live Stats Component */}
      <GitHubStats />

    </main>
  );
}
