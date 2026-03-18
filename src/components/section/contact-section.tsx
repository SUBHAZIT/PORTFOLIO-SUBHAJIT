import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">CONTACT</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          GET IN TOUCH
        </h2>
        {/* Added social links section */}
        <div className="flex gap-4">
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <Tooltip key={name}>
              <TooltipTrigger asChild>
                <Link
                  href={name === "GitHub" ? "/github" : social.url}
                  target={name === "GitHub" ? "_self" : "_blank"}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          WANT TO CHAT? JUST SHOOT ME AN EMAIL AT{" "}
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            {DATA.contact.email.toUpperCase()}
          </Link>{" "}
          AND I&apos;LL RESPOND WHENEVER I CAN.
        </p>
      </div>
    </div>
  );
}

