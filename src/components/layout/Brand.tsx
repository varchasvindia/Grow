import Image from "next/image";
import Link from "next/link";

export default function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Varchasv India home"
    >
      {/* 1. Icon Logo */}
      <Image
        src="/images/varchasv_Logo_Emblem.png" // Replace with your icon filename
        alt="Varchasv Logo"
        width={42} 
        height={42} 
        priority={!footer}
        className="brand-logo brand-logo-icon"
      />

      {/* 2. Wordmark Logo (Text) */}
      <Image
        src="/images/Varchasv.png" // Replace with your text filename
        alt="Varchasv India - आपका वर्चस्व बना रहे"
        width={150} 
        height={50} // Use an approximate height based on the text image's ratio
        priority={!footer}
        className="brand-logo brand-logo-wordmark"
      />
    </Link>
  );
}