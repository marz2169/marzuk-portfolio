import { Company, COMPANY_LABEL, SCENARIO_DETAIL } from "@/lib/work-samples";

type Props = {
  company: Company;
  variant?: "default" | "dark" | "compact";
  showIndustry?: boolean;
};

// Renamed in spirit (kept filename for import stability):
// represents the illustrative case-study scenario for a piece of practice work.
export function RedactedCompany({ company, variant = "default", showIndustry = true }: Props) {
  const industry = COMPANY_LABEL[company];

  if (variant === "compact") {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-[0.12em] ${
            variant === ("dark" as string)
              ? "bg-white/10 text-white/85 border border-white/20"
              : "bg-teal-50 text-teal-800 border border-teal-200"
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Case Study
        </span>
        {showIndustry && (
          <span className={variant === ("dark" as string) ? "text-white/70 text-xs" : "text-slate-600 text-xs"}>{industry}</span>
        )}
      </span>
    );
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-[0.12em] ${
          variant === "dark"
            ? "bg-white/10 text-white border border-white/20"
            : "bg-teal-50 text-teal-800 border border-teal-200"
        }`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Practice Project
      </span>
      {showIndustry && (
        <span className={`text-sm font-medium ${variant === "dark" ? "text-white/80" : "text-slate-700"}`}>
          {industry}
        </span>
      )}
      <span className={`text-xs ${variant === "dark" ? "text-white/55" : "text-slate-500"} hidden sm:inline`}>
        {SCENARIO_DETAIL[company]}
      </span>
    </span>
  );
}
