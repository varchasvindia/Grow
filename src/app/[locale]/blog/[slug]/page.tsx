import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Link as LinkIcon, ArrowUpRight,
} from "lucide-react";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | varchasv India Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations("Blog"); // ✅ Use server-side translations

  const shareUrl = `https://www.varchasvindia.com/blog/${post.slug}`;
  const shareTitle = encodeURIComponent(post.title);
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const renderContent = (content: string) =>
    content.split("\n").map((line, i) => {
      if (line.startsWith("# "))
        return <h1 key={i} className="font-heading text-3xl md:text-5xl font-extrabold leading-[1.15] tracking-[-1.5px] mb-6 text-[#f7f6ff]">{line.slice(2)}</h1>;

      if (line.startsWith("## "))
        return (
          <h2 key={i} className="font-heading text-2xl md:text-3xl font-bold mt-12 mb-4 text-[#f7f6ff] flex items-center gap-3">
            <span className="w-1 h-7 bg-gradient-to-b from-[#ff7a75] to-[#b14edb] rounded-full shrink-0" />
            {line.slice(3)}
          </h2>
        );

      if (line.startsWith("### "))
        return <h3 key={i} className="font-heading text-xl font-bold mt-8 mb-3 text-[#f7f6ff]">{line.slice(4)}</h3>;

      if (line.startsWith("- ") || line.startsWith("❌ "))
        return <li key={i} className="text-[#a7a6bd] text-[15px] leading-[1.9] ml-6 list-disc mb-2 marker:text-[#f06a9f]">{line.replace(/^(- |❌ )/, "")}</li>;

      if (line.match(/^\d+\. /))
        return <li key={i} className="text-[#a7a6bd] text-[15px] leading-[1.9] ml-6 list-decimal mb-2 marker:text-[#21e0cf]">{line.replace(/^\d+\. /, "")}</li>;

      if (line.trim() === "") return <div key={i} className="h-2" />;

      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} className="text-[#a7a6bd] text-[15px] leading-[1.9] mb-3">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-[#f7f6ff] font-semibold">{part.slice(2, -2)}</strong>
            ) : (
              <span key={j}>{part}</span>
            )
          )}
        </p>
      );
    });

  return (
    <article className="bg-[#09091a]">
      {/* Hero image */}
      <div className="relative h-[380px] md:h-[520px] w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09091a] via-[#09091a]/70 to-[#09091a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09091a]/50 via-transparent to-[#09091a]/50" />

        {/* Back link */}
        <div className="absolute top-6 left-0 right-0">
          <div className="container mx-auto px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] text-white/85 hover:text-[#19ddcf] transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft size={14} /> {t("backToAll")}
            </Link>
          </div>
        </div>

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 right-0 pb-10">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[rgba(19,220,202,.18)] text-[#21e0cf] flex items-center gap-1 uppercase tracking-[1px] backdrop-blur-md border border-[rgba(28,219,205,.3)]">
                <Tag size={12} /> {post.category}
              </span>
              <span className="text-[11px] text-white/75 flex items-center gap-1.5">
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="text-[11px] text-white/75 flex items-center gap-1.5">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-extrabold leading-[1.15] tracking-[-1.5px] text-white">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl pt-10 pb-20">
        <p className="text-[16px] text-[#d8d5e5] leading-[1.85] mb-8 font-medium">
          {post.excerpt}
        </p>

        {/* Author + share bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[rgba(174,171,224,.16)]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#12cdbd] to-[#9b35d3] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_20px_rgba(25,221,207,.25)]">
              {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#f7f6ff]">{post.author}</p>
              <p className="text-[11px] text-[#77748d]">varchasv India</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[#77748d] mr-1 hidden md:inline">{t("share")}</span>
            <ShareButton href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`} label={t("shareTwitter")}>
              <Twitter size={15} />
            </ShareButton>
            <ShareButton href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} label={t("shareLinkedIn")}>
              <Linkedin size={15} />
            </ShareButton>
            <ShareButton href={shareUrl} label={t("copyLink")}>
              <LinkIcon size={15} />
            </ShareButton>
          </div>
        </div>

        {/* Post content */}
        <div>{renderContent(post.content)}</div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[rgba(174,171,224,.16)]">
            <h2 className="font-heading text-2xl font-bold mb-6 text-[#f7f6ff] flex items-center gap-2">
              <Share2 size={18} className="text-[#f06a9f]" /> {t("keepReading")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-[#101027] border border-[rgba(174,171,224,.16)] hover:border-[rgba(28,219,205,.55)] transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image src={related.image} alt={related.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101027] via-[#101027]/40 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#21e0cf] uppercase tracking-[1px] border border-[rgba(28,219,205,.3)]">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold leading-[1.3] text-[#f7f6ff] group-hover:text-[#19ddcf] transition-colors">
                      {related.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#f06a9f] mt-3 group-hover:translate-x-1 transition-transform">
                      {t("read")} <ArrowUpRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function ShareButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#101027] border border-[rgba(174,171,224,.16)] text-[#a7a6bd] hover:text-[#19ddcf] hover:border-[rgba(28,219,205,.55)] hover:bg-[rgba(19,220,202,.08)] transition-all grid place-items-center">
      {children}
    </a>
  );
}