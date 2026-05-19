"use client";

import { useState } from "react";
import { T_ACCOUNT_VARIANTS } from "@/lib/t-account-variants";
import { formatCurrency } from "@/lib/work-samples";
import { VariantTabs } from "@/components/VariantTabs";
import { ToolsUsed } from "@/components/ToolsUsed";

export function TAccountSection() {
  const [active, setActive] = useState(0);
  const v = T_ACCOUNT_VARIANTS[active];

  const debitTotal = v.debits.reduce((a, b) => a + b.amount, 0);
  const creditTotal = v.credits.reduce((a, b) => a + b.amount, 0);
  const opening = v.openingBalance ?? 0;
  const isDebitNature = v.accountType === "Asset" || v.accountType === "Expense";
  const totalDr = debitTotal + (isDebitNature ? opening : 0);
  const totalCr = creditTotal + (isDebitNature ? 0 : opening);
  const net = totalDr - totalCr;
  const balanceSide = net === 0 ? "Nil" : net > 0 ? "Dr" : "Cr";
  const closingBalance = Math.abs(net);

  return (
    <section id="t-accounts" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <p className="section-eyebrow">Statement 02</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">T-Accounts (Ledger)</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Each journal entry posted into its individual ledger account so
            closing balances can be carried into the trial balance. Toggle the
            numbered tabs to see ten different ledger accounts I have prepared.
          </p>
          <ToolsUsed className="mt-4" tools={["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"]} />
        </div>

        <VariantTabs variants={T_ACCOUNT_VARIANTS} active={active} setActive={setActive} />

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
          <div>
            <p className="text-sm text-slate-700 leading-relaxed">{v.summary}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Account Type</p>
                <p className="mt-1 text-base font-semibold brand-text">{v.accountType}</p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Closing Balance</p>
                <p className="mt-1 text-base font-semibold brand-text tabular">
                  {formatCurrency(closingBalance)} {balanceSide}
                </p>
              </div>
            </div>
            <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                How I Prepared It
              </p>
              <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                <li>Every journal posting mapped to debit or credit side of this account.</li>
                <li>Sub-totals struck per side, then a net closing balance carried forward.</li>
                <li>Balance flows into the trial balance with no manual re-entry.</li>
              </ul>
            </div>
          </div>

          <div className="t-account">
            <div className="t-account-header">{v.accountName}</div>
            <div className="t-account-grid">
              <div className="t-account-side">
                <p className="label">Debit</p>
                {v.openingBalance && v.balanceSide !== "Cr" && (
                  <p className="tabular text-slate-500 italic">
                    Opening balance: {formatCurrency(v.openingBalance)}
                  </p>
                )}
                {v.debits.length === 0 ? (
                  <p className="text-slate-400 italic text-xs">No debit postings</p>
                ) : (
                  v.debits.map((d, i) => (
                    <p key={i} className="tabular flex justify-between gap-3">
                      <span className="text-slate-600 text-xs truncate">{d.desc}</span>
                      <span className="font-medium">{formatCurrency(d.amount)}</span>
                    </p>
                  ))
                )}
                <p className="tabular font-semibold border-t border-slate-200 mt-1 pt-1 text-right">
                  {formatCurrency(totalDr)}
                </p>
              </div>
              <div className="t-account-divider" />
              <div className="t-account-side">
                <p className="label">Credit</p>
                {v.openingBalance && !isDebitNature && (
                  <p className="tabular text-slate-500 italic">
                    Opening balance: {formatCurrency(v.openingBalance)}
                  </p>
                )}
                {v.credits.length === 0 ? (
                  <p className="text-slate-400 italic text-xs">No credit postings</p>
                ) : (
                  v.credits.map((c, i) => (
                    <p key={i} className="tabular flex justify-between gap-3">
                      <span className="text-slate-600 text-xs truncate">{c.desc}</span>
                      <span className="font-medium">{formatCurrency(c.amount)}</span>
                    </p>
                  ))
                )}
                <p className="tabular font-semibold border-t border-slate-200 mt-1 pt-1 text-right">
                  {formatCurrency(totalCr)}
                </p>
              </div>
            </div>
            <div className="t-account-balance">
              Closing Balance:{" "}
              <span className="brand-text">
                {formatCurrency(closingBalance)} ({balanceSide})
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
