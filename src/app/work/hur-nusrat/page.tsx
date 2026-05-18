import Link from "next/link";
import { RedactedCompany } from "@/components/RedactedCompany";
import { JournalSection } from "@/components/sections/JournalSection";
import { TAccountSection } from "@/components/sections/TAccountSection";
import { TrialBalanceSection } from "@/components/sections/TrialBalanceSection";
import { IncomeStatementSection } from "@/components/sections/IncomeStatementSection";
import { BalanceSheetSection } from "@/components/sections/BalanceSheetSection";
import { ToolsUsed } from "@/components/ToolsUsed";

export const metadata = {
  title: "Full-Cycle Close FY22 | Marzuk Haider Chowdhury",
  description:
    "Walkthrough of a complete set of financial statements prepared end-to-end: journal, T-accounts, trial balance, income statement and balance sheet.",
};

export default function FullCyclePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="brand-bar text-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
          <Link href="/" className="font-semibold tracking-wide hover:text-white/85">
            ← MARZUK HAIDER CHOWDHURY
          </Link>
          <span className="text-white/85">Full-Cycle Close, FY22</span>
        </div>
      </header>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="section-eyebrow">Featured Case Study</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold text-slate-900">
            Full Accounting Cycle, Fiscal Year 2022
          </h1>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            <RedactedCompany company="fashion-house" />
            <span className="text-sm text-slate-500">
              January 1 to December 31, 2022 &nbsp;·&nbsp; All figures in CAD
            </span>
          </div>
          <div className="mt-4">
            <ToolsUsed tools={["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"]} />
          </div>
          <p className="mt-6 text-slate-700 leading-relaxed max-w-3xl">
            This case study walks through the complete accounting cycle I prepared
            for a Dhaka-based fashion house: 28 journal entries, posted into 19
            ledger accounts, summarised in a balanced trial balance and presented
            as an income statement and balance sheet. Each statement includes its
            own internal balance check, and the balance sheet closes with four
            financial ratios calculated on the year-end position.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Hur_Nusrat_Financial_Statements.xlsx"
              download
              className="btn-primary text-sm"
            >
              Download Workbook (.xlsx)
            </a>
            <Link href="/#samples" className="btn-secondary text-sm">
              Browse other work samples →
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="kpi-card">
              <dt className="text-xs uppercase tracking-wider text-slate-500">Total Revenue</dt>
              <dd className="mt-1 text-xl font-semibold brand-text tabular">$1,800,000</dd>
            </div>
            <div className="kpi-card">
              <dt className="text-xs uppercase tracking-wider text-slate-500">Net Income</dt>
              <dd className="mt-1 text-xl font-semibold brand-text tabular">$276,675</dd>
            </div>
            <div className="kpi-card">
              <dt className="text-xs uppercase tracking-wider text-slate-500">Total Assets</dt>
              <dd className="mt-1 text-xl font-semibold brand-text tabular">$1,400,900</dd>
            </div>
            <div className="kpi-card">
              <dt className="text-xs uppercase tracking-wider text-slate-500">Return on Equity</dt>
              <dd className="mt-1 text-xl font-semibold brand-text tabular">33.5%</dd>
            </div>
          </dl>
        </div>
      </section>

      <JournalSection />

      <TAccountSection />

      <TrialBalanceSection />

      <IncomeStatementSection />

      <BalanceSheetSection />

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-eyebrow text-amber-400">Next</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
            Want to see operational AP, AR, close and tax work too?
          </h3>
          <p className="mt-3 text-slate-300">
            Browse seven more samples covering payments, receipts, month-end
            journal entries, GL reconciliations and indirect tax filings.
          </p>
          <div className="mt-6 flex gap-3 justify-center flex-wrap">
            <Link href="/#samples" className="btn-primary bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm" style={{ background: "#fbbf24", color: "#0f172a" }}>
              Browse Work Samples →
            </Link>
            <Link href="/#contact" className="btn-secondary text-sm" style={{ background: "transparent", color: "#fff", borderColor: "#475569" }}>
              Contact Marzuk
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-center">
          <p>
            Draft prepared for internal review. Unaudited. Figures illustrative,
            employer name redacted for confidentiality.
          </p>
        </div>
      </footer>
    </div>
  );
}

