import { WorkSample, formatCurrency, formatNumber } from "@/lib/work-samples";
import { RedactedCompany } from "./RedactedCompany";
import { ToolsUsed } from "./ToolsUsed";

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
    columnHeader.toLowerCase().includes("itc");
  if (isCurrency && typeof value === "number") return formatCurrency(value);
  if (typeof value === "number") return formatNumber(value);
  return String(value);
}

function isNumeric(value: string | number | null | undefined): boolean {
  return typeof value === "number";
}

export function WorkSampleSection({ sample }: { sample: WorkSample }) {
  return (
    <section
      id={sample.slug}
      className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
                {sample.function}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {sample.period}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {sample.title}
            </h3>
            <p className="mt-1 text-slate-600">{sample.subtitle}</p>
            <div className="mt-3">
              <ToolsUsed tools={["Microsoft 365", "Xero", "SAP", "Excel"]} />
            </div>
            <div className="mt-4">
              <RedactedCompany company={sample.company} />
            </div>
            <p className="mt-5 text-sm text-slate-700 leading-relaxed">{sample.summary}</p>
            <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Process
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">{sample.process}</p>
            </div>
            <a
              href={sample.file}
              download
              className="btn-secondary mt-5 text-sm"
            >
              Download workbook (.xlsx)
            </a>
          </div>

          <div>
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {sample.metrics.map((m) => (
                <div key={m.label} className="kpi-card">
                  <dt className="text-xs uppercase tracking-wider text-slate-500">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold brand-text tabular">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="ledger-table">
                <thead>
                  <tr>
                    {sample.table.headers.map((h, i) => (
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
                  {sample.table.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={isNumeric(cell) ? "num" : ""}
                        >
                          {formatCell(cell, sample.table.headers[ci])}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {sample.table.footer && (
                    <tr className="total">
                      {sample.table.footer.map((cell, ci) => (
                        <td
                          key={ci}
                          className={isNumeric(cell) ? "num" : ""}
                        >
                          {formatCell(cell, sample.table.headers[ci])}
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
