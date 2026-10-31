import type { Metadata } from "next";
import Container from "@/components/ui/Container";
export const metadata:Metadata={title:"Terms & Conditions"};
export default function TermsPage(){return <section className="page-hero"><Container><span className="eyebrow">LEGAL</span><h1>Terms & <span>Conditions.</span></h1><p>This starter terms page is a placeholder. Add your actual service terms, payment conditions, intellectual-property terms and limitation of liability before launch.</p></Container></section>;}
