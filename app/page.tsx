"use client";

import { Github, Mail, ExternalLink, ChevronDown } from "lucide-react";

// ============================================================
// 여기에 본인 정보를 입력하세요
// ============================================================
const ME = {
  name: "조두현",
  role: "백엔드 개발자 · 11년 경력",
  bio: "2014년부터 항공·여행·이커머스 도메인에서 API 연동, 플랫폼 설계, 인프라 운영까지 폭넓게 경험한 백엔드 개발자입니다. 레거시 시스템의 현대화와 안정적인 서비스 운영에 강점이 있습니다.",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi",
  location: "Seoul, Korea",
};

const PROJECTS = [
  {
    title: "mockup-studio",
    description: "목업 및 프로토타입을 빠르게 제작할 수 있는 스튜디오 툴. TypeScript 기반으로 개발된 개인 프로젝트입니다.",
    tech: ["TypeScript", "Next.js"],
    github: "https://github.com/joarechi/mockup-studio",
    live: "",
  },
  {
    title: "money-mate",
    description: "개인 자산 및 지출을 관리하는 머니 매니지먼트 앱. TypeScript로 개발된 재무 관리 도구입니다.",
    tech: ["TypeScript", "Next.js", "MySQL"],
    github: "https://github.com/joarechi/money-mate",
    live: "",
  },
  {
    title: "market-solution",
    description: "마켓 연동 및 상품·주문 관리를 위한 솔루션. 이커머스 도메인 경험을 기반으로 개발한 개인 프로젝트입니다.",
    tech: ["TypeScript", "NestJS", "MySQL"],
    github: "https://github.com/joarechi/market-solution",
    live: "",
  },
];

const SKILLS = [
  {
    category: "Backend",
    items: ["Java", "Spring", "NestJS", "Node.js", "PHP", "REST API", "SOAP"],
  },
  {
    category: "Frontend / Mobile",
    items: ["Next.js", "React", "Flutter", "React Native", "TypeScript"],
  },
  {
    category: "Database",
    items: ["MySQL", "Supabase", "PostgreSQL", "검색엔진 색인"],
  },
  {
    category: "Infra & Cloud",
    items: ["Google Cloud Run", "Docker", "VMWare", "GitHub Actions", "Linux"],
  },
];

