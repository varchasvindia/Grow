"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("Testimonials");
  
  const item = testimonials[index];
  
  const move = (n: number) =>
    setIndex((index + n + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonial-section">
      <Container>
        <SectionHeading 
          eyebrow={t("eyebrow")} 
          title={t("title")} 
        />
        
        <div className="testimonial-panel">
          <div className="quote-icon">
            <Quote />
          </div>
          
          <div className="testimonial-content">
            {/* Translate the quote based on the item's key */}
            <p className="quote-text">“{t(`items.${item.key}.quote`)}”</p>
            
            <div className="testimonial-person">
              <div className="avatar">{item.initials}</div>
              <div>
                {/* Translate name and role based on the item's key */}
                <strong>{t(`items.${item.key}.name`)}</strong>
                <span>{t(`items.${item.key}.role`)}</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <button onClick={() => move(-1)} aria-label="Previous testimonial">
              <ChevronLeft />
            </button>
            <button onClick={() => move(1)} aria-label="Next testimonial">
              <ChevronRight />
            </button>
          </div>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((tItem, i) => (
            <button
              key={tItem.key}
              onClick={() => setIndex(i)}
              className={index === i ? "active" : ""}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}