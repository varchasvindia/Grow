import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.varchasvindia.com"),
  title: {
    default: "varchasv India | Strategy. Creativity. Real Growth.",
    template: "%s | varchasv India",
  },
  description:
    "varchasv India helps ambitious businesses grow through digital marketing, branding, PR, website development and digital solutions.",
  openGraph: {
    title: "varchasv India",
    description: "Your Vision. Our Strategy. Real Growth.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },

  // ✅ Favicon — all formats from public/images/favicon_io/
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon.ico", sizes: "any" },
      { url: "/images/favicon_io/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/images/favicon_io/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon_io/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/favicon_io/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/images/favicon_io/favicon.ico",
    apple: "/images/favicon_io/apple-touch-icon.png",
  },

  // ✅ Web app manifest (PWA / Android home screen)
  manifest: "/images/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-[#050511] text-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}