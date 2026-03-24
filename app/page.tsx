"use client";

import { Github, Mail, ArrowRight } from "lucide-react";

// ============================================================
// 본인 정보
// ============================================================
const ME = {
  name: "조두현",
  role: "풀스택 개발자",
  bio: "2015년부터 항공·여행·이커머스 도메인에서 백엔드 시스템을 설계하고 운영해온 개발자. API 아키텍처부터 클라우드 인프라, 프론트엔드까지 — 실서비스를 직접 만들고 운영합니다.",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi",
  location: "Seoul, Korea",
};

const PROJECTS = [
  {
    name: "rich-worker",
    sub: "AI 주식·코인 자동매매 플랫폼",
    desc: "AI가 실시간 시장 데이터를 분석하여 자동으로 매매 전략을 실행하는 풀스택 플랫폼. 규칙 기반 전략과 AI 판단을 결합한 하이브리드 매매 엔진을 처음부터 끝까지 구현.",
    points: [
      "실시간 시세 데이터 수집 및 AI 분석 파이프라인 구축",
      "규칙 기반 + AI 하이브리드 자동 매매 전략 엔진",
      "Supabase 기반 실시간 포트폴리오 대시보드 (Next.js)",
      "Google Cloud Run 서버리스 아키텍처로 탄력적 확장",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Google Cloud Run", "AI/LLM"],
    github: "https://github.com/joarechi/rich-worker",
    index: 0,
  },
  {
    name: "match-master",
    sub: "풀스택 매칭 서비스",
    desc: "기획·설계·개발·배포까지 단독으로 완성한 양방향 매칭 플랫폼. 백엔드 API 서버부터 프론트엔드 UI까지 전체 기술 스택을 혼자 구현한 실서비스.",
    points: [
      "양방향 매칭 알고리즘 설계 및 API 구현",
      "NestJS + TypeScript 기반 RESTful API 서버",
      "Redis 기반 실시간 알림 및 비동기 처리",
      "단독 풀스택 기획·개발·배포 일괄 수행",
    ],
    tech: ["NestJS", "TypeScript", "Next.js", "MySQL", "Redis"],
    github: "https://github.com/joarechi/match-master",
    index: 1,
  },
];

const EXPERIENCE = [
  {
    year: "2025",
    type: "Work",
    title: "이커머스 솔루션 (배송/상품)",
    desc: "주문관리 DB 설계 및 상품관리 시스템 보완 런칭",
    tag: "DB 설계/검색엔진",
    period: "01~12",
    challenges: "레거시 데이터와의 호환성을 유지하면서 대규모 상품 검색 속도 저하 문제 발생",
    solutions: "Elasticsearch 색인 구조 최적화 및 DB 인덱스 튜닝을 통해 검색 성능 40% 개선",
    tech: ["MySQL", "Elasticsearch", "Spring Boot"],
  },
  {
    year: "2024",
    type: "Work",
    title: "이커머스 플랫폼 고도화 및 기술 전환",
    desc: "오픈마켓 연동 API 개발 및 신규 플랫폼 기술 스택 선정",
    tag: "플랫폼 빌딩",
    period: "01~12",
    challenges: "기존 PHP 기반의 무거운 모놀리식 시스템으로 인해 신규 마켓 연동 속도 저하",
    solutions: "NestJS 마이크로서비스 아키텍처 도입 및 API 규격 표준화를 통해 신규 연동 생산성 향상",
    tech: ["Node.js", "NestJS", "TypeScript", "PHP"],
  },
  {
    year: "2024",
    type: "Project",
    title: "Market Solution (Personal Project)",
    desc: "마켓 연동 및 상품·주문 관리를 위한 솔루션",
    tag: "이커머스 솔루션",
    period: "08~11",
    challenges: "다양한 외부 쇼핑몰 API의 응답 속도 편차로 인한 안정성 저하",
    solutions: "Redis 기반의 메시지 큐 시스템 적용으로 비동기 연동 처리 및 안정적 배송 정보 업데이트 구현",
    tech: ["TypeScript", "NestJS", "Redis", "MySQL"],
  },
  {
    year: "2023",
    type: "Work",
    title: "인프라 고도화 및 이미지 서비스 리뉴얼",
    desc: "VMWare 서버 이전 및 이미지 API 서버 리뉴얼 (PHP→Java)",
    tag: "Modernization/Infra",
    period: "02~12",
    challenges: "대량의 이미지 처리 시 서버 부하 및 VMWare 가상화 환경에서의 리소스 관리 비효율",
    solutions: "이미지 리사이징 로직 최적화 및 VMWare 리소스 동적 할당 정책 수립으로 인프라 효율성 극대화",
    tech: ["Java", "Spring", "VMWare", "PHP"],
  },
  {
    year: "2022",
    type: "Work",
    title: "Java Spring 기반 서비스 통합 전환",
    desc: "메인·상품·배송·재고 API 통합 전환 및 표준 관리 체계 구축",
    tag: "Modernization",
    period: "01~09",
    challenges: "산재된 7개 마켓의 카테고리 규격 상이로 인한 데이터 일관성 부족",
    solutions: "표준 카테고리 매칭 매니저 프로그램을 개발하여 데이터 동기화 정확도 99% 달성",
    tech: ["Java", "Spring", "Oracle", "MySQL"],
  },
  {
    year: "2021",
    type: "Work",
    title: "대형 마켓 API 연동 및 물류 자동화",
    desc: "카카오 톡스토어 연동 및 굿스플로 3PL 물류 인터페이스 구축",
    tag: "신규 마켓/물류",
    period: "01~10",
    challenges: "대용량 주문 발생 시 3PL 연동 트래픽 폭주로 인한 인터페이스 타임아웃",
    solutions: "Batch 처리 로직 도입 및 API Rate Limiting 대응을 위한 재시도 전략 최적화",
    tech: ["PHP", "Java", "REST API"],
  },
  {
    year: "2020",
    type: "Work",
    title: "항공/여행 결제 시스템 고도화",
    desc: "네이버페이, 스마일페이 등 간편결제 시스템 항공 서비스 연동",
    tag: "결제/항공",
    period: "02~10",
    challenges: "항공 시스템 특유의 복잡한 정산 프로세스와 간편결제 연동 간의 데이터 정합성 보장 필요",
    solutions: "Phase-based 결제 검증 로직 구현 및 실시간 정산 모니터링 시스템 구축",
    tech: ["Java", "SOAP", "REST API"],
  },
  {
    year: "2019",
    type: "Work",
    title: "항공 예약 서비스 제휴 및 리뉴얼",
    desc: "위메프 항공 연동 및 자사 렌터카 예약 시스템 고도화",
    tag: "항공/제휴",
    period: "01~07",
    challenges: "위메프 플랫폼 내 실시간 좌석 조회의 응답 속도 지연 문제",
    solutions: "자체 캐싱 레이어 최적화 및 비동기 좌석 선점 로직 도입으로 사용자 이탈 방지",
    tech: ["Java", "PHP", "SOAP"],
  },
  {
    year: "2018",
    type: "Work",
    title: "글로벌 제휴 시스템 구축",
    desc: "스카이스캐너 연동 및 항공사 티켓 환불/알림톡 연동",
    tag: "Global Integration",
    period: "02~12",
    challenges: "글로벌 트래픽 대응을 위한 시스템 안정성 및 다국어 환경 대응",
    solutions: "스카이스캐너 기술 규격(SOAP/REST) 완벽 대응 및 파이프라인 최적화",
    tech: ["Java", "SOAP", "MySQL"],
  },
  {
    year: "2015–2017",
    type: "Work",
    title: "시스템 안정화 및 보안 인프라 구축",
    desc: "대한항공 SOAP 4.0 전환 및 결제 보안 암호화 서버 구축",
    tag: "Security/Airline",
    period: "Full-term",
    challenges: "여신전문금융업법 준수를 위한 결제 데이터 암호화 및 레거시 데이터 마이그레이션",
    solutions: "표준 보안 암호화 알고리즘 적용 및 단계별 무중단 서버 이전 성공",
    tech: ["Java", "Security Package", "VMWare"],
  },
];

const SKILLS = [
  {
    category: "Backend Expert",
    items: ["Java / Spring Boot", "Node.js / NestJS", "TypeScript", "PHP", "REST API / SOAP"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Database & Search",
    items: ["MySQL", "Elasticsearch (색인/검색 최적화)", "Supabase", "Redis (Caching/MQ)"],
  },
  {
    category: "Infra & Cloud",
    items: ["VMWare (Private Cloud)", "Google Cloud Run / Cloud Functions", "Docker", "GitHub Actions"],
  },
  {
    category: "Extra Capabilities",
    items: ["데이터 보안/암호화", "이커머스 도메인 설계", "결제 및 항공 GDS 연동"],
  },
];
// ============================================================

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Left: text */}
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 mb-8 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                재직 중
              </div>

              <h1 className="text-7xl md:text-8xl font-black text-slate-900 leading-none mb-4 animate-slide-up opacity-0">
                {ME.name}
              </h1>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-400 mb-8 animate-slide-up-2 opacity-0">
                {ME.role}<span className="text-indigo-500">.</span>
              </h2>

              <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-10 animate-slide-up-3 opacity-0">
                {ME.bio}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.45s" }}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  프로젝트 보기 <ArrowRight size={15} />
                </a>
                <a
                  href={ME.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 text-gray-700 font-semibold rounded-xl transition-colors text-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-500 hover:text-indigo-600 font-semibold transition-colors text-sm"
                >
                  연락하기
                </a>
              </div>
            </div>

            {/* Right: profile card */}
            <div className="hidden md:block animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              <div className="w-72 bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-100 p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl font-black mb-6">
                  조
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-gray-100 text-center">
                  <div>
                    <div className="text-2xl font-black text-slate-900">10+</div>
                    <div className="text-xs text-gray-400 mt-0.5">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">30+</div>
                    <div className="text-xs text-gray-400 mt-0.5">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">3</div>
                    <div className="text-xs text-gray-400 mt-0.5">Domains</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6 pb-6 border-b border-gray-100">
                  {["Java", "Spring", "NestJS", "Next.js", "TypeScript", "MySQL"].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-md font-medium border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-600">현재 재직 중</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ABOUT — dark accent section
      ══════════════════════════════════════ */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-indigo-400 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            실서비스를 만드는
            <br />
            <span className="text-indigo-400">풀스택 개발자</span>입니다.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-16">
            {ME.bio}
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "10년+",
                label: "백엔드 전문",
                desc: "항공·여행·이커머스 도메인에서 대규모 트래픽 처리와 시스템 현대화를 주도",
              },
              {
                num: "풀스택",
                label: "End-to-End",
                desc: "API 설계부터 프론트엔드, 클라우드 배포까지 전체 사이클을 단독으로 구현",
              },
              {
                num: "자동화",
                label: "AI & Automation",
                desc: "AI 기반 자동매매 플랫폼 개발, 물류 자동화, CI/CD 파이프라인 구축 경험",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all"
              >
                <div className="text-3xl font-black text-white mb-1">{item.num}</div>
                <div className="text-indigo-400 text-sm font-semibold mb-3">{item.label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════ */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-500 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            Projects
          </p>
          <h2 className="text-4xl font-black text-slate-900 mb-3">하이라이트 프로젝트</h2>
          <p className="text-gray-400 mb-16">직접 기획하고 구현한 사이드 프로젝트</p>

          <div className="space-y-6">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className={`rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  project.index === 0
                    ? "border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-violet-50/40 hover:border-indigo-200"
                    : "border-slate-100 bg-gradient-to-br from-slate-50/80 to-blue-50/30 hover:border-slate-200"
                }`}
              >
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold text-sm mt-1">{project.sub}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-slate-900 border border-gray-200 hover:border-slate-400 bg-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl text-sm md:text-base">
                    {project.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Features */}
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-4">
                        Key Features
                      </h4>
                      <ul className="space-y-2.5">
                        {project.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 bg-white text-slate-800 text-sm font-semibold rounded-lg border border-gray-200 shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          CAREER
      ══════════════════════════════════════ */}
      <section id="career" className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-500 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            Career
          </p>
          <h2 className="text-4xl font-black text-slate-900 mb-3">경력 타임라인</h2>
          <p className="text-gray-400 mb-16">2015 – 2025 · 10년간의 주요 커리어</p>

          <div className="space-y-4">
            {EXPERIENCE.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      item.type === "Work"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {item.type === "Work" ? "Career" : "Project"}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 font-medium">{item.period}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>

                {item.challenges && (
                  <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <div className="text-[10px] font-bold text-red-500 uppercase tracking-[0.15em] mb-1.5">
                        Challenge
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.challenges}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.15em] mb-1.5">
                        Solution
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.solutions}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tech?.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 bg-gray-100 text-gray-500 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          SKILLS
      ══════════════════════════════════════ */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-500 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            Skills
          </p>
          <h2 className="text-4xl font-black text-slate-900 mb-16">기술 스택</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-indigo-100 hover:shadow-md transition-all"
              >
                <h3 className="text-[11px] font-bold text-indigo-500 uppercase tracking-[0.2em] mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 bg-gray-50 text-slate-700 rounded-lg border border-gray-100 font-medium hover:bg-indigo-50 hover:border-indigo-100 hover:text-indigo-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            함께 일하고 싶다면
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            현재 재직 중이지만, 흥미로운 기회나 협업 제안은 언제든 환영합니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${ME.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors text-base"
            >
              <Mail size={18} />
              이메일 보내기
            </a>
            <a
              href={ME.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 hover:border-white/50 text-white font-bold rounded-xl transition-colors text-base"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </section>


      {/* ── Footer ── */}
      <footer className="py-8 text-center text-sm text-gray-600 bg-slate-950 border-t border-white/5">
        © {new Date().getFullYear()} {ME.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
