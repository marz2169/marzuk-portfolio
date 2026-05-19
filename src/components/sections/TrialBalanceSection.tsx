"use client";

import { useState } from "react";
import { TRIAL_BALANCE_VARIANTS } from "@/lib/trial-balance-variants";
import { formatCurrency } from "@/lib/work-samples";
import { VariantTabs } from "@/components/VariantTabs";
import { ToolsUsed } from "@/components/ToolsUsed";

export function TrialBalanceSection() {
  const [active, setActive] = useState(0);
  const v = TRIAL_BALANCE_VARIANTS[active];

  return (
    <section id="trial-balance" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <p className="section-eyebrow">Statement 03</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Trial Balance</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Listing of every account balance to confirm total debits equal total
            credits before financial statements are produced. Toggle the tabs to
            see ten different trial balances from my work.
          </p>
          <ToolsUsed className="mt-4" tools={["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"]} />
        </div>

        <VariantTabs variants={TRIAL_BALANCE_VARIANTS} active={active} setActive={setActive} />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 min-w-0">
          <div>
            <p className="text-sm text-slate-700 leading-relaxed">{v.summary}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Accounts</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">{v.rows.length}</p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">In Balance</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {formatCurrency(v.totalDebits)}
                </p>
              </div>
            </div>
            <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                How I Prepared It
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li>Pulled closing balance from each T-account or sub-ledger.</li>
                <li>Classified by type: Asset, Contra-Asset, Liability, Equity, Revenue, Expense.</li>
                <li>Verified totals reconcile, confirming debits equal credits before financial statements are produced.</li>
              </ul>
            </div>
          </div>

          <div className="relative min-w-0 overflow-x-auto rounded-lg border border-slate-200 bg-white touch-pan-x">
            <div className="md:hidden absolute top-2 right-2 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-white bg-slate-900/70 px-2 py-1 rounded-full backdrop-blur-sm">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                swipe
              </span>
            </div>
            <table className="ledger-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Account</th>
                  <th>Type</th>
                  <th className="num">Debit</th>
                  <th className="num">Credit</th>
                </tr>
              </thead>
              <tbody>
                {v.rows.map((r, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{r.account}</td>
                    <td className="text-slate-500 text-xs">{r.type}</td>
                    <td className="num tabular">{r.debit ? formatCurrency(r.debit) : ""}</td>
                    <td className="num tabular">{r.credit ? formatCurrency(r.credit) : ""}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td colSpan={3}>TOTALS</td>
                  <td className="num tabular">{formatCurrency(v.totalDebits)}</td>
                  <td className="num tabular">{formatCurrency(v.totalCredits)}</td>
                </tr>
              </tbody>
            </table>
            <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100">
              <span className="balance-pill">Total Debits = Total Credits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
