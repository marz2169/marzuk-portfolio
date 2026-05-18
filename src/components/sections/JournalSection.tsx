"use client";

import { useState } from "react";
import { JOURNAL_VARIANTS } from "@/lib/journal-variants";
import { formatCurrency } from "@/lib/work-samples";
import { VariantTabs } from "@/components/VariantTabs";

export function JournalSection() {
  const [active, setActive] = useState(0);
  const v = JOURNAL_VARIANTS[active];

  return (
    <section id="journal" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <p className="section-eyebrow">Statement 01</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">General Journal</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Chronological record of business transactions, each captured as a
            balanced debit and credit entry. Toggle the numbered tabs below to
            see ten different journal entry sets from my work.
          </p>
        </div>

        <VariantTabs variants={JOURNAL_VARIANTS} active={active} setActive={setActive} />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          <div>
            <p className="text-sm text-slate-700 leading-relaxed">{v.summary}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Entries Posted</p>
                <p className="mt-1 text-lg font-semibold brand-text tabular">
                  {v.entryCount}
                </p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Total Posted</p>
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
                <li>Source transactions classified using the company chart of accounts.</li>
                <li>Each entry supported by a working paper and reviewed before posting.</li>
                <li>Balance check confirms total debits equal total credits.</li>
              </ul>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="ledger-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>JE</th>
                  <th>Account</th>
                  <th>Description</th>
                  <th className="num">Debit</th>
                  <th className="num">Credit</th>
                </tr>
              </thead>
              <tbody>
                {v.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.date}</td>
                    <td>{row.je}</td>
                    <td className={row.account.startsWith("    ") ? "pl-6 text-slate-600" : "font-medium"}>
                      {row.account.trim()}
                    </td>
                    <td>{row.desc}</td>
                    <td className="num tabular">{row.debit ? formatCurrency(row.debit) : ""}</td>
                    <td className="num tabular">{row.credit ? formatCurrency(row.credit) : ""}</td>
                  </tr>
                ))}
                <tr className="total">
                  <td colSpan={4}>TOTAL (Debits = Credits)</td>
                  <td className="num tabular">{formatCurrency(v.totalDebits)}</td>
                  <td className="num tabular">{formatCurrency(v.totalCredits)}</td>
                </tr>
              </tbody>
            </table>
            <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100 flex items-center justify-between flex-wrap gap-2">
              <span className="balance-pill">In Balance</span>
              {v.showingExcerpt && (
                <span className="text-xs text-slate-500">
                  Showing key entries from {v.entryCount} posted. Full journal in source workbook.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
