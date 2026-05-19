"use client";

import { Company } from "@/lib/work-samples";
import { RedactedCompany } from "./RedactedCompany";

type Variant = {
  label: string;
  period: string;
  company: Company;
  theme?: string;
};

type Props = {
  variants: Variant[];
  active: number;
  setActive: (n: number) => void;
};

export function VariantTabs({ variants, active, setActive }: Props) {
  const v = variants[active];
  const canPrev = active > 0;
  const canNext = active < variants.length - 1;

  return (
    <div className="mb-5">
      {/* Desktop / tablet: full numbered tab strip */}
      <div className="hidden sm:flex flex-wrap items-center gap-1.5 mb-3" role="tablist" aria-label="Statement variants">
        {variants.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`w-9 h-9 rounded-md text-sm font-semibold tabular transition-colors ${
              active === i
                ? "bg-[var(--brand)] text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Mobile: prev/next buttons + position indicator + horizontal scroll tabs */}
      <div className="sm:hidden mb-3">
        <div className="flex items-center justify-between gap-2 mb-2">
          <button
            type="button"
            onClick={() => canPrev && setActive(active - 1)}
            disabled={!canPrev}
            aria-label="Previous variant"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed active:bg-slate-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 flex items-center justify-center gap-1.5">
            {variants.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-label={`Variant ${i + 1}`}
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`transition-all ${
                  active === i
                    ? "w-6 h-2 rounded-full bg-[var(--brand)]"
                    : "w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => canNext && setActive(active + 1)}
            disabled={!canNext}
            aria-label="Next variant"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed active:bg-slate-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Metadata row */}
      <div className="flex items-center gap-x-2 gap-y-1 flex-wrap text-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
          {active + 1} / {variants.length}
        </span>
        <span className="text-slate-300 hidden sm:inline">·</span>
        <RedactedCompany company={v.company} variant="compact" />
        <span className="text-slate-300 hidden sm:inline">·</span>
        <span className="text-slate-900 font-semibold w-full sm:w-auto sm:hidden mt-0.5">{v.label}</span>
        <span className="text-slate-900 font-semibold hidden sm:inline">{v.label}</span>
        <span className="text-slate-300 hidden sm:inline">·</span>
        <span className="text-slate-500 text-xs sm:text-sm">{v.period}</span>
        {v.theme && (
          <>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="text-[10px] sm:text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
              {v.theme}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
