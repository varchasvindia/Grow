import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { partners } from "@/lib/data";
import Image from "next/image";

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <section className="py-20 px-6 md:px-12 bg-[#09091a]">
      <div className="container mx-auto">
        
        {/* Elegant Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f7f6ff]">
            {t("titleLine1")}{" "}
            <span className="bg-gradient-to-r from-[#ff7a75] via-[#ed4599] to-[#b14edb] bg-clip-text text-transparent">
              {t("titleLine2")}
            </span>
          </h2>
          <p className="text-[15px] leading-[1.8] text-[#a7a6bd]">
            {t("subtitle")}
          </p>
        </div>

        {/* Unified Grid: Partners + CTA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Partner Cards */}
          {partners.slice(0, 3).map((p) => (
            <a 
              key={p.name} 
              href={p.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex min-h-[160px] items-center justify-center overflow-hidden rounded-2xl border border-[rgba(174,171,224,.16)] bg-[#101027] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(28,219,205,.55)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(25,221,207,.03)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#19ddcf] to-[#f06a9f] transition-all duration-500 group-hover:w-full" />
              <div className="relative flex h-16 w-full items-center justify-center">
                <Image 
                  src={p.logo} 
                  alt={p.name} 
                  width={140} 
                  height={70} 
                  className="max-h-14 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0" 
                />
              </div>
            </a>
          ))}

          {/* Become Our Next Partner (CTA Card) */}
          <Link
            href="/contact"
            className="group relative flex min-h-[160px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[rgba(25,221,207,.4)] bg-[#101027] p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#f06a9f]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(25,221,207,.05)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(25,221,207,.4)] bg-[rgba(25,221,207,.1)] text-xl text-[#21e0cf] transition-all duration-500 group-hover:rotate-90 group-hover:border-[#f06a9f] group-hover:text-[#f06a9f]">
              +
            </div>
            
            <h3 className="relative mb-1 text-sm font-bold text-[#f7f6ff]">
              {t("ctaTitle")}
            </h3>
            
            <span className="relative text-[10px] font-semibold uppercase tracking-widest text-[#21e0cf] transition-colors group-hover:text-[#f06a9f]">
              {t("ctaLink")} →
            </span>
          </Link>

        </div>
        
      </div>
    </section>
  );
}