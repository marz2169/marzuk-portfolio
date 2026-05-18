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
  return (
    <div className="mb-5">
      <div className="flex flex-wrap items-center gap-1.5 mb-3" role="tablist" aria-label="Statement variants">
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
      <div className="flex items-center gap-2 flex-wrap text-sm">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Sample {active + 1} of {variants.length}
        </span>
        <span className="text-slate-300">·</span>
        <RedactedCompany company={v.company} variant="compact" />
        <span className="text-slate-300">·</span>
        <span className="text-slate-700 font-medium">{v.label}</span>
        <span className="text-slate-400">·</span>
        <span className="text-slate-500">{v.period}</span>
        {v.theme && (
          <>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              {v.theme}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
