 "use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";
import Button from "@/components/ui/Button";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navLinks.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-action"><Button href="/contact">Get Started</Button></div>
      <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="mobile-nav">{navLinks.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="mobile-cta" href="/contact" onClick={() => setOpen(false)}>Get Started ↗</Link></nav>}
  </header>;
}