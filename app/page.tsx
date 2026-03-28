"use client";

import { useState } from "react";
import { Github, Mail, ChevronDown, ArrowRight } from "lucide-react";

// ============================================================
// 본인 정보
// ============================================================
const ME = {
  name: "조두현",
  role: "11년 차 풀스택 개발자 & 백엔드 팀장",
  bio: "비즈니스 성장에 기여하는 튼튼한 시스템을 설계하고 자동화로 일의 효율을 높입니다. 현재는 대형 이커머스 솔루션의 백엔드 팀장으로서 노후화된 시스템을 최신 구조로 개편하고 인공지능(AI)을 활용한 자동화 시스템을 만들고 있습니다.",
  email: "joarechi@gmail.com",
  github: "https://github.com/joarechi",
  location: "Seoul, Korea",
};


const EXPERIENCE = [
  {
    year: "2026",
    type: "Work",
    title: "E-Commerce Solution | AI 기반 자동 업무 시스템 구축",
    desc: "인공지능을 활용하여 수작업으로 진행되던 상품 분류 작업을 자동화",
    challenge: "수십만 개의 상품 정보를 사람이 일일이 분류하던 기존 방식을 AI가 자동으로 처리하도록 개선하여 운영 속도 향상",
    tag: "AI/Automation",
    period: "2025.01 ~ 2026.03",
    challenges: "단순한 글자 매칭으로는 상품의 의미를 정확히 파악하기 어려워 오분류 발생 및 작업 시간 과다 소요",
    solutions: "문맥을 이해하는 AI 기술을 도입하여 자동 분류율을 높이고, 정밀한 검토가 필요한 데이터만 관리자가 확인하게 하여 효율성 극대화",
    tech: ["NestJS", "Elasticsearch", "OpenAI AI", "TypeScript"],
  },
  {
    year: "2025",
    type: "Work",
    title: "E-Commerce Solution | 차세대 통합 관리 플랫폼 개발",
    desc: "대규모 데이터를 빠르고 안정적으로 처리하는 새로운 서비스의 뼈대 설계",
    challenge: "기존 시스템의 성능 한계를 극복하기 위해 많은 양의 상품 정보를 지연 없이 보여줄 수 있는 구조와 데이터 저장 방식 도입",
    tag: "Platform Building",
    period: "2024.01 ~ 2025.12",
    challenges: "시스템 구조의 경직성으로 인해 새로운 요구사항 반영이 어렵고 많은 상품 검색 시 속도가 느려지는 문제",
    solutions: "기능별로 시스템을 효율적으로 나누고 검색 전용 엔진을 도입하여 조회 성능을 이전보다 40% 이상 개선",
    tech: ["MySQL", "Elasticsearch", "NestJS", "Redis"],
  },
  {
    year: "2024",
    type: "Work",
    title: "E-Commerce Solution | 서비스 기반의 현대적 SaaS 플랫폼 전환",
    desc: "기존 PC 설치형 프로그램(WinForm)을 웹 기반 SaaS 서비스로 전환하고 10여 개 오픈마켓 API 연동",
    challenge: "전용 프로그램의 한계를 넘어 접근성을 높이기 위해 웹 플랫폼으로 전면 개편하고 주요 쇼핑몰 데이터를 통합 관리",
    tag: "SaaS/API Integration",
    period: "2023.12 ~ 2024.12",
    challenges: "윈폼 프로그램의 레거시 구조 개선 및 다양한 오픈마켓 API 연동의 복잡성 해결",
    solutions: "비동기 메시지 처리(Kafka) 도입 및 최신 웹 프레임워크(Java/Node) 전환으로 서비스 가동률 99.9% 달성",
    tech: ["Java", "Node.js", "Kafka", "Market API"],
  },
  {
    year: "2020–2023",
    type: "Work",
    title: "IT Infrastructure | 노후 시스템 리뉴얼 및 운영 프로세스 현대화",
    desc: "인수인계 없이 버려진 10년 된 코드들을 분석하여 현대적인 기술로 하나씩 재건축",
    challenge: "문서와 인수인계가 전혀 없는 복잡한 기존 시스템의 작동 원리를 역으로 분석하여 안정화함",
    tag: "Legacy/DevOps",
    period: "2020.11 ~ 2023.11",
    challenges: "성능이 저하된 서버와 낙후된 기술 스택, 그리고 모든 작업을 사람이 수동으로 하던 비효율적인 환경",
    solutions: "소스코드 역추적을 통해 흩어진 비즈니스 로직을 하나로 통합하고, 자동 배포 시스템과 데이터베이스 최적화를 통해 응답 속도를 크게 개선",
    tech: ["Java", "Spring Boot", "Docker", "Database Tuning"],
  },
  {
    year: "2017–2020",
    type: "Work",
    title: "Travel & Airlines | 국내 항공 제휴 및 자동화 시스템",
    desc: "국내 항공권 정보를 실시간으로 연결하고 간편결제 시스템을 도입",
    challenge: "국내 항공사 및 예약 채널들과의 데이터를 실시간으로 주고받으며 복잡한 취소/환불 업무를 자동화",
    tag: "Airlines/Payment",
    period: "2017.07 ~ 2020.11",
    challenges: "많은 사용자의 실시간 검색 요청을 안정적으로 처리하고 결제 정산의 정확성 확보",
    solutions: "시스템 간 통신 최적화와 결제 검증 로직 강화를 통해 결제 완료율을 15% 이상 향상시킴",
    tech: [".NET", "C#", "MSSQL", "Payment Security"],
  },
  {
    year: "2014–2016",
    type: "Work",
    title: "Security & Operations | 결제 보안 및 백업 시스템 구축",
    desc: "카드 결제 정보를 안전하게 암호화하고 서버 장애 시 즉각 대응 가능한 백업 체계 구축",
    challenge: "엄격한 금융 보안 규정을 준수하면서 예기치 못한 장애 상황에서도 안정적으로 운영될 수 있는 기반 설계",
    tag: "Security/Infra",
    period: "2014.06 ~ 2016.07",
    challenges: "보안 법규 강화에 따른 카드 정보 보호 대책 마련 및 시스템 장애 시 서비스 중단을 방지할 수 있는 대비책 필요",
    solutions: "여신법 준수 암호화 서버를 구축하고, 메인 서버 장애를 대비한 백업 서버 체계를 마련하여 무정지 운영 환경 조성",
    tech: [".NET", "C#", "MSSQL", "Backup System"],
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
    category: "Languages & Frameworks",
    items: ["Node.js / NestJS (TypeScript)", "Java / Spring Boot", ".NET / C#", "Python", "React / Next.js", "jQuery / Vanilla JS"],
  },
  {
    category: "Messaging & Async",
    items: ["Kafka (Event Driven)", "Redis (Pub/Sub, MQ)", "RabbitMQ", "NestJS Scheduler"],
  },
  {
    category: "Database & Search",
    items: ["MySQL / MSSQL", "Elasticsearch (Vector Search)", "Redis (Caching)", "Supabase (Auth/DB)"],
  },
  {
    category: "Infra & DevOps",
    items: ["AWS / GCP", "Docker / Kubernetes", "GitHub Actions / GitLab CI", "VMWare", "High Availability Designer"],
  },
  {
    category: "Expertise",
    items: ["AI Automation", "E-commerce Domain", "Payment/Airlines GDS", "Security & Encryption"],
  },
];
// ============================================================

