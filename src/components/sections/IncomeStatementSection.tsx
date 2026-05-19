"use client";

import { useState } from "react";
import { INCOME_STATEMENT_VARIANTS } from "@/lib/income-statement-variants";
import { formatCurrency } from "@/lib/work-samples";
import { VariantTabs } from "@/components/VariantTabs";
import { ToolsUsed } from "@/components/ToolsUsed";

function fmt(n: number | null): string {
  if (n === null) return "";
  if (n === 0) return "$0";
  return n < 0 ? `(${formatCurrency(Math.abs(n)).replace("$", "$")})` : formatCurrency(n);
}

export function IncomeStatementSection() {
  const [active, setActive] = useState(0);
  const v = INCOME_STATEMENT_VARIANTS[active];

  return (
    <section id="income-statement" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <p className="section-eyebrow">Statement 04</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Income Statement</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Revenue, cost of goods sold and operating expenses leading to
            operating income, pre-tax profit and net income. Toggle the tabs to
            see ten different income statements from my work.
          </p>
          <ToolsUsed className="mt-4" tools={["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"]} />
        </div>

        <VariantTabs variants={INCOME_STATEMENT_VARIANTS} active={active} setActive={setActive} />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 min-w-0">
          <div className="min-w-0">
            <p className="text-sm text-slate-700 leading-relaxed">{v.summary}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Total Revenue</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {formatCurrency(v.revenue)}
                </p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Net Income</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {formatCurrency(v.netIncome)}
                </p>
              </div>
              {v.grossProfit && (
                <div className="kpi-card">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Gross Profit</p>
                  <p className="mt-1 text-lg font-semibold brand-text tabular">
                    {formatCurrency(v.grossProfit)}
                  </p>
                </div>
              )}
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Net Margin</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {(v.netMargin * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                How I Prepared It
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li>Closed revenue, COGS and operating expense balances from the trial balance.</li>
                <li>Computed gross profit, operating income, pre-tax income and net income.</li>
                <li>Margin and ratios reviewed against prior period and budget for variances.</li>
              </ul>
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-slate-200 bg-white overflow-x-auto touch-pan-x">
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
                  if (line.type === "subtotal") {
                    return (
                      <tr key={i} className="subtotal">
                        <td>{line.label}</td>
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
                      <td className={line.indent === 1 ? "pl-6" : ""}>{line.label}</td>
                      <td className="num tabular">{fmt(line.amount)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
