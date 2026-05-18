"use client";

import { useState } from "react";
import { BALANCE_SHEET_VARIANTS } from "@/lib/balance-sheet-variants";
import { formatCurrency } from "@/lib/work-samples";
import { VariantTabs } from "@/components/VariantTabs";
import { ToolsUsed } from "@/components/ToolsUsed";

function fmt(n: number | null): string {
  if (n === null) return "";
  if (n === 0) return "$0";
  return n < 0 ? `(${formatCurrency(Math.abs(n))})` : formatCurrency(n);
}

export function BalanceSheetSection() {
  const [active, setActive] = useState(0);
  const v = BALANCE_SHEET_VARIANTS[active];

  return (
    <section id="balance-sheet" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <p className="section-eyebrow">Statement 05</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Balance Sheet</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Assets, liabilities and shareholders’ equity at period-end with
            current ratio, debt-to-equity, working capital and return on equity
            calculated on the closing position. Toggle the tabs to see ten
            different balance sheets from my work.
          </p>
          <ToolsUsed className="mt-4" tools={["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"]} />
        </div>

        <VariantTabs variants={BALANCE_SHEET_VARIANTS} active={active} setActive={setActive} />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          <div>
            <p className="text-sm text-slate-700 leading-relaxed">{v.summary}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Current Ratio</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {v.currentRatio.toFixed(2)}
                </p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Debt to Equity</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {v.debtToEquity.toFixed(2)}
                </p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Working Capital</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {formatCurrency(v.workingCapital)}
                </p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">ROE</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {(v.roe * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                How I Prepared It
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li>Closing balances grouped into current/non-current sections per Canadian GAAP.</li>
                <li>Equity reconciled: opening equity plus net income less dividends declared.</li>
                <li>Total assets tied exactly to total liabilities and equity, confirming the balance sheet equation.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
            <table className="ledger-table">
              <tbody>
                {v.lines.map((line, i) => {
                  if (line.type === "header") {
                    return (
                      <tr key={i}>
                        <td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">
                          {line.label}
                        </td>
                      </tr>
                    );
                  }
                  if (line.type === "subheader") {
                    return (
                      <tr key={i}>
                        <td colSpan={2} className="pl-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">
                          {line.label}
                        </td>
                      </tr>
                    );
                  }
                  if (line.type === "spacer") return null;
                  if (line.type === "subtotal") {
                    return (
                      <tr key={i} className="subtotal">
                        <td className={line.indent === 1 ? "pl-4" : ""}>{line.label}</td>
                        <td className="num tabular">{fmt(line.amount)}</td>
                      </tr>
                    );
                  }
                  if (line.type === "total") {
                    return (
                      <tr key={i} className="total">
                        <td>{line.label}</td>
                        <td className="num tabular">{fmt(line.amount)}</td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={i}>
                      <td className={line.indent === 2 ? "pl-8" : line.indent === 1 ? "pl-4" : ""}>
                        {line.label}
                      </td>
                      <td className="num tabular">{fmt(line.amount)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100">
              <span className="balance-pill">Total Assets = Total Liabilities &amp; Equity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
