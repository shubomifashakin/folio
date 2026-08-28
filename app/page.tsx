import { Fragment } from "react";
import Project from "./_components/project";
import ContactLink from "./_components/contacts";

const projects = [
  {
    name: "DevSecOps Pipeline Scaffold",
    description: "A DevSecOps pipeline scaffold skill for Claude Code.",
    link: "https://github.com/shubomifashakin/devsecops-pipeline-scaffold",
  },
  {
    name: "Temp CLI",
    description:
      "A CLI tool for uploading files, managing links, and tracking access on Temp.",
    link: "https://www.npmjs.com/package/@545plea/temp-cli",
  },
  {
    name: "Temp",
    description:
      "A secure, ephemeral file sharing service with time-limited links, optional password protection, malware scanning, and basic access analytics.",
    link: "https://temp.545plea.xyz/",
  },
  {
    name: "Null Void",
    description:
      "Virtual whiteboard for real-time collaborative drawing and brainstorming.",
    link: "https://null-void.545plea.xyz/",
  },
  {
    name: "Paytrail",
    description:
      "AI-powered, offline first budgeting and finance tracking app.",
    link: "https://apps.apple.com/us/app/paytrail/id6755418652",
    retired: true,
  },
];

const contacts = [
  { label: "GitHub", href: "https://github.com/shubomifashakin" },
  { label: "Twitter", href: "https://twitter.com/545plea" },
  { label: "Mail", href: "mailto:subomifasakin@outlook.com" },
  { label: "Blog", href: "https://blog.545plea.xyz" },
];

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-8 pt-20 pb-12">
      <main className="space-y-10">
        <div className="space-y-2">
          <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase">
            Software Engineer
          </p>

          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap">
            <h1 className="font-serif text-5xl font-normal tracking-tight">
              Olashubomi
            </h1>

            <div className="flex items-center gap-x-2 text-sm text-foreground/70">
              {contacts.map((c, i) => (
                <Fragment key={c.label}>
                  {i > 0 && <span className="text-foreground/20">·</span>}
                  <ContactLink label={c.label} href={c.href} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        <p id="about" className="text-sm text-foreground/70 leading-relaxed">
          I am primarily interested in backend and systems engineering, with
          security as a core part of how I think about building. I dabble in
          frontend and mobile development from time to time and lately I&apos;ve
          been getting more into DevOps and infrastructure engineering.
          Self-hosting, in particular, has pushed me to care even more about the
          security of the systems I run.
        </p>

        <div id="projects">
          <h3 className="font-serif text-xl font-normal mb-4">Projects</h3>

          <div className="border-t border-white/10" />

          {projects.map((p, i) => (
            <Fragment key={p.name}>
              {i > 0 && <div className="border-t border-white/10" />}
              <Project
                name={p.name}
                description={p.description}
                link={p.link}
                retired={p.retired}
              />
            </Fragment>
          ))}
        </div>
      </main>

      <footer className="py-8 px-6 gap-x-4 justify-center border-t border-white/10 flex text-xs items-center text-foreground/40">
        <span>Lagos, Nigeria</span>

        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>

        <span className="uppercase">
          {new Date().toLocaleTimeString("en-NG", {
            timeStyle: "short",
            hour12: true,
            timeZone: "Africa/Lagos",
          })}
        </span>
      </footer>
    </div>
  );
}
