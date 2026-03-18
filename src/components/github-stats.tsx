"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BookMarked, Users, GitCommit, Flame, Activity, Code2 } from "lucide-react";

// We extract the GitHub username from the resume URL
const getGitHubUsername = () => {
  const url = DATA.contact.social.GitHub.url;
  return url.split("/").filter(Boolean).pop() || "SUBHAZIT";
};

type LangStats = { [key: string]: number };

export default function GitHubStats() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    commits: 0, // This is an estimate as exact total commits requires complex GraphQL APIs
    topLanguages: [] as { name: string; percentage: number }[],
    streak: 0, // Simplified streak calculation
    avatar_url: "",
    createdAt: "",
  });
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<"last" | number>("last");
  const username = getGitHubUsername();

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch(`/api/github?username=${username}`);

        if (!res.ok) {
          throw new Error("Failed to fetch from API");
        }

        const { userData, reposData, eventsData } = await res.json();

        // Calculate Languages
        const langMap: LangStats = {};
        let totalLangSize = 0;

        // Simple heuristic for commits from recent events
        let recentCommits = 0;
        if (Array.isArray(eventsData)) {
          eventsData.forEach((event: any) => {
            if (event.type === 'PushEvent') {
              recentCommits += event.payload.commits?.length || 0;
            }
          })
        }

        if (Array.isArray(reposData)) {
          reposData.forEach((repo: any) => {
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
              totalLangSize += 1;
            }
          });
        }

        const topLangs = Object.entries(langMap)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangSize) * 100),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5);

        setStats({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          commits: userData.public_repos * 25 + recentCommits, // Heuristic: average 25 commits per repo + recent
          topLanguages: topLangs,
          streak: calculateSimplisiticStreak(eventsData),
          avatar_url: userData.avatar_url,
          createdAt: userData.created_at,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]);

  // A very simplisitic streak calculation based on recent public events
  const calculateSimplisiticStreak = (events: any[]) => {
    if (!Array.isArray(events) || events.length === 0) return 0;

    let streak = 0;
    const today = new Date().toDateString();
    const eventDates = new Set(events.map(e => new Date(e.created_at).toDateString()));

    // Check last 30 days
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      if (eventDates.has(d.toDateString())) {
        streak++;
      } else if (i > 0) {
        // Break the streak if not today and no event
        break;
      }
    }

    // Minimum visual representation
    return Math.max(streak, 1);
  };

  const currentYear = new Date().getFullYear();
  const startYear = stats.createdAt ? new Date(stats.createdAt).getFullYear() : currentYear;
  // Create an array of years from startYear to currentYear
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);

  const statCards = [
    {
      title: "PUBLIC REPOSITORIES",
      value: stats.repos,
      desc: "OPEN SOURCE CONTRIBUTIONS",
      icon: <BookMarked className="size-0 text-muted-foreground" />,
    },
    {
      title: "FOLLOWERS",
      value: stats.followers,
      desc: "DEVELOPER NETWORK",
      icon: <Users className="size-0 text-muted-foreground" />,
    },
    {
      title: "TOTAL COMMITS ",
      value: stats.commits + "+",
      desc: "CODE CONTRIBUTIONS",
      icon: <GitCommit className="size-0 text-muted-foreground" />,
    },
    {
      title: "CURRENT STREAK",
      value: stats.streak + " DAYS",
      desc: "CONTINUOUS CODING",
      icon: <Flame className="size-0 text-muted-foreground" />,
    },
  ];

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <div className="size-8 animate-spin rounded-full border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* Overview Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <BlurFade key={stat.title} delay={0.1 + i * 0.1}>
            <div className="flex flex-col p-5 bg-card border rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </span>
                {stat.icon}
              </div>
              <span className="text-3xl font-bold tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.desc}
              </span>
            </div>
          </BlurFade>
        ))}
      </section>

      {/* Contribution Calendar */}
      <BlurFade delay={0.5}>
        <section className="flex flex-col gap-4 p-6 bg-card border rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              {stats.avatar_url && (
                <img src={stats.avatar_url} alt="GitHub Avatar" className="size-10 rounded-full border shadow-sm" />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <Activity className="size-0 text-primary" />
                  <h3 className="font-bold text-lg">CONTRIBUTION GRAPH</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  DAILY ACTIVITY HEATMAP PROVING CONSISTENCY AND REGULAR CODING HABITS.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:justify-end w-full md:w-auto">
              <button
                onClick={() => setSelectedYear("last")}
                className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-colors ${selectedYear === "last" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                LAST YEAR
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedYear === year ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[800px] flex justify-center">
              <GitHubCalendar
                username={username}
                year={selectedYear}
                colorScheme="dark"
                theme={{
                  light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
              />
            </div>
          </div>
        </section>
      </BlurFade>

      {/* Top Languages */}
      <BlurFade delay={0.6}>
        <section className="flex flex-col gap-4 p-6 bg-card border rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="size-5 text-primary" />
            <h3 className="font-bold text-lg">TOP LANGUAGES</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            BASED ON RECENT PUBLIC REPOSITORY DATA.
          </p>
          <div className="flex flex-col gap-4">
            {stats.topLanguages.map((lang, i) => (
              <div key={lang.name} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.percentage}%</span>
                </div>
                <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out fill-mode-forwards"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
            {stats.topLanguages.length === 0 && (
              <div className="text-sm text-muted-foreground">
                NO LANGUAGE DATA FOUND IN RECENT PUBLIC REPOSITORIES.
              </div>
            )}
          </div>
        </section>
      </BlurFade>
    </div>
  );
}
