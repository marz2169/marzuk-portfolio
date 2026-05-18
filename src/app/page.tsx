import Image from "next/image";
import Link from "next/link";
import { SAMPLES, COMPANY_LABEL } from "@/lib/work-samples";
import { RedactedCompany } from "@/components/RedactedCompany";
import { WorkSampleSection } from "@/components/WorkSampleSection";
import { ToolsUsed } from "@/components/ToolsUsed";

export default function Home() {
  const uniqueCompanies = Array.from(new Set(SAMPLES.map((s) => s.company)));

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="brand-bar text-white">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
          <span className="font-semibold tracking-wide">MARZUK HAIDER CHOWDHURY</span>
          <nav className="hidden md:flex items-center gap-6 text-white/85">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#featured" className="hover:text-white">Featured</a>
            <a href="#samples" className="hover:text-white">Work Samples</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(199, 154, 58, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(11, 61, 89, 0.06) 0%, transparent 50%)",
          }}
          aria-hidden
        />
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/20 to-transparent blur-3xl pointer-events-none" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <p className="section-eyebrow mb-3">Accounting Work Portfolio &nbsp;/&nbsp; 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Marzuk Haider Chowdhury
            </h1>
            <h2 className="mt-2 text-xl md:text-2xl text-slate-600 font-medium">
              Accountant &nbsp;·&nbsp; Burnaby, BC
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Detail-oriented accountant with hands-on experience across the full
              cycle. This portfolio walks through pieces of accounting work I
              have prepared: financial statements, AP and AR processing,
              month-end journal entries, GL reconciliations and indirect tax
              filings. Every workbook below was prepared and reconciled in
              Excel, Xero, SAP and Microsoft Dynamics 365. Company names are
              redacted for confidentiality.
            </p>
            <div className="mt-5">
              <ToolsUsed tools={["Microsoft 365", "Xero", "SAP", "Microsoft Dynamics 365", "Excel"]} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/work/hur-nusrat" className="btn-primary">
                View Full-Cycle Statements
                <span aria-hidden>→</span>
              </Link>
              <a href="#samples" className="btn-secondary">
                Browse 8 Work Samples
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="kpi-card">
                <dt className="text-xs uppercase tracking-wider text-slate-500">Work Samples</dt>
                <dd className="mt-1 text-2xl font-semibold brand-text tabular">8</dd>
              </div>
              <div className="kpi-card">
                <dt className="text-xs uppercase tracking-wider text-slate-500">Function Areas</dt>
                <dd className="mt-1 text-2xl font-semibold brand-text tabular">6</dd>
              </div>
              <div className="kpi-card">
                <dt className="text-xs uppercase tracking-wider text-slate-500">Engagements</dt>
                <dd className="mt-1 text-2xl font-semibold brand-text tabular">{uniqueCompanies.length}</dd>
              </div>
              <div className="kpi-card">
                <dt className="text-xs uppercase tracking-wider text-slate-500">Period</dt>
                <dd className="mt-1 text-2xl font-semibold brand-text tabular">FY22-24</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-200/40 via-sky-200/40 to-emerald-200/40 blur-2xl" aria-hidden />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-white shadow-xl outline outline-1 outline-slate-200/70">
                <Image
                  src="/marzuk-grad.png"
                  alt="Marzuk Haider Chowdhury"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-5 w-56 md:w-64 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Opportunities
              </span>
              <p className="mt-3 text-sm text-slate-700 leading-snug">
                Full-cycle accounting work, reconciliations and clean audit-ready schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/40 to-transparent pointer-events-none" aria-hidden />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 relative">
          <div>
            <p className="section-eyebrow">About</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">Background &amp; Focus</h3>
          </div>
          <div className="md:col-span-2 space-y-5 text-slate-700 leading-relaxed">
            <p>
              I am an accountant with hands-on experience across three
              engagements: a Dhaka fashion house I helped manage for six years,
              a Canadian foodservice provider, and a Vancouver-based
              direct-sales business. Client and employer names are redacted
              across this portfolio. Statements were prepared and reconciled
              across
              <strong className="text-slate-900"> SAP</strong>,
              <strong className="text-slate-900"> Microsoft Dynamics 365 Finance &amp; Operations</strong>,
              <strong className="text-slate-900"> Xero</strong> and
              <strong className="text-slate-900"> Excel</strong>.
            </p>
            <p>
              The work shown here is representative of full-cycle accounting:
              posting and approving journal entries, processing accounts payable
              and accounts receivable, preparing monthly reconciliations,
              supporting month-end close, and tracking indirect tax filings
              against deadlines.
            </p>
            <p>
              I am looking for accounting roles that reward exactly the work I
              enjoy: accurate posting, monthly reconciliations, and clean,
              audit-ready supporting schedules.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 pt-4">
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">FY22 Net Income</p>
                <p className="mt-1 text-xl font-semibold brand-text tabular">$276,675</p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">FY22 ROE</p>
                <p className="mt-1 text-xl font-semibold brand-text tabular">33.5%</p>
              </div>
              <div className="kpi-card">
                <p className="text-xs uppercase tracking-wider text-slate-500">Mar 2024 Payments</p>
                <p className="mt-1 text-xl font-semibold brand-text tabular">$165,748</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work: Full Cycle */}
      <section id="featured" className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="section-eyebrow">Featured Work</p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                Full-Cycle Close, FY22
              </h3>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <RedactedCompany company="fashion-house" />
              </div>
              <p className="mt-3 text-slate-600 max-w-3xl">
                A complete set of financial statements prepared end-to-end: 28
                journal entries posted across 19 ledger accounts, a balanced trial
                balance, and a tied income statement and balance sheet with four
                key ratios calculated on the closing position.
              </p>
            </div>
            <Link href="/work/hur-nusrat" className="btn-primary text-sm">
              Open full case study →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_STATEMENTS.map((s) => (
              <Link
                key={s.id}
                href={`/work/hur-nusrat#${s.id}`}
                className="statement-card p-6 block"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Statement {s.number}
                  </span>
                  <span className="balance-pill">In Balance</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-slate-900">{s.name}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.summary}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                  <span className="text-slate-500">{s.metric.label}</span>
                  <span className="font-semibold brand-text tabular">{s.metric.value}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Work Samples Grid */}
      <section id="samples" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="section-eyebrow">Work Samples</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              Eight pieces of operational accounting work
            </h3>
            <p className="mt-3 text-slate-600">
              Each card links to a detailed walkthrough below with the source
              workbook available to download. Company names are blurred for
              confidentiality, but every figure shown is real preparation work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAMPLES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="statement-card p-5 block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    {s.function}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {s.period}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {s.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500">{s.subtitle}</p>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500">{COMPANY_LABEL[s.company]}</p>
                  <p className="mt-2 text-xs">
                    <span className="text-slate-500">{s.metrics[0].label}: </span>
                    <span className="font-semibold brand-text tabular">{s.metrics[0].value}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Work Sample Sections */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-4">
          <p className="section-eyebrow">Walkthroughs</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">Sample details</h3>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Each section below shows the engagement, the function area, key
            figures, the actual data prepared and the underlying process I
            followed. Download the source workbook on any sample.
          </p>
        </div>
        {SAMPLES.map((s) => (
          <WorkSampleSection
            key={s.slug}
            slug={s.slug}
            fn={s.function}
            title={s.title}
            subtitle={s.subtitle}
          />
        ))}
      </div>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <p className="section-eyebrow">Skills</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">Tools &amp; Techniques</h3>
            <p className="mt-3 text-slate-600">
              The skills I rely on for full-cycle close, AP and AR processing,
              reconciliation and reporting work.
            </p>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
            <SkillBlock
              title="Full-Cycle Accounting"
              items={[
                "General journal entries",
                "Ledger posting and T-accounts",
                "Trial balance preparation",
                "Adjusting and closing entries",
                "Income statement and balance sheet",
              ]}
            />
            <SkillBlock
              title="AP, AR &amp; Cash"
              items={[
                "Three-way match (PO, receipt, invoice)",
                "EFT, cheque, wire and online payments",
                "FX revaluation on USD payments",
                "Cash receipts application to sub-ledger",
                "Manual expense report processing",
              ]}
            />
            <SkillBlock
              title="Close &amp; Reconciliation"
              items={[
                "Month-end accruals and deferrals",
                "Depreciation and amortization",
                "Bank and GL reconciliations",
                "AP and AR sub-ledger tie-out",
                "Variance investigation and clearing",
              ]}
            />
            <SkillBlock
              title="Tax &amp; Reporting"
              items={[
                "GST/HST, QST, PST and NRT filings",
                "Sales tax sub-ledger reconciliation",
                "Working capital and liquidity ratios",
                "Gross margin and profitability analysis",
                "Audit-ready supporting schedules",
              ]}
            />
            <SkillBlock
              title="Accounting Software"
              items={[
                "SAP (full-cycle posting, period-end close)",
                "Microsoft Dynamics 365 Finance & Operations",
                "Xero (AP, AR, bank reconciliation)",
                "QuickBooks Online",
                "Microsoft Excel (advanced formulas, pivots, Power Query)",
              ]}
            />
            <SkillBlock
              title="Productivity &amp; Collaboration"
              items={[
                "Microsoft 365 (Excel, Word, Outlook, Teams)",
                "Google Workspace",
                "Salesforce, HubSpot CRM",
                "DocuSign and Adobe Acrobat",
                "Asana and Notion",
              ]}
            />
            <SkillBlock
              title="Soft Skills"
              items={[
                "Cross-functional collaboration",
                "Inter-departmental query resolution",
                "Vendor and customer correspondence",
                "Preparer and reviewer sign-off discipline",
                "Deadline-driven filing calendar management",
              ]}
            />
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/60 to-amber-50/40 pointer-events-none" aria-hidden />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <p className="section-eyebrow">Contact</p>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            Available for accounting opportunities
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Happy to walk through any of these workbooks, share my
            reconciliation approach in detail, or sit a short Excel exercise.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <ContactCard
              icon={<span className="text-2xl">📧</span>}
              label="Email"
              value="marzukchowdhury23@gmail.com"
              href="mailto:marzukchowdhury23@gmail.com"
            />
            <ContactCard
              icon={<span className="text-2xl">📱</span>}
              label="Phone"
              value="+1 236 866 7081"
              href="tel:+12368667081"
            />
            <ContactCard
              icon={<LinkedInLogo />}
              label="LinkedIn"
              value="marzuk-chowdhury"
              href="https://www.linkedin.com/in/marzuk-chowdhury-741a951b7/"
            />
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Marzuk Haider Chowdhury. Figures
            illustrative of work performed, with employer and client names
            redacted for confidentiality.
          </p>
          <p className="text-slate-400">Built with Next.js. Deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
}

