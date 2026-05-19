import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { loadResumeData } from "@/lib/resume";
import Reveal from "@/components/Reveal";

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-500">
      {children}
    </p>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-4xl">
      <SectionEyebrow>{title}</SectionEyebrow>
      {subtitle ? (
        <p className="mt-4 text-[clamp(2.2rem,4.8vw,4.8rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function BadgeList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function StatCard({ value, label, desc }: { value: string; label: string; desc: string }) {
  return (
    <article className="rounded-[1.5rem] border border-slate-900/10 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
      <div className="text-3xl font-semibold tracking-[-0.08em] text-slate-950">{value}</div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
    </article>
  );
}

function FeatureCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-[1.75rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
      <h3 className="text-xl font-semibold tracking-[-0.05em] text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
    </article>
  );
}

function getStartYear(period: string) {
  const match = period.match(/^(\d{4})\./);
  return match?.[1] ?? period.slice(0, 4);
}

function getStartOrder(period: string) {
  const match = period.match(/^(\d{4})\.(\d{2})/);
  if (!match) {
    return Number.MAX_SAFE_INTEGER;
  }

  return Number(match[1]) * 12 + Number(match[2]);
}

function getYearSummaries(items: { title: string; period: string }[]) {
  const groups = items.reduce<Map<string, string[]>>((acc, item) => {
    const year = getStartYear(item.period);
    const current = acc.get(year) ?? [];
    current.push(item.title);
    acc.set(year, current);
    return acc;
  }, new Map());

  return Array.from(groups.entries())
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, titles]) => ({
      year,
      titles,
    }));
}

function ProjectCard({
  title,
  period,
  role,
  problem,
  solution,
  result,
  tech,
}: {
  title: string;
  period: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
}) {
  return (
    <article className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-7">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="min-w-0">
          <h3 className="mt-1 truncate text-[clamp(1.25rem,2.2vw,2.2rem)] font-semibold leading-[1.04] tracking-[-0.08em] text-slate-950">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-600">{role}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[12px] font-semibold tracking-[-0.01em] text-slate-600">
            기간 {period}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold tracking-[-0.03em] text-slate-950">문제</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{problem}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold tracking-[-0.03em] text-slate-950">해결</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{solution}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold tracking-[-0.03em] text-slate-950">성과</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{result}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-200 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          사용 스킬
        </p>
        <div className="mt-3">
          <BadgeList items={tech} />
        </div>
      </div>
    </article>
  );
}

