import Container from "@/components/ui/Container";
import { stats } from "@/lib/data";
import { BriefcaseBusiness, Users, Building2, HeartHandshake } from "lucide-react";
const icons=[BriefcaseBusiness,Users,Building2,HeartHandshake];
export default function Stats(){return <section className="stats-section"><Container><div className="stats-grid">{stats.map((s,i)=>{const Icon=icons[i];return <div className="stat" key={s.label}><Icon size={22}/><strong>{s.value}</strong><span>{s.label}</span></div>})}</div></Container></section>}