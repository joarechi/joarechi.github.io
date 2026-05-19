"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "소개" },
  { href: "#skills", label: "기술 스택" },
  { href: "#projects", label: "프로젝트" },
  { href: "#career", label: "경력" },
  { href: "#education", label: "학력 / 자격증" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-stone-900/5 bg-[#f9f6f1]/82 backdrop-blur-xl"
          : "bg-[#f9f6f1]/52 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-950">
          조두현
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-stone-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="p-2 text-stone-600 transition-colors hover:text-slate-950 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-stone-900/5 bg-[#f9f6f1]/92 px-6 py-4 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
