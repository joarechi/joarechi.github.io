"use client";

import { Github, Mail, ExternalLink, ChevronDown } from "lucide-react";

// ============================================================
// 여기에 본인 정보를 입력하세요
// ============================================================
const ME = {
  name: "조두현",
  role: "백엔드 개발자 · 10년 경력",
  bio: "2015년부터 항공·여행·이커머스 도메인에서 대규모 트래픽 처리와 시스템 현대화를 주도해 온 백엔드 개발자입니다. 복잡한 비즈니스 로직의 API 설계부터 클라우드 인프라 아키텍처까지, 비즈니스 가치를 극대화하는 안정적인 기술 해결책을 제시합니다.",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi",
  location: "Seoul, Korea",
};

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
    tech: ["MySQL", "Elasticsearch", "Spring Boot"]
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
    tech: ["Node.js", "NestJS", "TypeScript", "PHP"]
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
    tech: ["TypeScript", "NestJS", "Redis", "MySQL"]
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
    tech: ["Java", "Spring", "VMWare", "PHP"]
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
    tech: ["Java", "Spring", "Oracle", "MySQL"]
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
    tech: ["PHP", "Java", "REST API"]
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
    tech: ["Java", "SOAP", "REST API"]
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
    tech: ["Java", "PHP", "SOAP"]
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
    tech: ["Java", "SOAP", "MySQL"]
  },
  {
    year: "2015-2017",
    type: "Work",
    title: "시스템 안정화 및 보안 인프라 구축",
    desc: "대한항공 SOAP 4.0 전환 및 결제 보안 암호화 서버 구축",
    tag: "Security/Airline",
    period: "Full-term",
    challenges: "여신전문금융업법 준수를 위한 결제 데이터 암호화 및 레거시 데이터 마이그레이션",
    solutions: "표준 보안 암호화 알고리즘 적용 및 단계별 무중단 서버 이전 성공",
    tech: ["Java", "Security Package", "VMWare"]
  }
];

const SKILLS = [
  {
    category: "Backend Expert",
    items: ["Java / Spring Boot", "Node.js / NestJS", "TypeScript", "PHP", "REST API / SOAP"],
  },
  {
    category: "Database & Search",
    items: ["MySQL", "Elasticsearch (색인/검색 최적화)", "Supabase", "Redis (Caching/Message Queue)"],
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
        <div className="max-w-5xl mx-auto">
          <SectionTitle>경력 및 프로젝트</SectionTitle>
          <p className="text-center text-gray-500 dark:text-gray-400 mt-3 mb-16">2015 – 2025 · 10년간의 주요 커리어 매정표 및 도전과제</p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 to-purple-500 hidden md:block" />
            <div className="space-y-12">
              {EXPERIENCE.map((item, idx) => (
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
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:shadow-xl">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="md:hidden text-xs font-bold text-indigo-500">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        item.type === 'Work' 
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                        : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      }`}>
                        {item.type === 'Work' ? 'Career' : 'Project'}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium">{item.tag}</span>
                      <span className="ml-auto text-xs text-gray-400">{item.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.desc}</p>

                    {item.challenges && (
                      <div className="grid md:grid-cols-2 gap-4 mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                        <div>
                          <h4 className="text-xs font-bold text-red-500 uppercase tracking-tight mb-1">Challenge</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.challenges}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-green-500 uppercase tracking-tight mb-1">Solution</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.solutions}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech?.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
