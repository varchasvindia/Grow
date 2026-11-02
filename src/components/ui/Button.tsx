// 1. Swap the import to use the locale-aware Link
import { Link } from "@/i18n/navigation"; 
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "light";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
}: Props) {
  const classes = cn("button", `button-${variant}`, className);
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} strokeWidth={2.2} />
    </>
  );
  
  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}