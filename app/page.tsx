"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-sky-50 text-sky-900">

      {/* NAVIGATION */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sky-600 font-bold text-xl tracking-tight">
            Kirsty.dev
          </span>
          <div className="flex gap-6 text-sm font-medium text-sky-700">
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About
              </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
            <a href="#hobbies" className="hover:text-sky-400 transition-colors">Hobbies</a>
          </div>
        </div>
      </nav>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <div className="flex-shrink-0">
            <div className="w-44 h-44 rounded-full border-4 border-sky-300 overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* BIO */}
          <div>
            <p className="text-sky-500 font-semibold uppercase tracking-widest text-sm mb-1">Hello, I am</p>
            <h2 className="text-5xl font-extrabold text-sky-500 mb-2">
              Yeukai Kubiku
            </h2>
            
            <p className="text-sky-800 leading-relaxed max-w-xl mb-6">
              A Computer Science student at NUST,Zimbabwe with a passion for building clean, purposeful software.
              Developed an interest in mobile app and web development, computational modelling and research, exploring
              how technology can be applied to solve real-world problems and always looking to expand my knowledge across different
              areas of computing. Currently serving as a CS7 Teaching Assistant at Emzini weCode, the same course that sparked my 
              journey in tech. Committed to continuous learning and helping others navigate their journey in tech.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-sky-600">

             <a href="mailto:kirstyyeu@gmail.com" className="hover:underline">kirstyyeu@gmail.com</a>
             <a href="https://www.linkedin.com/in/yeukai-k-45979a311" target="_blank" className="hover:underline">LinkedIn</a>
             <a href="https://github.com/kirstyyeu-cmd" target="_blank" className="hover:underline">GitHub</a>
             <span className="text-sky-800 leading-relaxed max-w-xl mb-6"></span>

            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 px-6 bg-sky-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {[
              "Python",
              "Object-Oriented Programming",
              "Next.js",
              "Full-Stack development",
              "Git & GitHub",
              "Mobile app development",
              "Technical Documentation",
              "Problem Solving",
              "Software Design",
              "Teamwork and collaboration",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white border border-sky-200 rounded-xl px-4 py-3 text-center text-sky-700 font-medium text-sm shadow-sm hover:bg-sky-100 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Languages I Speak</SectionTitle>
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { lang: "English", level: "Fluent" },
              { lang: "Shona", level: "Native" },
            ].map(({ lang, level }) => (
              <div key={lang} className="bg-sky-100 border border-sky-200 rounded-full px-6 py-2 flex items-center gap-2">
                <span className="text-sky-700 font-semibold">{lang}</span>
                <span className="text-sky-400 text-sm">· {level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-6 bg-sky-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <ProjectCard
              title="PhMar"
              description="Architecting a digital marketplace platform for media professionals and
              clients to facilitate commercial interaction"
              tags={["Photograph Marketing"]}
              link="Not yet uploaded" 
            />

            <ProjectCard
              title="UNDP Innovation Challenge 2026"
              description="Co-developed a ”Community Crisis Impact Reporting Tool” for real-time data synthesis"
              tags={["UNDP"]}
              link="Private"
            />
            <ProjectCard
              title="POTRAZ RESEARCH 2026"
              description="Smart Societies:– Financial Inclusion:
                           Sept 2026 – Present
                           ZimbabweContributing to research on the Future of Work and 4IR integration.Developing a ”Smart Financial Inclusion System for Informal Traders” focusingon AI-driven growth for SMEs.– Natural Language Processing:Collaborating on an AI-Driven Natural Language Business Management System to empower SMEs through inclusive digital growth"
              tags={["POTRAZ"]}  
              link="None"           
            />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Education</SectionTitle>
          <div className="mt-8 space-y-6">
            <EducationCard
              school="Zimbabwe University of Science and Technology"
              degree="Bachelor of Science Honours Degree in Computer Science"
              year="September 2024 - June 2028"
            />
            <EducationCard
              school="Emzini weCode"
              degree="CS7 Introduction to Computer Science"
              year="June 2025 - August 2025"
            />  
          </div>
        </div>
      </section>

      {/* HOBBIES */}
      <section id="hobbies" className="py-16 px-6 bg-sky-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Hobbies & Interests</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Coding" },
              { label: "Netball" },
              { label: "Photography" },
              { label: "Researching" },
              {label: "Solitaire BlackSpider(4 Suit)"}
            ].map(({ label }) => (
              <div key={label} className="bg-white border border-sky-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sky-700 font-medium text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-700 text-white text-center py-8 px-6">
        <p className="text-sky-200 text-sm">Built with Next.js & Tailwind · Deployed on Vercel</p>
        <p className="mt-1 font-semibold">
          Yeukai © {new Date().getFullYear()}
        </p>
      </footer>

    </main>
  );
}

/* ── Reusable Components ── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-bold text-sky-700">{children}</h2>
      <div className="flex-1 h-px bg-sky-200" />
    </div>
  );
}

function ProjectCard({ title, description, tags, link }: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <div className="bg-white border border-sky-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-sky-700 mb-2">{title}</h3>
      <p className="text-sky-800 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-sky-100 text-sky-600 text-xs font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function EducationCard({ school, degree, year, note }: {
  school: string;
  degree: string;
  year: string;
  note?: string;
}) {
  return (
    <div className="border-l-4 border-sky-400 bg-sky-50 rounded-r-2xl pl-6 pr-4 py-4">
      <p className="text-sky-400 text-sm font-medium">{year}</p>
      <h3 className="text-sky-700 font-bold text-lg">{degree}</h3>
      <p className="text-sky-600 text-sm">{school}</p>
      {note && <p className="text-sky-400 text-xs mt-1 italic">{note}</p>}
    </div>
  );
}