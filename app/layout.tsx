import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "조두현 | 풀스택 개발자 포트폴리오",
  description: "10년+ 경력 풀스택 개발자 조두현의 포트폴리오 — Java, Spring, NestJS, Next.js, AI 자동화 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