const FEATURED_STATEMENTS = [
  {
    id: "journal",
    number: "01",
    name: "General Journal",
    summary:
      "Chronological record of 28 business transactions for the year, each captured as a balanced debit and credit entry with a descriptive narrative.",
    metric: { label: "Total Posted", value: "$6,281,325" },
  },
  {
    id: "t-accounts",
    number: "02",
    name: "T-Accounts (Ledger)",
    summary:
      "Each journal entry posted into its individual account so closing balances can be carried into the trial balance.",
    metric: { label: "Accounts", value: "19" },
  },
  {
    id: "trial-balance",
    number: "03",
    name: "Trial Balance",
    summary:
      "Listing of every account balance to confirm total debits equal total credits before financial statements are produced.",
    metric: { label: "Debits = Credits", value: "$3,019,225" },
  },
  {
    id: "income-statement",
    number: "04",
    name: "Income Statement",
    summary:
      "Revenue by channel, cost of goods sold and operating expenses leading to operating income, pre-tax profit and net income.",
    metric: { label: "Net Income", value: "$276,675" },
  },
  {
    id: "balance-sheet",
    number: "05",
    name: "Balance Sheet",
    summary:
      "Assets, liabilities and shareholders’ equity at year-end, with current ratio, debt-to-equity, working capital and ROE.",
    metric: { label: "Total Assets", value: "$1,400,900" },
  },
];

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="kpi-card">
      <h4 className="text-base font-bold text-slate-900" dangerouslySetInnerHTML={{ __html: title }} />
      <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-amber-600 mt-0.5">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative bg-white border border-slate-200 rounded-2xl p-5 text-left hover:border-[var(--brand)] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 block"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-[var(--brand)]/10 transition-colors">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
            {label}
          </p>
          <p className="mt-0.5 text-sm font-semibold brand-text break-all">
            {value}
          </p>
        </div>
      </div>
    </a>
  );
}

function LinkedInLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="#0A66C2"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.78 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
