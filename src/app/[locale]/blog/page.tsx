import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | varchasv India",
  description: "Read the latest insights from varchasv India on digital marketing, branding, PR, startup strategy and business growth.",
};

export default function BlogPage() {
  const t = useTranslations("Blog");
  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#09091a]">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-bold tracking-widest text-[#f04491] uppercase mb-3">
            {t("eyebrow")}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 leading-[1.15] tracking-[-2px] text-[#f7f6ff]">
            {t("titleLine1")}{" "}
            <span className="bg-gradient-to-r from-[#ff7a75] via-[#ed4599] to-[#b14edb] bg-clip-text text-transparent">
              {t("titleLine2")}
            </span>
          </h1>
          <p className="text-[13px] text-[#a7a6bd] max-w-2xl leading-[1.9]">
            {t("subtitle")}
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-[#12132d] to-[#0d0d22] border border-[rgba(174,171,224,.16)] hover:border-[rgba(28,219,205,.55)] transition-all duration-300"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#12132d]/40 hidden md:block" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-[rgba(240,68,145,.12)] text-[#ff76a9] uppercase tracking-[1px]">
                    {t("featured")}
                  </span>
                  <span className="text-[11px] text-[#a7a6bd]">{featuredPost.category}</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-[1.2] text-[#f7f6ff] group-hover:text-[#19ddcf] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[13px] text-[#a7a6bd] mb-6 leading-[1.9]">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#77748d]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric", month: "short", day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#f06a9f] ml-auto group-hover:translate-x-1 transition-transform">
                    {t("read")} <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid of Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden bg-[#101027] border border-[rgba(174,171,224,.16)] hover:border-[rgba(28,219,205,.55)] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101027] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#21e0cf] flex items-center gap-1 uppercase tracking-[1px] border border-[rgba(28,219,205,.3)]">
                  <Tag size={10} /> {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold mb-2 leading-[1.3] text-[#f7f6ff] group-hover:text-[#19ddcf] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[12px] text-[#a7a6bd] mb-4 leading-[1.8] line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-[11px] text-[#77748d]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric", month: "short", day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}