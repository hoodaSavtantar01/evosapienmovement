"use client";

// All GSAP-driven motion lives here:
//  - headline line-mask reveal (display headlines rise from a clip)
//  - scroll reveals with stagger
//  - stat count-ups
//  - scroll-progress hairline
// Re-runs on every route change so each page animates its own content.

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Let the new page paint before we measure/animate it.
    const ctx = gsap.context(() => {});
    const triggers: ScrollTrigger[] = [];
    let progressEl: HTMLDivElement | null = null;
    let onScroll: (() => void) | null = null;

    const raf = requestAnimationFrame(() => {
      /* ---------- Headline line-mask reveal ---------- */
      if (!prefersReduced) {
        const heads = document.querySelectorAll<HTMLElement>(
          ".display-hero, .display-h1, .display-h2"
        );
        heads.forEach((h) => {
          if (h.dataset.noSplit !== undefined) return;

          // Split each headline into line masks exactly once.
          if (!h.classList.contains("split")) {
            const lines = h.innerHTML.split(/<br\b[^>]*>/i);
            h.innerHTML = lines
              .map(
                (ln, i) =>
                  `<span class="ln"><span class="ln-i" style="--i:${i}">${ln.trim()}</span></span>`
              )
              .join("");
            h.classList.add("split");
          }

          // Already revealed on an earlier run (StrictMode remount / route
          // change): leave it shown.
          if (h.classList.contains("is-visible")) return;

          // The masked line-rise is pure CSS: `.split .ln-i` starts at
          // translateY(118%) and transitions to 0 once the headline gains
          // `is-visible`. We only decide *when* to add that class. (CSS is used
          // here rather than a GSAP tween because the tween was being killed by
          // the effect-cleanup/StrictMode cycle, leaving headlines stuck hidden.)
          const reveal = () => h.classList.add("is-visible");

          // ScrollTrigger's onEnter only fires on a scroll *crossing*, so a
          // headline already on screen at load would never reveal. Reveal those
          // on the next frame (so the hidden start state paints first and the
          // transition runs); gate the rest on scroll with a tracked trigger.
          if (h.getBoundingClientRect().top < window.innerHeight * 0.92) {
            requestAnimationFrame(reveal);
          } else {
            const st = ScrollTrigger.create({
              trigger: h,
              start: "top 88%",
              once: true,
              onEnter: reveal,
            });
            triggers.push(st);
          }
        });
      }

      /* ---------- Scroll reveals (with stagger) ---------- */
      const reveals = gsap.utils.toArray<HTMLElement>(".reveal");
      reveals.forEach((el) => {
        if (el.classList.contains("split")) {
          // split headlines reveal via their line masks above
          el.classList.add("is-visible");
          return;
        }
        if (prefersReduced) {
          el.classList.add("is-visible");
          return;
        }
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => el.classList.add("is-visible"),
        });
        triggers.push(st);
      });

      /* ---------- Stat count-up ---------- */
      const stats = gsap.utils.toArray<HTMLElement>(".stat-value");
      stats.forEach((el) => {
        const raw = el.textContent?.trim() ?? "";
        const m = raw.match(/^(\d+)(.*)$/);
        if (!m) return;
        const target = parseInt(m[1], 10);
        const pad = m[1].length;
        const suffix = m[2] || "";
        if (prefersReduced || target === 0) {
          el.textContent = raw;
          return;
        }
        el.classList.add("is-counting");
        const counter = { val: 0 };
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              val: target,
              duration: 1.5,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent =
                  String(Math.round(counter.val)).padStart(pad, "0") + suffix;
              },
            });
          },
        });
        triggers.push(st);
      });

      /* ---------- Scroll-progress hairline ---------- */
      if (!prefersReduced) {
        progressEl = document.createElement("div");
        progressEl.id = "evo-progress";
        document.body.appendChild(progressEl);
        let ticking = false;
        const update = () => {
          const h = document.documentElement;
          const max = h.scrollHeight - h.clientHeight;
          progressEl!.style.width =
            (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
          ticking = false;
        };
        onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
          }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      }

      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      triggers.forEach((t) => t.kill());
      ctx.revert();
      if (onScroll) window.removeEventListener("scroll", onScroll);
      if (progressEl && progressEl.parentNode)
        progressEl.parentNode.removeChild(progressEl);
    };
  }, [pathname]);

  return null;
}