function CareerCard({
  company,
  period,
  role,
  domains,
  intro,
  items,
}: {
  company: string;
  period: string;
  role: string;
  domains: string;
  intro: string;
  items: { title: string; period: string; role: string; domains: string; skills: string[]; bullets: string[]; achievements: string[] }[];
}) {
  return (
    <article className="rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-7">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="min-w-0">
          <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-[clamp(1.5rem,2.6vw,2.6rem)] font-semibold leading-[1.04] tracking-[-0.08em] text-slate-950">
              {company}
            </h3>
            {role ? <span className="text-[12px] font-medium tracking-[-0.04em] text-slate-500">{role}</span> : null}
            <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400">({period})</span>
          </div>
          <p className="mt-4 max-w-2xl text-[13px] leading-6 text-slate-600">{domains}</p>
        </div>
      </div>

      <p className="mt-2.5 max-w-4xl text-[15px] leading-7 text-slate-700">{intro}</p>

      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <section key={`${item.title}-${item.period}`} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
              <div className="min-w-0">
                <h4 className="text-lg font-semibold tracking-[-0.05em] text-slate-950">
                  {item.title}
                </h4>
              </div>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[12px] font-semibold tracking-[-0.01em] text-slate-600">
                기간 {item.period}
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">{item.role}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.domains}</p>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">주요 업무</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-[0.78em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">주요 성과</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="mt-[0.78em] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">사용 스킬</p>
              <div className="mt-3">
                <BadgeList items={item.skills} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function InfoPanel({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-slate-900/5 py-4 last:border-b-0">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6d8b83]">{label}</dt>
      <dd className="mt-2 text-base leading-7 text-slate-950">{value}</dd>
    </div>
  );
}

export default async function Home() {
  const data = await loadResumeData();

  return (
    <main className="relative overflow-hidden bg-transparent text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(112,118,116,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(200,191,180,0.1),transparent_28%),linear-gradient(180deg,#f9f5f0_0%,#ffffff_78%)]" />
      <div className="pointer-events-none absolute right-[-5rem] top-40 -z-10 h-80 w-80 rounded-full bg-[#e1e1dc]/60 blur-3xl" />
      <div className="pointer-events-none absolute left-[-6rem] top-[32rem] -z-10 h-96 w-96 rounded-full bg-[#ebe4da]/70 blur-3xl" />

      <section id="top" className="pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:py-24">
          <div className="hero-enter">
            <SectionEyebrow>Portfolio</SectionEyebrow>
            <h1 className="mt-4 max-w-4xl text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.08em] text-slate-950">
              {data.name}
            </h1>
            <p className="mt-5 max-w-4xl text-[clamp(1.15rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.05em] text-slate-800">
              {data.role}
            </p>
            <p className="mt-6 max-w-3xl text-[1rem] leading-8 text-slate-700">{data.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#4d5653] bg-[#4d5653] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#39403f]"
              >
                주요 프로젝트 보기 <ArrowRight size={15} />
              </a>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d4cec4] bg-white px-6 py-3 text-sm font-semibold text-[#5a605c] transition-colors hover:border-[#4d5653] hover:text-[#2a302f]"
              >
                GitHub
              </a>
            </div>

            <div className="mt-10 grid gap-5 border-t border-slate-900/10 pt-8 sm:grid-cols-3">
              {data.heroStats.map((stat, index) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="hero-enter"
                  style={{ animationDelay: `${180 + index * 90}ms` }}
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>

          <aside
            className="hero-enter rounded-[2rem] border border-stone-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            style={{ animationDelay: "120ms" }}
          >
            <div className="rounded-[1.5rem] border border-[#d7d2c8] bg-[#fbf9f4] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#70716d]">Status</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-950">{data.status}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">운영 안정성과 비즈니스 연속성을 함께 지키는 방향으로 일합니다.</p>
            </div>

            <dl className="mt-6">
              <InfoPanel label="Location" value={data.location} />
              <InfoPanel label="Email" value={data.email} />
              <InfoPanel label="GitHub" value={data.github.replace("https://", "")} />
            </dl>

            <div className="mt-6 border-t border-stone-900/5 pt-6">
              <BadgeList items={data.heroTags.slice(0, 8)} />
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="border-t border-stone-900/10 bg-white/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle title="ABOUT" subtitle="기술로 비즈니스의 연속성을 확보하고, 팀의 성장을 설계합니다." />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Reveal delay={0}>
              <FeatureCard
                title="레거시 현대화"
                body="오래 운영된 시스템의 의존성과 업무 흐름을 분석하고, 비즈니스 연속성을 유지한 채 점진적으로 개선합니다."
              />
            </Reveal>
            <Reveal delay={80}>
              <FeatureCard
                title="이커머스 도메인"
                body="상품, 주문, 배송, 외부 마켓 API 연동 등 이커머스 운영의 핵심 흐름을 실무 기준으로 설계하고 다뤄왔습니다."
              />
            </Reveal>
            <Reveal delay={160}>
              <FeatureCard
                title="안정적인 운영"
                body="장애 대응 중심의 운영에서 벗어나 자동화와 표준화로 팀이 더 가치 있는 개발에 집중할 수 있게 돕습니다."
              />
            </Reveal>
            <Reveal delay={240}>
              <FeatureCard
                title="AI 실무 적용"
                body="AI 추천, 이미지 크롭, RAG 기반 사내 지식 검색처럼 실제 업무 흐름에 붙는 기능을 구현해 왔습니다."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-stone-900/10 bg-[#f6f1e8] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle title="SKILLS" subtitle="레거시 전환부터 AI 적용까지 이어지는 실전 스택" />
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {data.skills.map((group, index) => (
              <Reveal key={group.category} delay={index * 90}>
                <article className="flex min-h-[12.5rem] flex-col rounded-[1.75rem] border border-stone-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
                  <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-950">{group.category}</h3>
                  <div className="mt-4 flex-1">
                    <BadgeList items={group.items} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="border-t border-stone-900/10 bg-white/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle title="TIMELINE" />
          </Reveal>

          <Reveal className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
            <div className="flex gap-5 overflow-x-auto pb-2">
              {[...data.career]
                .sort((a, b) => getStartOrder(b.period) - getStartOrder(a.period))
                .map((company, index) => (
                <Reveal key={`${company.company}-${company.period}`} delay={index * 70}>
                  <article className="min-w-[22rem] rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                    <p className="text-sm font-medium tracking-[-0.04em] text-slate-500">
                      {company.company}
                    </p>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {getStartYear(company.period)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-5 text-slate-500">{company.period}</p>
                    <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                      {company.domains}
                    </p>
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                        핵심 과제
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                        {company.items.slice(0, 3).map((item) => (
                          <li key={item.title} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                            <span className="line-clamp-2">{item.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="border-t border-stone-900/10 bg-white/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle title="PROJECTS" subtitle="대표 프로젝트" />
          </Reveal>
          <div className="mt-10 space-y-8">
            {data.featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="border-t border-stone-900/10 bg-[#f6f1e8] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle title="CAREER" subtitle="경력" />
          </Reveal>

          <div className="mt-10 space-y-8">
            {data.career.map((company, index) => (
              <Reveal key={company.company} delay={index * 90}>
                <CareerCard {...company} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-stone-900/10 bg-white/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle title="EDUCATION / CERTIFICATIONS" subtitle="학력 / 자격증" />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="space-y-5">
              {data.education.map((item, index) => (
                <Reveal key={item.school} delay={index * 90}>
                  <article className="flex min-h-[13rem] flex-col rounded-[1.5rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{item.school}</h3>
                    <div className="mt-3 space-y-1 text-sm leading-7 text-slate-600">
                      <p>{item.period}</p>
                      <p>{item.major}</p>
                      <p>{item.status}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="space-y-5">
              {data.certifications.map((item, index) => (
                <Reveal key={item.name} delay={index * 90}>
                  <article className="flex min-h-[13rem] flex-col rounded-[1.5rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">{item.name}</h3>
                    <div className="mt-3 space-y-1 text-sm leading-7 text-slate-600">
                      {item.date ? <p>{item.date}</p> : null}
                      <p>{item.issuer}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {data.name}</p>
          <p>{data.location}</p>
        </div>
      </footer>
    </main>
  );
}
