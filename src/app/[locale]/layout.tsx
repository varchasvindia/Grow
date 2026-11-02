import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

// ✅ SEO METADATA GENERATION
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://www.varchasvindia.com"),
    title: {
      default: t("title"),
      template: "%s | varchasv India",
    },
    description: t("description"),
    
    // ✅ Targeted Keywords for India & Chhattisgarh
    keywords: [
      "digital marketing agency in India",
      "best digital marketing agency in Chhattisgarh",
      "SEO agency in Raipur",
      "branding agency in Bhilai",
      "performance marketing agency India",
      "PR agency Chhattisgarh",
      "website design Raipur",
      "varchasv India",
      "digital marketing company Chhattisgarh"
    ],

    // ✅ Canonical & Alternate Language Tags (Crucial for Hindi/English SEO)
    alternates: {
      canonical: "https://www.varchasvindia.com",
      languages: {
        "en-IN": "https://www.varchasvindia.com",
        "hi-IN": "https://www.varchasvindia.com/hi",
        "x-default": "https://www.varchasvindia.com",
      },
    },

    // ✅ Open Graph (Social Sharing)
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://www.varchasvindia.com",
      siteName: "varchasv India",
      images: [
        {
          url: "/images/og-image.jpg", // Make sure to add this image to /public
          width: 1200,
          height: 630,
          alt: "varchasv India - Digital Marketing Agency",
        },
      ],
      locale: locale === "hi" ? "hi_IN" : "en_IN",
      type: "website",
    },

    // ✅ Twitter Cards
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/og-image.jpg"],
    },

    // ✅ Robots (Allow indexing)
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // ✅ Google Search Console Verification (Add your code here later)
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE", 
    },

    // ✅ Favicons & Manifest
    icons: {
      icon: [{ url: "/images/favicon_io/favicon.ico", sizes: "any" }],
      shortcut: "/images/favicon_io/favicon.ico",
      apple: "/images/favicon_io/apple-touch-icon.png",
    },
    manifest: "/images/favicon_io/site.webmanifest",
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "hi")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-[#050511] text-white`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}