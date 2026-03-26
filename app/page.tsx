"use client";

import { useState } from "react";
import { Github, Mail, ChevronDown } from "lucide-react";

// ============================================================
// 본인 정보
// ============================================================
const ME = {
  name: "조두현",
  role: "백엔드 & 자동화 플랫폼 개발자",
  bio: "2015년부터 항공·여행·이커머스 도메인에서 백엔드 시스템을 설계하고 운영해온 개발자. 반복 업무를 자동화 파이프라인으로 전환하고, NestJS + Cloud Run 기반의 플랫폼을 직접 설계·운영합니다.",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi",
  location: "Seoul, Korea",
};

const PROJECTS: never[] = [];

const EXPERIENCE = [
  {
    year: "2026",
    type: "Project",
    title: "카테고리 매핑 AI 연동 고도화",
    desc: "상품 카테고리 자동 매핑 시스템에 AI 연동 — 콘텐츠 벡터화 및 키워드 색인을 통한 매핑 데이터 누적"
    challenge: "수동으로 수시간씩 걸리던 카테고리 매핑 작업을 AI 파이프라인으로 자동화. 비용 절감을 위해 기매핑 데이터를 누적 활용하는 구조로 설계, 오매핑 케이스를 감지하고 보완하는 로직 구현이 핵심 난관",
    tag: "AI/Search",
    period: "진행 중",
    challenges: "다양한 쇼핑몰·카테고리 간 명칭 불일치로 인한 수동 매핑 비용 증가",
    solutions: "콘텐츠를 벡터화하고 키워드를 지속 색인하여 벡터 유사도 기반 자동 분류로 매핑 효율 지속 개선",
    tech: ["Elasticsearch", "NestJS", "TypeScript", "AI/LLM"],
  },
  {
    year: "2025",
    type: "Work",
    title: "이커머스 솔루션 (배송/상품)",
    desc: "주문관리 DB 설계 및 상품관리 시스템 보완 런칭",
    challenge: "상품관리: UI 개편과 메뉴 구조 변경에 따라 URL·DB 스키마·서버를 전면 재설계. 주문관리: 기존 시스템의 묶음주문·분할배송·부분취소 처리 한계를 분석하고 이를 수용하는 DB 스키마를 새로 설계",
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
    challenge: "다수 오픈마켓의 대용량 요청을 처리하기 위해 Kafka 기반 아키텍처를 도입하고 요청량 제어를 설계, 마켓마다 상이한 데이터 구조를 유연하게 수용하는 DB 스키마 설계",
    tag: "플랫폼 빌딩",
    period: "01~12",
    challenges: "기존 PHP 기반의 무거운 모놀리식 시스템으로 인해 신규 마켓 연동 속도 저하",
    solutions: "NestJS 마이크로서비스 아키텍처 도입 및 API 규격 표준화를 통해 신규 연동 생산성 향상",
    tech: ["Node.js", "NestJS", "TypeScript", "PHP"],
  },
    {
    year: "2023",
    type: "Work",
    title: "인프라 고도화 및 이미지 서비스 리뉴얼",
    desc: "VMWare 서버 이전 및 이미지 API 서버 리뉴얼 (PHP→Java)",
    challenge: "인수인계 없는 레거시 PHP 이미지 서버의 API 동작을 역분석하며 Java로 리뉴얼, 비용 절감을 위해 외부 클라우드에서 내부 물리 서버로 이관 완료",
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
    challenge: "10년 이상 레거시 .NET API를 Java Spring으로 포팅하며 동일 동작을 보장하는 것이 최대 난관. Docker 도입과 함께 DevOps를 처음 적용하며 Java 환경의 메모리 관리와 초기 배포 이슈를 직접 겪으며 해결",
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
    desc: "카카오 톡스토어 연동 및 굿스플로 3PL 물류 인터페이스 구축"
    challenge: "카카오 톡스토어 신규 마켓 연동과 굿스플로 송장발행 솔루션 구축 시, WinForms 환경에서 웹뷰 연동이 필요해 Edge/Chrome 드라이버를 직접 활용하는 방식으로 해결",
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
    challenge: "네이버페이·스마일페이 등 간편결제 모듈과 항공사 시스템이 각각 독립적으로 운영되어, 양쪽 연동 구현과 테스트 커뮤니케이션을 조율하며 통합 결제 시스템을 완성",
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
    challenge: "위메프 항공 제휴를 위해 파트너사 요구 프론트엔드를 직접 구현하고 연동 테스트를 통과, 자사 렌터카 서비스는 UI 전면 개편과 함께 렌터카 업체 API를 최초 연동",
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
    challenge: "스카이스캐너 정산 트래킹 방식과 파트너 요구 항공사 API 규격을 분석·구현, 높은 트래픽 처리를 위해 Go 언어로 API 서버를 개발",
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
    challenge: "항공사 제공 SOAP API의 복잡한 명세를 분석하며 예약 시스템을 안정화하고, 결제 보안 암호화 서버 구축 시 제공 라이브러리와 언어 미호환 문제를 직접 해결하며 서버를 완성",
    tag: "Security/Airline",
    period: "Full-term",
    challenges: "여신전문금융업법 준수를 위한 결제 데이터 암호화 및 레거시 데이터 마이그레이션",
    solutions: "표준 보안 암호화 알고리즘 적용 및 단계별 무중단 서버 이전 성공",
    tech: ["Java", "Security Package", "VMWare"],
  },
];

