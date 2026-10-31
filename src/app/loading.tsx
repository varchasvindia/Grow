import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading-screen">
      <Image
        src="/images/Varchasv_Logo_Emblem.png"
        alt="Varchasv Logo"
        width={70}
        height={70}
        priority
        className="loading-mark"
      />

      <p>Loading Varchasv...</p>
    </div>
  );
}