"use client";

import { Github, Mail, ExternalLink, ChevronDown } from "lucide-react";

// ============================================================
// 여기에 본인 정보를 입력하세요
// ============================================================
const ME = {
  name: "마스터",
  role: "풀스택 개발자",
  bio: "Next.js, NestJS, Flutter, React Native를 주력으로 사용하는 풀스택 개발자입니다. 사용자 경험을 중심에 두고 확장 가능한 서비스를 만드는 것을 좋아합니다.",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi", // 본인 GitHub 주소로 변경
  location: "Seoul, Korea",
};

const PROJECTS = [
  {
    title: "프로젝트 이름 1",
    description: "간단한 프로젝트 설명을 여기에 작성하세요. 어떤 문제를 해결했는지, 어떤 기술을 사용했는지 간단히 설명합니다.",
    tech: ["Next.js", "NestJS", "MySQL", "Supabase"],
    github: "https://github.com/joarechi/project1",
    live: "",
  },
  {
    title: "프로젝트 이름 2",
    description: "Flutter와 React Native를 활용한 크로스플랫폼 모바일 앱입니다. 실시간 기능과 푸시 알림을 구현했습니다.",
    tech: ["Flutter", "React Native", "Supabase", "Cloud Run"],
    github: "https://github.com/joarechi/project2",
    live: "",
  },
  {
    title: "프로젝트 이름 3",
    description: "Cloud Run 기반으로 배포된 백엔드 서비스입니다. NestJS와 MySQL로 RESTful API를 구축했습니다.",
    tech: ["NestJS", "MySQL", "Cloud Run", "Docker"],
    github: "https://github.com/joarechi/project3",
    live: "",
  },
];

const SKILLS = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "Dart"],
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "REST API", "GraphQL"],
  },
  {
    category: "Database & Cloud",
    items: ["MySQL", "Supabase", "PostgreSQL", "Google Cloud Run", "Docker"],
  },
];
// ============================================================

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <p className="text-sm font-medium tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4 animate-fade-in">
          안녕하세요 👋
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-slide-up">
          <span className="text-gradient">{ME.name}</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-6 animate-slide-up">
          {ME.role}
        </p>
        <p className="max-w-xl text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10 animate-fade-in">
          {ME.bio}
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition-colors shadow-lg shadow-indigo-500/30"
          >
            연락하기
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-full transition-colors"
          >
            프로젝트 보기
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 animate-bounce text-gray-400 dark:text-gray-600"
        >
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <SectionTitle>소개</SectionTitle>
        <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold shadow-2xl shadow-indigo-300/30 dark:shadow-indigo-900/30">
              {ME.name[0]}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{ME.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {ME.bio}
            </p>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>📍 {ME.location}</li>
              <li>📧 {ME.email}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle>프로젝트</SectionTitle>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-500 transition-colors"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-500 transition-colors"
                    >
                      <ExternalLink size={14} /> 라이브
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
        <SectionTitle>기술 스택</SectionTitle>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle>연락처</SectionTitle>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            새로운 기회나 협업 제안은 언제든지 환영합니다. 편하게 연락 주세요!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${ME.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition-colors shadow-lg shadow-indigo-500/30"
            >
              <Mail size={18} />
              이메일 보내기
            </a>
            <a
              href={ME.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 text-center text-sm text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} {ME.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold">{children}</h2>
      <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
    </div>
  );
}
