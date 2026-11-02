import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  ArrowLeft, RefreshCw, CheckCircle2, XCircle, AlertTriangle, CreditCard, Clock, Mail, FileCheck, Scale,
} from "lucide-react";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | varchasv India",
  description: "Transparent refund and cancellation policy for varchasv India's digital marketing, branding and web development services.",
};

export default function RefundPolicyPage() {
  const t = useTranslations("RefundPage");
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(240,68,145,.12)] text-[#ff76a9] text-[10px] font-bold uppercase tracking-[1px] mb-5">
            <RefreshCw size={12} /> {t("legalBadge")}
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

        <div className="space-y-10">
          {/* 1. Scope */}
          <Section icon={<FileCheck size={18} />} title={t("s1.title")}>
            <p>{t("s1.p1")}</p>
            <ul>
              <li>{t("s1.l1")}</li>
              <li>{t("s1.l2")}</li>
              <li>{t("s1.l3")}</li>
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s1.p2") }} />
          </Section>

          {/* 2. Tiered Refund Structure */}
          <Section icon={<CheckCircle2 size={18} />} title={t("s2.title")}>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s2.p1") }} />

            {/* Tier table */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-[rgba(174,171,224,.16)]">
              <table className="w-full text-left text-[13px] min-w-[500px]">
                <thead className="bg-[#101027] text-[#f7f6ff]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t("s2.tableHead1")}</th>
                    <th className="px-4 py-3 font-semibold">{t("s2.tableHead2")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(174,171,224,.1)]">
                  <tr className="bg-[#0d0d21]">
                    <td className="px-4 py-3 text-[#a7a6bd]">{t("s2.t1c1")}</td>
                    <td className="px-4 py-3 text-[#21e0cf] font-semibold">{t("s2.t1c2")}</td>
                  </tr>
                  <tr className="bg-[#09091a]">
                    <td className="px-4 py-3 text-[#a7a6bd]">{t("s2.t2c1")}</td>
                    <td className="px-4 py-3 text-[#21e0cf] font-semibold">{t("s2.t2c2")}</td>
                  </tr>
                  <tr className="bg-[#0d0d21]">
                    <td className="px-4 py-3 text-[#a7a6bd]">{t("s2.t3c1")}</td>
                    <td className="px-4 py-3 text-[#f0c419] font-semibold">{t("s2.t3c2")}</td>
                  </tr>
                  <tr className="bg-[#09091a]">
                    <td className="px-4 py-3 text-[#a7a6bd]">{t("s2.t4c1")}</td>
                    <td className="px-4 py-3 text-[#f0c419] font-semibold">{t("s2.t4c2")}</td>
                  </tr>
                  <tr className="bg-[#0d0d21]">
                    <td className="px-4 py-3 text-[#a7a6bd]">{t("s2.t5c1")}</td>
                    <td className="px-4 py-3 text-[#f06a9f] font-semibold">{t("s2.t5c2")}</td>
                  </tr>
                  <tr className="bg-[#09091a]">
                    <td className="px-4 py-3 text-[#a7a6bd]">{t("s2.t6c1")}</td>
                    <td className="px-4 py-3 text-[#f06a9f] font-semibold">{t("s2.t6c2")}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">{t("s2.p2")}</p>
          </Section>

          {/* 3. Non-Refundable */}
          <Section icon={<XCircle size={18} />} title={t("s3.title")}>
            <p>{t("s3.p1")}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s3.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s3.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s3.l3") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s3.l4") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s3.l5") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s3.l6") }} />
            </ul>
          </Section>

          {/* 4. What Qualifies */}
          <Section icon={<CheckCircle2 size={18} />} title={t("s4.title")}>
            <p>{t("s4.p1")}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s4.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s4.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s4.l3") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s4.l4") }} />
              <li>{t("s4.l5")}</li>
            </ul>
          </Section>

          {/* 5. What Does NOT Qualify */}
          <Section icon={<AlertTriangle size={18} />} title={t("s5.title")}>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l3") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l4") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l5") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s5.l6") }} />
            </ul>
          </Section>

          {/* 6. Cancellation */}
          <Section icon={<Clock size={18} />} title={t("s6.title")}>
            <p>{t("s6.p1")}</p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s6.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s6.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s6.l3") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s6.l4") }} />
            </ul>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s6.p2") }} />
          </Section>

          {/* 7. Refund Processing */}
          <Section icon={<CreditCard size={18} />} title={t("s7.title")}>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s7.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s7.l2") }} />
              <li>{t("s7.l3")}</li>
              <li>{t("s7.l4")}</li>
            </ul>
          </Section>

          {/* 8. Results Disclaimer */}
          <Section icon={<Scale size={18} />} title={t("s8.title")}>
            <p>{t("s8.p1")}</p>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s8.p2") }} />
          </Section>

          {/* 9. Disputes */}
          <Section icon={<AlertTriangle size={18} />} title={t("s9.title")}>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s9.p1") }} />
            <p>
              <strong>{t("s9.officer")}:</strong> {t("s9.team")}
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.email}`} className="text-[#19ddcf] hover:underline">
                {contact.email}
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="text-[#19ddcf] hover:underline">
                {contact.phone}
              </a>
            </p>
            <ul>
              <li dangerouslySetInnerHTML={{ __html: t.raw("s9.l1") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s9.l2") }} />
              <li dangerouslySetInnerHTML={{ __html: t.raw("s9.l3") }} />
            </ul>
          </Section>

          {/* 10. Legal Rights */}
          <Section icon={<Scale size={18} />} title={t("s10.title")}>
            <p dangerouslySetInnerHTML={{ __html: t.raw("s10.p1") }} />
          </Section>

          {/* 11. Contact */}
          <Section icon={<Mail size={18} />} title={t("s11.title")}>
            <p>{t("s11.p1")}</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.email}`} className="text-[#19ddcf] hover:underline">
                {contact.email}
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="text-[#19ddcf] hover:underline">
                {contact.phone}
              </a>
              <br />
              <strong>Address:</strong> {contact.location}
            </p>
          </Section>
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101027] border border-[rgba(174,171,224,.16)]">
          <p className="text-[12px] text-[#77748d] leading-[1.8]">
            {t("footer.p1")}{" "}
            <Link href="/terms" className="text-[#19ddcf] hover:underline">
              {t("footer.terms")}
            </Link>{" "}
            {t("footer.and")}{" "}
            <Link href="/privacy" className="text-[#19ddcf] hover:underline">
              {t("footer.privacy")}
            </Link>
            . {t("footer.p2")}
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
      <div className="[&_p]:text-[14px] [&_p]:text-[#a7a6bd] [&_p]:leading-[1.9] [&_p]:mb-3 [&_ul]:space-y-2 [&_ul]:mb-3 [&_li]:text-[14px] [&_li]:text-[#a7a6bd] [&_li]:leading-[1.8] [&_li]:pl-4 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:rounded-full [&_li]:before:bg-[#f06a9f] [&_strong]:text-[#f7f6ff] [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}