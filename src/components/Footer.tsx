import { siteConfig } from "@/config/site";
import SolvfunLogo from "./SolvfunLogo";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo & description */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a href="/" className="flex items-center">
              <SolvfunLogo iconSize={28} textClass="text-2xl" />
            </a>
            <p className="text-xs text-text-tertiary">
              {siteConfig.copyright}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.legal.privacy}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Privacy Policy
            </a>
            <a
              href={siteConfig.legal.terms}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Terms of Service
            </a>
            <a
              href={siteConfig.legal.fees}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Fees
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
