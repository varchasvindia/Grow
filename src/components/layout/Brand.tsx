
import Image from "next/image";
import Link from "next/link";

export default function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Varchasv India home"
    >
      <Image
        src="/images/Varchasv.png"
        alt="Varchasv India - आपका वर्चस्व बना रहे"
        width={180}
        height={145}
        priority
        className="brand-logo"
      />
    </Link>
  );
}