export default function Home() {
  const [openYears, setOpenYears] = useState<Set<string>>(
    new Set(["2026", "2025", "2024", "2020–2023"])
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
                  href="#career"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  경력 보기 <ArrowRight size={15} />
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
                  {["NestJS", "Node.js", "TypeScript", "Next.js", "Cloud Run", "CI/CD"].map((t) => (
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
                num: "11년+",
                label: "Backend Specialist",
                desc: "이커머스 및 항공 도메인에서 멈추지 않는 튼튼한 시스템을 설계하고 운영합니다.",
              },
              {
                num: "Education",
                label: "KNOU CS",
                desc: "한국방송통신대학교 컴퓨터과학 학사 졸업 (GPA 3.5). 현업과 학업을 병행하며 성장",
              },
              {
                num: "Certificates",
                label: "Engineer",
                desc: "정보처리기사 (2018.11) 취득. 금융 보안 및 암호화 서버 구축 전문가",
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
          CAREER
      ══════════════════════════════════════ */}
      <section id="career" className="py-24 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-indigo-500 text-xs font-mono tracking-[0.25em] uppercase mb-5">
            Career
          </p>
          <h2 className="text-4xl font-black text-slate-900 mb-3">경력 타임라인</h2>
          <p className="text-gray-400 mb-16">2014 – 2026 · 11년간의 성과 기록</p>

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
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                                className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${item.type === "Work"
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
