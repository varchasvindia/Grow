"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";

const labels: Record<string, string> = {
  en: "EN",
  hi: "IN",
};

const fullNames: Record<string, string> = {
  en: "English",
  hi: "हिन्दी (Hindi)",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative inline-flex items-center">
      <Globe
        size={14}
        className="absolute left-2.5 text-[#a7a6bd] pointer-events-none"
      />
      <select
        value={locale}
        onChange={(e) => handleChange(e.target.value)}
        aria-label="Select language"
        className="appearance-none bg-[#101027] border border-[rgba(174,171,224,.16)] text-[#f7f6ff] text-xs font-semibold rounded-full pl-8 pr-7 py-1.5 cursor-pointer hover:border-[rgba(28,219,205,.55)] focus:outline-none focus:border-[#19ddcf] transition-colors leading-none"
      >
        {routing.locales.map((loc) => (
          <option
            key={loc}
            value={loc}
            title={fullNames[loc] ?? loc}
            className="bg-[#101027] text-[#f7f6ff]"
          >
            {labels[loc] ?? loc.toUpperCase()}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <svg
        className="absolute right-2.5 w-3 h-3 text-[#a7a6bd] pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}