"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Lightweight scroll-triggered fade-in.
 * Uses IntersectionObserver to add an `in-view` class when the element
 * enters the viewport, with an optional staggered delay.
 */
export function ScrollFadeIn({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-fade ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: inView && delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
