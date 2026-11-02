"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import { stats } from "@/lib/data";
import {
  BriefcaseBusiness,
  Users,
  Building2,
  HeartHandshake,
} from "lucide-react";

const icons = [BriefcaseBusiness, Users, Building2, HeartHandshake];

// Custom hook for the count-up animation
function useCountUp(endValue: string, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extract number and suffix (e.g., "500+" -> 500, "+")
  const numericStr = endValue.replace(/[^0-9]/g, "");
  const suffix = endValue.replace(/[0-9]/g, "");
  const target = parseInt(numericStr, 10) || 0;

  useEffect(() => {
    // Use IntersectionObserver to start the animation only when the element is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease-out quad for a smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 2);
            
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target); // Ensure it ends exactly on target
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration, hasAnimated]);

  return { count, suffix, ref };
}

export default function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="stats-section">
      <Container>
        <div className="stats-grid">
          {stats.map((s, i) => {
            const Icon = icons[i];
            const { count, suffix, ref } = useCountUp(s.value);

            return (
              <div className="stat" key={s.key} ref={ref}>
                <Icon size={22} />
                <strong>
                  {count}{suffix}
                </strong>
                {/* Translate the label using the key from data.ts */}
                <span>{t(s.key)}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}