 "use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials(){const [index,setIndex]=useState(0);const item=testimonials[index];const move=(n:number)=>setIndex((index+n+testimonials.length)%testimonials.length);return <section className="section testimonial-section"><Container><SectionHeading eyebrow="KIND WORDS" title="What Our Clients Say"/><div className="testimonial-panel"><div className="quote-icon"><Quote/></div><div className="testimonial-content"><p className="quote-text">“{item.quote}”</p><div className="testimonial-person"><div className="avatar">{item.initials}</div><div><strong>{item.name}</strong><span>{item.role}</span></div></div></div><div className="testimonial-controls"><button onClick={()=>move(-1)} aria-label="Previous testimonial"><ChevronLeft/></button><button onClick={()=>move(1)} aria-label="Next testimonial"><ChevronRight/></button></div></div><div className="testimonial-dots">{testimonials.map((t,i)=><button key={t.name} onClick={()=>setIndex(i)} className={index===i?"active":""} aria-label={`Show testimonial ${i+1}`}/>)}</div></Container></section>}