const CAREER = [
  { year: "2025", title: "이커머스 솔루션 (배송)", desc: "주문관리 DB 설계, 검색엔진 색인 작업 및 배송관리 API 개발", tag: "DB 설계/검색엔진", period: "12" },
  { year: "2025", title: "이커머스 솔루션 (상품)", desc: "상품관리 QA 및 보완 런칭, 고객 피드백 기반 기능 고도화", tag: "완수율 100%", period: "04~08" },
  { year: "2024", title: "이커머스 플랫폼 고도화", desc: "오픈마켓 연동, 템플릿 관리 및 배송정보 API 개발", tag: "API 고도화", period: "07~12" },
  { year: "2024", title: "이커머스 플랫폼 개발", desc: "신규 플랫폼 기술 스택 선정, 데이터 모델링 및 백엔드 개발 주도", tag: "플랫폼 빌딩", period: "02~12" },
  { year: "2024", title: "인프라 마이그레이션", desc: "API 서버 및 형상관리 서버 클라우드 이전 완료", tag: "서버 이전", period: "01~02" },
  { year: "2023", title: "인프라 고도화", desc: "VMWare 서버 이전 및 이미지 API 서버 리뉴얼 (PHP→Java)", tag: "가상화/전환", period: "02~12" },
  { year: "2023", title: "데이터 구조 개선", desc: "대용량 대응 상품 키(Key) 확장 및 분산 개발 DB 통합 구축", tag: "확장성 확보", period: "04~10" },
  { year: "2023", title: "보안 및 규제 대응", desc: "개인정보보호 자율규제 점검 조치 (마스킹, 비번 정책 등)", tag: "보안/컴플라이언스", period: "05~06" },
  { year: "2022", title: "Java Spring 리뉴얼", desc: "레거시 웹서비스 정리 및 메인·상품·배송·재고 API 통합 전환", tag: "Modernization", period: "01~09" },
  { year: "2022", title: "표준 관리 체계 구축", desc: "7개 마켓 대응 표준 카테고리 매칭 프로그램 개발", tag: "데이터 표준화", period: "04~06" },
  { year: "2021", title: "톡스토어 API 연동", desc: "카카오 톡스토어 신규 마켓 상품 및 주문 관리 API 연동", tag: "신규 마켓", period: "08~10" },
  { year: "2021", title: "굿스플로 연동", desc: "3PL 물류 솔루션 인터페이스 구축 및 송장 자동화 프로세스", tag: "물류/3PL", period: "07~08" },
  { year: "2021", title: "쿠팡 API 재연동", desc: "배송 관리 API 최신화 및 대량 주문 처리 안정화 로직 구현", tag: "대량 처리", period: "04~06" },
  { year: "2021", title: "11번가 API 재연동", desc: "최신 API 규격 전환 및 상품 등록/수정 동기화 로직 고도화", tag: "API 고도화", period: "01~03" },
  { year: "2020", title: "네이버페이 연동", desc: "여행사 및 아시아나 항공 대상 네이버페이 간편결제 연동", tag: "결제 연동", period: "08~10" },
  { year: "2020", title: "이베이 스마일페이 연동", desc: "아시아나 스마일페이 연동 및 지마켓 항공 서비스 개선", tag: "Smile Pay", period: "02~09" },
  { year: "2020", title: "제휴 플랫폼 연동", desc: "11번가 및 한국공항공사 항공 페이지 시스템 연동", tag: "제휴 API", period: "19.11~20.02" },
  { year: "2019", title: "결제 시스템 연동", desc: "발권수수료 키인결제(올앳) 및 SK 베네피아 KCP 연동", tag: "결제 모듈", period: "01~07" },
  { year: "2019", title: "위메프 항공 연동", desc: "위메프 플랫폼 내 항공권 검색 및 예약 시스템 API 연동", tag: "항공 API", period: "05~07" },
  { year: "2019", title: "예약 시스템 리뉴얼", desc: "자사 사이트 내 렌터카 예약 시스템 고도화 및 UI 리뉴얼", tag: "렌터카", period: "03~04" },
  { year: "2018", title: "스카이스캐너 연동", desc: "글로벌 항공 메타서치 스카이스캐너 항공 페이지 시스템 연동", tag: "글로벌 제휴", period: "07~08" },
  { year: "2018", title: "환불 시스템 구축", desc: "각 항공사 티켓 부분 환불 시스템 연동 및 제주도닷컴 개발", tag: "환불 로직", period: "02~06" },
  { year: "2018", title: "이스타/진에어 API 연동", desc: "각 항공사 API 연동 및 카카오 알림톡 서비스 개발", tag: "항공 API", period: "02~12" },
  { year: "2017", title: "대한항공 시스템 전환", desc: "대한항공 SOAP 4.0 전환 및 일일 정산 관리 페이지 구축", tag: "정산/SOAP", period: "08~11" },
  { year: "2016", title: "조회 서비스 개발", desc: "고객용 안드로이드 웹 앱 및 사내 콜 응대 통합 웹 개발", tag: "App/Web", period: "01~04" },
  { year: "2015", title: "결제 보안 구축", desc: "여신전문금융업법 준수 카드 결제 데이터 암호화 서버 구축", tag: "보안/금융", period: "15.10~16.03" },
  { year: "2014", title: "서버 이중화 개발", desc: "CJ 제휴 포인트 결제 연동 및 이중화 서버 시스템 구축", tag: "High Availability", period: "08~12" },
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

      {/* ── Career ── */}
      <section id="career" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>경력 사항</SectionTitle>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-12">2014 – 2025 · 11년간의 프로젝트 이력</p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 to-purple-500 hidden md:block" />
            <div className="space-y-6">
              {CAREER.map((item, idx) => (
                <div key={idx} className="relative flex gap-6 items-start">
                  {/* Year badge */}
                  <div className="hidden md:flex w-14 shrink-0 justify-end">
                    <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 mt-1">{item.year}</span>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-4 shrink-0 justify-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-indigo-400 dark:bg-indigo-500 border-2 border-white dark:border-gray-900 z-10" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-md">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="md:hidden text-xs font-bold text-indigo-500">{item.year}</span>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium">{item.tag}</span>
                      <span className="ml-auto text-xs text-gray-400">{item.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
