"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import SolvfunLogo from "./SolvfunLogo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <SolvfunLogo iconSize={32} textClass="text-3xl" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
          <div className="group relative overflow-hidden rounded-xl bg-brand px-6 py-2.5 cursor-pointer transition-all duration-200 hover:scale-[1.03]">
            <span className="flex items-center font-semibold text-text-on-brand transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
              Download
            </span>
            <span className="absolute inset-0 flex items-center justify-center font-semibold text-text-on-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
              Coming Soon
            </span>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border-subtle bg-bg-base px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
            <div className="group relative overflow-hidden rounded-xl bg-brand px-6 py-2.5 cursor-pointer text-center transition-all duration-200">
              <span className="flex items-center justify-center font-semibold text-text-on-brand transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                Download
              </span>
              <span className="absolute inset-0 flex items-center justify-center font-semibold text-text-on-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
                Coming Soon
              </span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
