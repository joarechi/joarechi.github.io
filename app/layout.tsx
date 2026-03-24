import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "조두현 | 백엔드 개발자 포트폴리오",
  description: "11년 경력 백엔드 개발자 조두현의 포트폴리오 — Java, Spring, NestJS, API 연동 전문",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