// 연도별 그룹핑 (EXPERIENCE 순서 유지)
const EXPERIENCE_BY_YEAR = EXPERIENCE.reduce<{ year: string; items: typeof EXPERIENCE }[]>(
  (acc, item) => {
    const existing = acc.find((g) => g.year === item.year);
    if (existing) {
      existing.items.push(item);
    } else {
      acc.push({ year: item.year, items: [item] });
    }
    return acc;
  },
  []
);

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
    items: ["VMWare (Private Cloud)", "Google Cloud Run / Cloud Functions", "Docker", "GitHub Actions", "Kubernetes", "ArgoCD", "GitLab CI/CD"],
  },
  {
    category: "Extra Capabilities",
    items: ["데이터 보안/암호화", "이커머스 도메인 설계", "결제 및 항공 GDS 연동"],
  },
];
// ============================================================

export default function Home() {
  const [openYears, setOpenYears] = useState<Set<string>>(
    new Set(["2026", "2025", "2024"])
  );

  const toggleYear = (year: string) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  };

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

          <div className="space-y-3">
            {EXPERIENCE_BY_YEAR.map(({ year, items }) => {
              const isOpen = openYears.has(year);
              return (
                <div
                  key={year}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-indigo-100 transition-colors"
                >
                  {/* ── 연도 헤더 (클릭 토글) ── */}
                  <button
                    onClick={() => toggleYear(year)}
                    className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-lg font-black text-slate-900">{year}</span>
                      <span className="text-sm text-gray-400 font-medium">
                        · {items.length}개
                      </span>
                      <div className="flex gap-1.5">
                        {items.some((i) => i.type === "Work") && (
                          <span className="text-[11px] px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-semibold">
                            Career
                          </span>
                        )}
                        {items.some((i) => i.type === "Project") && (
                          <span className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full font-semibold">
                            Project
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* ── 아코디언 콘텐츠 (grid-template-rows 애니메이션) ── */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.35s ease",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 space-y-3">
                        {items.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl p-5 border border-gray-100 bg-gray-50 hover:border-indigo-200 hover:bg-white transition-all"
                          >
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                              <span
                                className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                                  item.type === "Work"
                                    ? "bg-blue-50 text-blue-600"
                                    : "bg-emerald-50 text-emerald-600"
                                }`}
                              >
                                {item.type === "Work" ? "Career" : "Project"}
                              </span>
                              <span className="ml-auto text-xs text-gray-400 font-medium">
                                {item.period}
                              </span>
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed mb-3">
                              {item.desc}
                            </p>

                            {item.challenges && (
                              <div className="grid md:grid-cols-2 gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                <div>
                                  <div className="text-[10px] font-bold text-red-500 uppercase tracking-[0.15em] mb-1.5">
                                    Challenge
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {item.challenges}
                                  </p>
                                </div>
                                <div>
                                  <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.15em] mb-1.5">
                                    Solution
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {item.solutions}
                                  </p>
                                </div>
                              </div>
                            )}

                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {item.tech?.map((t) => (
                                <span
                                  key={t}
                                  className="text-[11px] px-2.5 py-1 bg-white text-gray-500 rounded-md font-medium border border-gray-100"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
