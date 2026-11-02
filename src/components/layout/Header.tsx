"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Brand from "./Brand";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Nav");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {t(item.key as any)}
            </Link>
          ))}
        </nav>

        <div className="header-action flex items-center gap-3">
          <LanguageSwitcher />
          <Button href="/contact">{t("getStarted")}</Button>
        </div>

        <button
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {t(item.key as any)}
            </Link>
          ))}
          <Link
            className="mobile-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            {t("getStarted")} ↗
          </Link>
          <div className="pt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}