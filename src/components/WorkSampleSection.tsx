"use client";

import { useState } from "react";
import { formatCurrency, formatNumber } from "@/lib/work-samples";
import { SAMPLE_SERIES, SampleVariant } from "@/lib/sample-variants";
import { RedactedCompany } from "./RedactedCompany";
import { ToolsUsed } from "./ToolsUsed";
import { VariantTabs } from "./VariantTabs";

function formatCell(value: string | number | null | undefined, columnHeader: string): string {
  if (value === null || value === undefined || value === "") return "";
  const isCurrency =
    columnHeader.toLowerCase().includes("amt") ||
    columnHeader.toLowerCase().includes("amount") ||
    columnHeader.toLowerCase().includes("balance") ||
    columnHeader.toLowerCase().includes("debit") ||
    columnHeader.toLowerCase().includes("credit") ||
    columnHeader.toLowerCase().includes("difference") ||
    columnHeader.toLowerCase().includes("sales") ||
    columnHeader.toLowerCase().includes("collected") ||
    columnHeader.toLowerCase().includes("remit") ||
    columnHeader.toLowerCase().includes("itc") ||
    columnHeader.toLowerCase().includes("gross") ||
    columnHeader.toLowerCase().includes("net") ||
    columnHeader.toLowerCase().includes("fee") ||
    columnHeader.toLowerCase().includes("paid") ||
    columnHeader.toLowerCase().includes("cost");
  if (isCurrency && typeof value === "number") return formatCurrency(value);
  if (typeof value === "number") return formatNumber(value);
  return String(value);
}

function isNumeric(value: string | number | null | undefined): boolean {
  return typeof value === "number";
}

type Props = {
  slug: string;
  fn: string;
  title: string;
  subtitle: string;
};

export function WorkSampleSection({ slug, fn, title, subtitle }: Props) {
  const [active, setActive] = useState(0);
  const variants = SAMPLE_SERIES[slug];
  if (!variants || variants.length === 0) return null;
  const v: SampleVariant = variants[active];

  return (
    <section
      id={slug}
      className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
              {fn}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-slate-600">{subtitle}</p>
          <div className="mt-3">
            <ToolsUsed tools={["Microsoft 365", "Xero", "SAP", "Excel"]} />
          </div>
        </div>

        <VariantTabs variants={variants} active={active} setActive={setActive} />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 min-w-0">
          <div className="min-w-0">
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">{v.summary}</p>
            <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Process
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">{v.process}</p>
            </div>
            {v.file && (
              <a href={v.file} download className="btn-secondary mt-5 text-sm">
                Download workbook (.xlsx)
              </a>
            )}
          </div>

          <div className="min-w-0">
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {v.metrics.map((m) => (
                <div key={m.label} className="kpi-card">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-base sm:text-lg font-semibold brand-text tabular">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="relative overflow-x-auto rounded-lg border border-slate-200 bg-white touch-pan-x">
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
                    {v.table.headers.map((h, i) => (
                      <th
                        key={i}
                        className={
                          h.toLowerCase().includes("amt") ||
                          h.toLowerCase().includes("amount") ||
                          h.toLowerCase().includes("balance") ||
                          h.toLowerCase().includes("debit") ||
                          h.toLowerCase().includes("credit") ||
                          h.toLowerCase().includes("difference") ||
                          h.toLowerCase().includes("sales") ||
                          h.toLowerCase().includes("collected") ||
                          h.toLowerCase().includes("remit") ||
                          h.toLowerCase().includes("itc") ||
                          h.toLowerCase().includes("gross") ||
                          h.toLowerCase().includes("net") ||
                          h.toLowerCase().includes("fee") ||
                          h.toLowerCase().includes("paid") ||
                          h.toLowerCase().includes("cost") ||
                          h === "FX"
                            ? "num"
                            : ""
                        }
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {v.table.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} className={isNumeric(cell) ? "num" : ""}>
                          {formatCell(cell, v.table.headers[ci])}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {v.table.footer && (
                    <tr className="total">
                      {v.table.footer.map((cell, ci) => (
                        <td key={ci} className={isNumeric(cell) ? "num" : ""}>
                          {formatCell(cell, v.table.headers[ci])}
                        </td>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
