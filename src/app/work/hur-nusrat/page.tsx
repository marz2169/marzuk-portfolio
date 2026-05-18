import Link from "next/link";
import { RedactedCompany } from "@/components/RedactedCompany";
import { formatCurrency } from "@/lib/work-samples";
import { JournalSection } from "@/components/sections/JournalSection";

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

      {/* Statement 2: T-Accounts */}
      <section id="t-accounts" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mb-8">
            <div>
              <p className="section-eyebrow">Statement 02</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">T-Accounts (Ledger)</h2>
              <p className="mt-3 text-slate-600">
                Each journal entry posted into its individual ledger account so
                closing balances can be carried into the trial balance.
              </p>
              <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">How I Prepared It</p>
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li>Every journal posting mapped to debit or credit side of its account.</li>
                  <li>Sub-totals struck per side, then a net closing balance struck on the bottom.</li>
                  <li>Balances flow forward into the trial balance with no manual re-entry.</li>
                </ul>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {KEY_T_ACCOUNTS.map((acc) => (
                <div key={acc.name} className="t-account">
                  <div className="t-account-header">{acc.name}</div>
                  <div className="t-account-grid">
                    <div className="t-account-side">
                      <p className="label">Debit</p>
                      {acc.debits.map((d, i) => (
                        <p key={i} className="tabular">{formatCurrency(d)}</p>
                      ))}
                      <p className="tabular font-semibold border-t border-slate-200 mt-1 pt-1">
                        {formatCurrency(acc.debits.reduce((a, b) => a + b, 0))}
                      </p>
                    </div>
                    <div className="t-account-divider" />
                    <div className="t-account-side">
                      <p className="label">Credit</p>
                      {acc.credits.map((c, i) => (
                        <p key={i} className="tabular">{formatCurrency(c)}</p>
                      ))}
                      <p className="tabular font-semibold border-t border-slate-200 mt-1 pt-1">
                        {formatCurrency(acc.credits.reduce((a, b) => a + b, 0))}
                      </p>
                    </div>
                  </div>
                  <div className="t-account-balance">
                    Balance:{" "}
                    <span className="brand-text">
                      {formatCurrency(
                        acc.debits.reduce((a, b) => a + b, 0) - acc.credits.reduce((a, b) => a + b, 0)
                      )}{" "}
                      ({acc.balanceSide})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center">
            Showing 6 of 19 key ledger accounts. Full ledger available in the source workbook.
          </p>
        </div>
      </section>

      {/* Statement 3: Trial Balance */}
      <section id="trial-balance" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            <div>
              <p className="section-eyebrow">Statement 03</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Trial Balance</h2>
              <p className="mt-3 text-slate-600">
                Listing of every account balance to confirm total debits equal
                total credits before financial statements are produced.
              </p>
              <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">How I Prepared It</p>
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li>Pulled closing balance from each T-account.</li>
                  <li>Classified by type: Asset, Contra-Asset, Liability, Equity, Revenue, Expense.</li>
                  <li>Totals reconcile to $3,019,225 on each side, confirming debits = credits before financial statements are produced.</li>
                </ul>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
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
                  {TRIAL_BALANCE.map((r, i) => (
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
                    <td className="num tabular">$3,019,225</td>
                    <td className="num tabular">$3,019,225</td>
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

      {/* Statement 4: Income Statement */}
      <section id="income-statement" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            <div>
              <p className="section-eyebrow">Statement 04</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Income Statement</h2>
              <p className="mt-3 text-slate-600">
                Revenue by channel, cost of goods sold and operating expenses
                leading to operating income, pre-tax profit and net income.
              </p>
              <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">How I Prepared It</p>
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li>Closed revenue, COGS, operating expenses, interest and tax from the trial balance.</li>
                  <li>Computed gross profit ($1.14M), operating income ($379K), pre-tax income ($369K) and net income ($277K).</li>
                  <li>Net profit margin of 15.4% on total revenue of $1.8M, after 25% corporate tax.</li>
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="kpi-card">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Gross Profit</p>
                  <p className="mt-1 text-lg font-semibold brand-text tabular">$1,142,000</p>
                </div>
                <div className="kpi-card">
                  <p className="text-xs uppercase tracking-wider text-slate-500">Net Margin</p>
                  <p className="mt-1 text-lg font-semibold brand-text tabular">15.4%</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
              <table className="ledger-table">
                <tbody>
                  <tr><td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">Revenue</td></tr>
                  <tr><td className="pl-6">Wholesale Revenue</td><td className="num tabular">$980,000</td></tr>
                  <tr><td className="pl-6">Retail Boutique Revenue</td><td className="num tabular">$760,000</td></tr>
                  <tr><td className="pl-6">Licensing &amp; Royalty Income</td><td className="num tabular">$60,000</td></tr>
                  <tr className="subtotal"><td>Total Revenue</td><td className="num tabular">$1,800,000</td></tr>

                  <tr><td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">Cost of Goods Sold</td></tr>
                  <tr><td className="pl-6">Cost of Goods Sold</td><td className="num tabular">($658,000)</td></tr>
                  <tr className="subtotal"><td>Gross Profit</td><td className="num tabular">$1,142,000</td></tr>

                  <tr><td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">Operating Expenses</td></tr>
                  <tr><td className="pl-6">Design &amp; Sample Development</td><td className="num tabular">($110,000)</td></tr>
                  <tr><td className="pl-6">Fashion Show &amp; Runway</td><td className="num tabular">($75,000)</td></tr>
                  <tr><td className="pl-6">Salaries &amp; Wages</td><td className="num tabular">($290,000)</td></tr>
                  <tr><td className="pl-6">Rent</td><td className="num tabular">($96,000)</td></tr>
                  <tr><td className="pl-6">Utilities</td><td className="num tabular">($19,000)</td></tr>
                  <tr><td className="pl-6">Advertising &amp; Marketing</td><td className="num tabular">($88,000)</td></tr>
                  <tr><td className="pl-6">Shipping &amp; Freight</td><td className="num tabular">($24,000)</td></tr>
                  <tr><td className="pl-6">Depreciation</td><td className="num tabular">($30,000)</td></tr>
                  <tr><td className="pl-6">Amortization</td><td className="num tabular">($15,000)</td></tr>
                  <tr><td className="pl-6">Insurance</td><td className="num tabular">($16,500)</td></tr>
                  <tr className="subtotal"><td>Total Operating Expenses</td><td className="num tabular">($763,500)</td></tr>
                  <tr className="subtotal"><td>Operating Income (EBIT)</td><td className="num tabular">$378,500</td></tr>

                  <tr><td className="pl-6">Interest Expense</td><td className="num tabular">($9,600)</td></tr>
                  <tr className="subtotal"><td>Income Before Income Tax</td><td className="num tabular">$368,900</td></tr>
                  <tr><td className="pl-6">Income Tax Expense (25%)</td><td className="num tabular">($92,225)</td></tr>
                  <tr className="total"><td>NET INCOME</td><td className="num tabular">$276,675</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Statement 5: Balance Sheet */}
      <section id="balance-sheet" className="py-12 md:py-16 border-b border-slate-200 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            <div>
              <p className="section-eyebrow">Statement 05</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Balance Sheet</h2>
              <p className="mt-3 text-slate-600">
                Assets, liabilities and shareholders’ equity at year-end, with
                current ratio, debt-to-equity, working capital and return on
                equity calculated on the closing position.
              </p>
              <div className="mt-5 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">How I Prepared It</p>
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-4">
                  <li>Closing balances grouped into current assets, fixed assets, intangibles, current liabilities, long-term debt and equity.</li>
                  <li>Equity reconciled: opening common shares $600,000 plus net income $276,675 less dividends declared $50,000.</li>
                  <li>Total assets of $1,400,900 tie exactly to total liabilities and equity, confirming the balance sheet equation.</li>
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="kpi-card"><p className="text-xs uppercase tracking-wider text-slate-500">Current Ratio</p><p className="mt-1 text-lg font-semibold brand-text tabular">2.59</p></div>
                <div className="kpi-card"><p className="text-xs uppercase tracking-wider text-slate-500">Debt to Equity</p><p className="mt-1 text-lg font-semibold brand-text tabular">0.69</p></div>
                <div className="kpi-card"><p className="text-xs uppercase tracking-wider text-slate-500">Working Capital</p><p className="mt-1 text-lg font-semibold brand-text tabular">$721,675</p></div>
                <div className="kpi-card"><p className="text-xs uppercase tracking-wider text-slate-500">ROE</p><p className="mt-1 text-lg font-semibold brand-text tabular">33.5%</p></div>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
              <table className="ledger-table">
                <tbody>
                  <tr><td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">Assets</td></tr>
                  <tr><td className="pl-4 font-semibold text-slate-600">Current Assets</td><td></td></tr>
                  <tr><td className="pl-8">Cash</td><td className="num tabular">$432,400</td></tr>
                  <tr><td className="pl-8">Accounts Receivable</td><td className="num tabular">$580,000</td></tr>
                  <tr><td className="pl-8">Raw Materials Inventory</td><td className="num tabular">$100,000</td></tr>
                  <tr><td className="pl-8">Finished Goods Inventory</td><td className="num tabular">$62,000</td></tr>
                  <tr><td className="pl-8">Prepaid Insurance</td><td className="num tabular">$1,500</td></tr>
                  <tr className="subtotal"><td className="pl-4">Total Current Assets</td><td className="num tabular">$1,175,900</td></tr>

                  <tr><td className="pl-4 font-semibold text-slate-600">Property &amp; Equipment</td><td></td></tr>
                  <tr><td className="pl-8">Studio &amp; Showroom Equipment</td><td className="num tabular">$180,000</td></tr>
                  <tr><td className="pl-8">Less: Accumulated Depreciation</td><td className="num tabular">($30,000)</td></tr>
                  <tr className="subtotal"><td className="pl-4">Net Book Value, Equipment</td><td className="num tabular">$150,000</td></tr>

                  <tr><td className="pl-4 font-semibold text-slate-600">Intangible Assets</td><td></td></tr>
                  <tr><td className="pl-8">Brand &amp; Design Portfolio</td><td className="num tabular">$90,000</td></tr>
                  <tr><td className="pl-8">Less: Accumulated Amortization</td><td className="num tabular">($15,000)</td></tr>
                  <tr className="subtotal"><td className="pl-4">Net Book Value, Intangibles</td><td className="num tabular">$75,000</td></tr>

                  <tr className="total"><td>TOTAL ASSETS</td><td className="num tabular">$1,400,900</td></tr>

                  <tr><td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">Liabilities</td></tr>
                  <tr><td className="pl-4 font-semibold text-slate-600">Current Liabilities</td><td></td></tr>
                  <tr><td className="pl-8">Accounts Payable</td><td className="num tabular">$340,000</td></tr>
                  <tr><td className="pl-8">Salaries Payable</td><td className="num tabular">$22,000</td></tr>
                  <tr><td className="pl-8">Income Tax Payable</td><td className="num tabular">$92,225</td></tr>
                  <tr className="subtotal"><td className="pl-4">Total Current Liabilities</td><td className="num tabular">$454,225</td></tr>

                  <tr><td className="pl-4 font-semibold text-slate-600">Non-Current Liabilities</td><td></td></tr>
                  <tr><td className="pl-8">Notes Payable</td><td className="num tabular">$120,000</td></tr>
                  <tr className="subtotal"><td>TOTAL LIABILITIES</td><td className="num tabular">$574,225</td></tr>

                  <tr><td colSpan={2} className="font-bold uppercase tracking-wider bg-slate-100 text-slate-700 text-xs">Shareholders’ Equity</td></tr>
                  <tr><td className="pl-8">Common Shares</td><td className="num tabular">$600,000</td></tr>
                  <tr><td className="pl-8">Net Income for the Year</td><td className="num tabular">$276,675</td></tr>
                  <tr><td className="pl-8">Less: Dividends Declared</td><td className="num tabular">($50,000)</td></tr>
                  <tr className="subtotal"><td className="pl-4">Retained Earnings</td><td className="num tabular">$226,675</td></tr>
                  <tr className="subtotal"><td>TOTAL SHAREHOLDERS’ EQUITY</td><td className="num tabular">$826,675</td></tr>

                  <tr className="total"><td>TOTAL LIABILITIES &amp; EQUITY</td><td className="num tabular">$1,400,900</td></tr>
                </tbody>
              </table>
              <div className="px-4 py-3 bg-emerald-50 border-t border-emerald-100">
                <span className="balance-pill">Total Assets = Total Liabilities &amp; Equity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

const KEY_T_ACCOUNTS = [
  { name: "Cash", debits: [600000, 760000, 400000, 60000], credits: [60000, 90000, 18000, 64000, 200000, 75000, 280000, 268000, 96000, 19000, 88000, 24000, 50000, 46000, 9600], balanceSide: "Dr" },
  { name: "Accounts Receivable", debits: [980000], credits: [400000], balanceSide: "Dr" },
  { name: "Finished Goods Inventory", debits: [720000], credits: [392000, 266000], balanceSide: "Dr" },
  { name: "Accounts Payable", debits: [280000], credits: [620000], balanceSide: "Cr" },
  { name: "Wholesale Revenue", debits: [], credits: [980000], balanceSide: "Cr" },
  { name: "Cost of Goods Sold", debits: [392000, 266000], credits: [], balanceSide: "Dr" },
];

const TRIAL_BALANCE = [
  { account: "Cash", type: "Asset", debit: 432400, credit: 0 },
  { account: "Accounts Receivable", type: "Asset", debit: 580000, credit: 0 },
  { account: "Raw Materials & Fabric Inventory", type: "Asset", debit: 100000, credit: 0 },
  { account: "Finished Goods Inventory", type: "Asset", debit: 62000, credit: 0 },
  { account: "Prepaid Insurance", type: "Asset", debit: 1500, credit: 0 },
  { account: "Studio & Showroom Equipment", type: "Asset", debit: 180000, credit: 0 },
  { account: "Accumulated Depreciation", type: "Contra-Asset", debit: 0, credit: 30000 },
  { account: "Intangible Assets, Brand & Designs", type: "Asset", debit: 90000, credit: 0 },
  { account: "Accumulated Amortization", type: "Contra-Asset", debit: 0, credit: 15000 },
  { account: "Accounts Payable", type: "Liability", debit: 0, credit: 340000 },
  { account: "Salaries Payable", type: "Liability", debit: 0, credit: 22000 },
  { account: "Income Tax Payable", type: "Liability", debit: 0, credit: 92225 },
  { account: "Notes Payable", type: "Liability", debit: 0, credit: 120000 },
  { account: "Common Shares", type: "Equity", debit: 0, credit: 600000 },
  { account: "Dividends", type: "Equity", debit: 50000, credit: 0 },
  { account: "Wholesale Revenue", type: "Revenue", debit: 0, credit: 980000 },
  { account: "Retail Boutique Revenue", type: "Revenue", debit: 0, credit: 760000 },
  { account: "Licensing & Royalty Income", type: "Revenue", debit: 0, credit: 60000 },
  { account: "Cost of Goods Sold", type: "Expense", debit: 658000, credit: 0 },
  { account: "Design & Sample Development", type: "Expense", debit: 110000, credit: 0 },
  { account: "Fashion Show & Runway", type: "Expense", debit: 75000, credit: 0 },
  { account: "Salaries & Wages", type: "Expense", debit: 290000, credit: 0 },
  { account: "Rent", type: "Expense", debit: 96000, credit: 0 },
  { account: "Utilities", type: "Expense", debit: 19000, credit: 0 },
  { account: "Advertising & Marketing", type: "Expense", debit: 88000, credit: 0 },
  { account: "Shipping & Freight", type: "Expense", debit: 24000, credit: 0 },
  { account: "Depreciation", type: "Expense", debit: 30000, credit: 0 },
  { account: "Amortization", type: "Expense", debit: 15000, credit: 0 },
  { account: "Insurance", type: "Expense", debit: 16500, credit: 0 },
  { account: "Interest", type: "Expense", debit: 9600, credit: 0 },
  { account: "Income Tax", type: "Expense", debit: 92225, credit: 0 },
];
