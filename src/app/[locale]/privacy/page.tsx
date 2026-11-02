import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowLeft, Shield, Lock, Eye, Cookie, UserCheck, Mail } from "lucide-react";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | varchasv India",
  description: "Learn how varchasv India collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  const t = useTranslations("PrivacyPage");
  const lastUpdated = "November 1, 2025";

  return (
    <article className="bg-[#09091a] py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] text-[#a7a6bd] hover:text-[#19ddcf] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> {t("backToHome")}
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(19,220,202,.12)] text-[#21e0cf] text-[10px] font-bold uppercase tracking-[1px] mb-5">
            <Shield size={12} /> {t("legalBadge")}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#f7f6ff] mb-4">
            {t("title")}
          </h1>
          <p className="text-[12px] text-[#77748d]">
            {t("lastUpdated")}: <span className="text-[#a7a6bd]">{lastUpdated}</span>
          </p>
        </header>

        <div className="h-px bg-[rgba(174,171,224,.16)] mb-10" />

        {/* Intro */}
        <p className="text-[15px] text-[#a7a6bd] leading-[1.9] mb-8">
          {t("intro")}
        </p>

        {/* Sections */}
        <div className="space-y-10">
          <Section icon={<Eye size={18} />} title={t("s1.title")}>
            <p>{t("s1.p1")}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s1.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s1.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s1.l3") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s1.l4") }} />
            </ul>
          </Section>

          <Section icon={<UserCheck size={18} />} title={t("s2.title")}>
            <ul>
              <li>{t("s2.l1")}</li>
              <li>{t("s2.l2")}</li>
              <li>{t("s2.l3")}</li>
              <li>{t("s2.l4")}</li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s2.p1") }} />
          </Section>

          <Section icon={<Lock size={18} />} title={t("s3.title")}>
            <p>{t("s3.p1")}</p>
          </Section>

          <Section icon={<Cookie size={18} />} title={t("s4.title")}>
            <p>{t("s4.p1")}</p>
          </Section>

          <Section icon={<Mail size={18} />} title={t("s5.title")}>
            <p>{t("s5.p1")}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l3") }} />
            </ul>
            <p>{t("s5.p2")}</p>
          </Section>

          <Section icon={<Shield size={18} />} title={t("s6.title")}>
            <p>{t("s6.p1")}</p>
            <ul>
              <li>{t("s6.l1")}</li>
              <li>{t("s6.l2")}</li>
              <li>{t("s6.l3")}</li>
              <li>{t("s6.l4")}</li>
            </ul>
          </Section>

          <Section icon={<UserCheck size={18} />} title={t("s7.title")}>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s7.p1") }} />
          </Section>

          <Section icon={<Mail size={18} />} title={t("s8.title")}>
            <p>{t("s8.p1")}</p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-[#19ddcf] hover:underline">{contact.email}</a>
              <br />
              <strong>Phone:</strong> <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="text-[#19ddcf] hover:underline">{contact.phone}</a>
              <br />
              <strong>Address:</strong> {contact.location}
            </p>
          </Section>

          <Section icon={<Lock size={18} />} title={t("s9.title")}>
            <p>{t("s9.p1")}</p>
          </Section>
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101027] border border-[rgba(174,171,224,.16)]">
          <p className="text-[12px] text-[#77748d] leading-[1.8]">
            {t("footer.p1")}{" "}
            <Link href="/terms" className="text-[#19ddcf] hover:underline">
              {t("footer.link")}
            </Link>.
          </p>
        </div>
      </div>
    </article>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-9 h-9 rounded-lg bg-[rgba(240,68,145,.12)] border border-[rgba(240,68,145,.18)] text-[#f06a9f] grid place-items-center shrink-0">
          {icon}
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-[#f7f6ff]">{title}</h2>
      </div>
      <div className="[&_p]:text-[14px] [&_p]:text-[#a7a6bd] [&_p]:leading-[1.9] [&_p]:mb-3 [&_ul]:space-y-2 [&_ul]:mb-3 [&_li]:text-[14px] [&_li]:text-[#a7a6bd] [&_li]:leading-[1.8] [&_li]:pl-4 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:rounded-full [&_li]:before:bg-[#21e0cf] [&_strong]:text-[#f7f6ff] [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}