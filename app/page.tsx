import Image from "next/image";

import Project from "./_components/project";
import Skills from "./_components/skills";
import Contact from "./_components/contacts";

import MailIcon from "./_components/icons/mail";
import GithubIcon from "./_components/icons/github";
import TwitterIcon from "./_components/icons/twitter";

import me from "../public/images/me.webp";
import paytrailIcon from "../public/images/paytrail-icon.webp";
import githubImg from "../public/images/github.webp";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="mx-auto space-y-8 font-sans max-w-2xl px-8 pt-20">
      <main className="space-y-10">
        <div className="size-20 relative rounded-full border border-white/10 overflow-hidden">
          <Image
            fill
            src={me}
            preload
            quality={100}
            alt="Profile picture"
            className="object-contain"
          />
        </div>

        <h1 className="text-2xl tracking-tight font-bold">
          Hi👋, I&apos;m Olashubomi.
        </h1>

        <div id="about" className="space-y-6 text-sm">
          <p>
            I am a software engineer who loves challenges and learning new
            things. I build systems that solve real problems and enjoy exploring
            new technologies to create useful solutions.
          </p>

          <p>
            I&apos;m currently building{" "}
            <a
              href="https://apps.apple.com/us/app/paytrail/id6755418652"
              className="border-b border-dashed hover:border-white/60 transition-all duration-200 ease-in-out"
            >
              Paytrail
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/shubomifashakin/Null-Void"
              target="_blank"
              className="border-b border-dashed hover:border-white/60 transition-all duration-200 ease-in-out"
            >
              Null Void
            </a>
          </p>
        </div>

        <div id="contact" className="space-y-4">
          <h3 className="font-bold text-sm">Contact</h3>

          <div className="flex gap-6 text-sm flex-wrap">
            <Contact
              label="Github"
              href="https://github.com/shubomifashakin"
              icon={<GithubIcon width={14} height={14} />}
            />

            <Contact
              label="Twitter"
              href="https://twitter.com/545plea"
              icon={<TwitterIcon width={14} height={14} />}
            />

            <Contact
              label="Mail"
              href="mailto:shubomifashakin@outlook.com"
              icon={<MailIcon width={14} height={14} />}
            />
          </div>
        </div>

        <div id="skills" className="space-y-4">
          <h3 className="font-bold text-sm">Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <Skills
              title="Frontend"
              items={["React", "NextJS", "Tailwind", "Framer Motion"]}
            />

            <Skills title="Mobile" items={["React Native", "Expo"]} />

            <Skills
              title="Backend"
              items={[
                "NodeJS",
                "NestJS",
                "ExpressJS",
                "REST",
                "GraphQL",
                "PostgreSQL",
                "Redis",
                "DynamoDB",
                "SQLite",
              ]}
            />

            <Skills
              title="Devops/Tools"
              items={[
                "Docker",
                "AWS",
                "AWS CDK",
                "Git",
                "Github",
                "CI/CD",
                "Linux",
                "Hetzner",
                "Grafana Alloy",
              ]}
            />

            <Skills
              title="Learning"
              items={["Golang", "Terraform", "Kubernetes"]}
            />
          </div>
        </div>

        <div id="projects" className="space-y-4">
          <h3 className="font-bold text-sm">Projects</h3>

          <div className="flex flex-col gap-y-6">
            <Project
              status="wip"
              name="Null Void"
              description="Realtime collaborative canvas, (Mini-MS Paint but with Figma-inspired features)."
              image={githubImg}
              link="https://github.com/shubomifashakin/Null-Void"
            />

            <Project
              status="wip"
              name="Paytrail"
              description="AI-powered, offline first budgeting and finance tracking app."
              image={paytrailIcon}
              link="https://apps.apple.com/us/app/paytrail/id6755418652"
            />

            <Project
              status="completed"
              name="Org-Rel Api"
              description="RBAC-powered multi-tenant API built with NestJS."
              image={githubImg}
              link="https://github.com/shubomifashakin/org-rel"
            />
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 gap-x-4 justify-center border-t border-t-white/10 flex text-xs items-center">
        <span className="flex items-center gap-2">Lagos, Nigeria</span>

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
