import { Company, COMPANY_LABEL, COMPANY_REDACTED_PLACEHOLDER } from "@/lib/work-samples";

type Props = {
  company: Company;
  variant?: "default" | "dark" | "compact";
  showIndustry?: boolean;
};

export function RedactedCompany({ company, variant = "default", showIndustry = true }: Props) {
  const placeholder = COMPANY_REDACTED_PLACEHOLDER[company];
  const industry = COMPANY_LABEL[company];

  if (variant === "compact") {
    return (
      <span className="redacted">
        <span className={`redacted-bar ${variant === "compact" ? "" : ""}`}>{placeholder}</span>
        {showIndustry && (
          <span className="text-xs text-slate-500">({industry})</span>
        )}
      </span>
    );
  }

  return (
    <span className="redacted">
      <span className={`redacted-bar ${variant === "dark" ? "light" : ""}`}>{placeholder}</span>
      <span className={`confidential-tag ${variant === "dark" ? "dark" : ""}`}>Confidential</span>
      {showIndustry && (
        <span className={`text-sm ${variant === "dark" ? "text-white/70" : "text-slate-500"}`}>
          {industry}
        </span>
      )}
    </span>
  );
}
