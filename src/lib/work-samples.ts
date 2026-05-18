export type Company = "fashion-house" | "foodservice" | "direct-sales";

export const COMPANY_LABEL: Record<Company, string> = {
  "fashion-house": "Fashion House",
  foodservice: "Foodservice Provider",
  "direct-sales": "Direct Sales Co.",
};

export const COMPANY_REDACTED_PLACEHOLDER: Record<Company, string> = {
  "fashion-house": "█████████████",
  foodservice: "███████████████",
  "direct-sales": "█████████",
};

export type WorkSample = {
  slug: string;
  company: Company;
  function: "AP" | "AR" | "GL" | "Close" | "Tax" | "Recon" | "Full Cycle";
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  process: string;
  file: string;
  metrics: { label: string; value: string }[];
  table: {
    headers: string[];
    rows: (string | number)[][];
    footer?: (string | number | null)[];
  };
};

export const FULL_CYCLE_SUMMARY = {
  netIncome: 276675,
  totalRevenue: 1800000,
  totalAssets: 1400900,
  currentRatio: 2.59,
  debtToEquity: 0.69,
  workingCapital: 721675,
  roe: 0.3347,
  journalEntries: 28,
  accounts: 31,
  totalPosted: 6281325,
  trialBalance: 3019225,
};

export const SAMPLES: WorkSample[] = [
  {
    slug: "manual-expense-reports",
    company: "foodservice",
    function: "AP",
    title: "Manual Expense Report Processing",
    subtitle: "Non-cardholder employee reimbursements",
    period: "March 2024",
    summary:
      "Processed manual expense reports for non-cardholder staff. Receipts verified against company policy, GL coded, routed for departmental approval and scheduled for EFT reimbursement.",
    process:
      "Receipts verified against policy. GL coded by category. Approval routed to department manager. Reimbursement scheduled via EFT. Queries logged on items pending follow-up.",
    file: "/1_Manual_Expense_Reports_CompassCanada.xlsx",
    metrics: [
      { label: "Total Reports", value: "$1,863.04" },
      { label: "Approved", value: "$1,167.89" },
      { label: "GL Accounts Used", value: "6" },
      { label: "Reports Processed", value: "11" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Dept", "Description", "Cat.", "GL", "Amount", "Status"],
      rows: [
        ["03-Mar", "EXP-1041", "P. Sharma", "Sales", "Client lunch, boutique buyer meeting", "Meals & Ent.", "6310", 184.5, "Approved"],
        ["05-Mar", "EXP-1042", "D. Roy", "Logistics", "Mileage, warehouse run", "Travel", "6320", 97.2, "Approved"],
        ["07-Mar", "EXP-1043", "A. Khan", "Marketing", "Print materials for trade show", "Office Supplies", "6210", 312.75, "Pending Receipt"],
        ["11-Mar", "EXP-1044", "M. Tremblay", "Operations", "Parking & transit, supplier site visit", "Travel", "6320", 58, "Approved"],
        ["12-Mar", "EXP-1045", "P. Sharma", "Sales", "Hotel, regional sales conference", "Travel", "6320", 428.9, "Approved"],
        ["14-Mar", "EXP-1046", "L. O'Connor", "Finance", "Professional membership renewal", "Dues & Subs.", "6410", 215, "Query Raised"],
        ["18-Mar", "EXP-1047", "S. Mendez", "Design", "Courier, fabric sample delivery", "Freight", "6510", 46.3, "Approved"],
        ["20-Mar", "EXP-1048", "D. Roy", "Logistics", "Safety equipment, warehouse staff", "Office Supplies", "6210", 139.99, "Approved"],
        ["22-Mar", "EXP-1049", "A. Khan", "Marketing", "Social media campaign stock photos", "Advertising", "6610", 89, "Approved"],
        ["26-Mar", "EXP-1050", "M. Tremblay", "Operations", "Team meeting catering", "Meals & Ent.", "6310", 167.4, "Pending Approval"],
        ["28-Mar", "EXP-1051", "S. Mendez", "Design", "Trade publication subscription", "Dues & Subs.", "6410", 124, "Approved"],
      ],
      footer: [null, null, "TOTAL EXPENSE REPORTS", null, null, null, null, 1863.04, null],
    },
  },
  {
    slug: "outgoing-payments-register",
    company: "fashion-house",
    function: "AP",
    title: "Outgoing Payments Register",
    subtitle: "EFT, cheque, wire and online disbursements",
    period: "March 2024",
    summary:
      "Maintained the outgoing payments register across four payment methods and two currencies. All payments matched to approved invoices through a three-way match before release.",
    process:
      "Three-way match against PO, goods receipt and invoice. USD wires converted at daily rate with FX gain or loss posted at month-end. Cheques logged for positive-pay bank reconciliation.",
    file: "/2_Outgoing_Payments_Register_HurNusrat.xlsx",
    metrics: [
      { label: "Total Disbursed", value: "$165,748" },
      { label: "EFT", value: "$98,330" },
      { label: "Wire (USD)", value: "$53,157" },
      { label: "Cheque + Online", value: "$14,261" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Vendor", "Invoice", "Method", "Currency", "FX", "Doc Amt", "CAD Amt"],
      rows: [
        ["04-Mar", "EFT-20451", "Milano Textile Mills", "INV-8841", "EFT", "CAD", 1, 42850, 42850],
        ["06-Mar", "WIR-00318", "Atelier Silk Importers SA", "INV-2207", "Wire", "USD", 1.354, 18600, 25184.4],
        ["08-Mar", "CHQ-10592", "Heritage Property Mgmt", "RENT-0324", "Cheque", "CAD", 1, 9600, 9600],
        ["11-Mar", "EFT-20452", "Northern Trims & Notions", "INV-4419", "EFT", "CAD", 1, 7320.45, 7320.45],
        ["12-Mar", "ONL-77103", "Hydro One", "UTIL-0324", "Online", "CAD", 1, 1880.16, 1880.16],
        ["14-Mar", "WIR-00319", "Paris Embellishment Co.", "INV-5560", "Wire", "USD", 1.358, 11250, 15277.5],
        ["18-Mar", "EFT-20453", "Runway Events Group", "INV-3092", "EFT", "CAD", 1, 28500, 28500],
        ["20-Mar", "CHQ-10593", "Quebec Couriers Inc.", "INV-1187", "Cheque", "CAD", 1, 2140.75, 2140.75],
        ["22-Mar", "ONL-77104", "Bell Canada", "TEL-0324", "Online", "CAD", 1, 640.3, 640.3],
        ["25-Mar", "EFT-20454", "Studio Lighting Solutions", "INV-7715", "EFT", "CAD", 1, 5460, 5460],
        ["27-Mar", "WIR-00320", "Lombardia Leather Goods", "INV-9903", "Wire", "USD", 1.3505, 9400, 12694.7],
        ["29-Mar", "EFT-20455", "Creative Media Partners", "INV-6628", "EFT", "CAD", 1, 14200, 14200],
      ],
      footer: [null, null, "TOTAL PAYMENTS DISBURSED", null, null, null, null, null, 165748.26],
    },
  },
  {
    slug: "cash-receipts-application",
    company: "direct-sales",
    function: "AR",
    title: "Cash Receipts & Customer Payment Application",
    subtitle: "Customer remittance posting to AR sub-ledger",
    period: "March 2024",
    summary:
      "Posted daily customer receipts and applied them against the AR sub-ledger. Partial payments left open balances on the original invoice. Unapplied credits cleared on the customer's next invoice.",
    process:
      "Receipts deposited daily, applied to oldest open invoice unless remittance advice specifies otherwise. Variance column reconciled to zero on every application.",
    file: "/3_Cash_Receipts_Application_GoSales.xlsx",
    metrics: [
      { label: "Total Receipts", value: "$124,756" },
      { label: "Variance", value: "$0" },
      { label: "Customers", value: "6" },
      { label: "Applications", value: "12" },
    ],
    table: {
      headers: ["Date", "Receipt #", "Customer", "Method", "Invoice", "Inv. Amt", "Received", "Applied", "Status"],
      rows: [
        ["04-Mar", "RCT-5510", "Maple Leaf Retail Group", "EFT", "SI-9001", 12400, 12400, 12400, "Fully Applied"],
        ["06-Mar", "RCT-5511", "Pacific Boutiques Ltd.", "Cheque", "SI-9002", 8650, 8650, 8650, "Fully Applied"],
        ["07-Mar", "RCT-5512", "Urban Threads Inc.", "Online", "SI-9003", 4275.5, 4275.5, 4275.5, "Fully Applied"],
        ["11-Mar", "RCT-5513", "Maple Leaf Retail Group", "EFT", "SI-9007", 15800, 15000, 15000, "Partial Payment"],
        ["12-Mar", "RCT-5514", "Coastal Department Stores", "Wire", "SI-9004", 22150, 22150, 22150, "Fully Applied"],
        ["14-Mar", "RCT-5515", "Northern Apparel Co.", "Cheque", "SI-9005", 6320, 6320, 6320, "Fully Applied"],
        ["18-Mar", "RCT-5516", "Urban Threads Inc.", "EFT", "SI-9009", 9480, 9480, 9480, "Fully Applied"],
        ["20-Mar", "RCT-5517", "Evergreen Outfitters", "Online", "SI-9006", 3890.75, 3890.75, 3890.75, "Fully Applied"],
        ["22-Mar", "RCT-5518", "Pacific Boutiques Ltd.", "EFT", "SI-9011", 11250, 11250, 11250, "Fully Applied"],
        ["25-Mar", "RCT-5519", "Coastal Department Stores", "Wire", "SI-9008", 18600, 18600, 18600, "Fully Applied"],
        ["27-Mar", "RCT-5520", "Maple Leaf Retail Group", "Cheque", "On Account", 0, 5000, 5000, "Unapplied Credit"],
        ["29-Mar", "RCT-5521", "Northern Apparel Co.", "EFT", "SI-9012", 7740, 7740, 7740, "Fully Applied"],
      ],
      footer: [null, null, "TOTAL CASH RECEIPTS", null, null, null, 124756.25, 124756.25, null],
    },
  },
  {
    slug: "ap-query-tracker",
    company: "foodservice",
    function: "AP",
    title: "AP Query & Investigation Tracker",
    subtitle: "Inter-departmental query resolution log",
    period: "March 2024",
    summary:
      "Logged and resolved AP queries raised by Procurement, Operations, Design Studio, Finance and Marketing. Each query investigated against PO, goods receipt, vendor statement and tax rules before a response was issued.",
    process:
      "Service targets: High priority closed within 2 business days, Medium within 4 days, Low within 5 days. Resolution requires supporting documentation referenced in the response.",
    file: "/4_AP_Query_Tracker_CompassCanada.xlsx",
    metrics: [
      { label: "Queries Logged", value: "9" },
      { label: "Resolved", value: "6" },
      { label: "In Progress", value: "2" },
      { label: "Avg. Days Open", value: "2.2" },
    ],
    table: {
      headers: ["Date", "Query ID", "Raised By", "Vendor / Subject", "Priority", "Days Open", "Resolved", "Status"],
      rows: [
        ["04-Mar", "Q-3301", "Procurement", "Milano Textile Mills", "Medium", "2", "06-Mar", "Resolved"],
        ["06-Mar", "Q-3302", "Operations", "Quebec Couriers Inc.", "Low", "1", "07-Mar", "Resolved"],
        ["08-Mar", "Q-3303", "Design Studio", "Northern Trims & Notions", "High", "open", "open", "In Progress"],
        ["11-Mar", "Q-3304", "Finance", "Heritage Property Mgmt", "Medium", "3", "14-Mar", "Resolved"],
        ["13-Mar", "Q-3305", "Marketing", "Creative Media Partners", "Low", "2", "15-Mar", "Resolved"],
        ["18-Mar", "Q-3306", "Procurement", "Studio Lighting Solutions", "High", "open", "open", "Awaiting Vendor"],
        ["20-Mar", "Q-3307", "Logistics", "Lombardia Leather Goods", "Medium", "4", "25-Mar", "Resolved"],
        ["22-Mar", "Q-3308", "Operations", "Hydro One", "Low", "1", "25-Mar", "Resolved"],
        ["26-Mar", "Q-3309", "Finance", "Runway Events Group", "Medium", "open", "open", "In Progress"],
      ],
    },
  },
  {
    slug: "month-end-journal-entries",
    company: "fashion-house",
    function: "Close",
    title: "Month-End Journal Entries",
    subtitle: "Accruals, deferrals, depreciation and reclasses",
    period: "March 2024",
    summary:
      "Prepared and posted the standard month-end journal entry package including unbilled accruals, depreciation, amortization, prepaid amortization, payroll accrual, FX revaluation, reclasses and sales tax.",
    process:
      "Each entry supported by a working paper and reviewed before posting. All accruals flagged for reversal on the first day of the following period.",
    file: "/5_Month_End_Journal_Entries_HurNusrat.xlsx",
    metrics: [
      { label: "Entries Posted", value: "8" },
      { label: "Total Debits", value: "$59,745" },
      { label: "Total Credits", value: "$59,745" },
      { label: "Balance Check", value: "In Balance" },
    ],
    table: {
      headers: ["JE Date", "JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["31-Mar", "ME-01", "Raw Materials & Fabric Inventory", "1310", 18400, "", "Accrue unbilled fabric received not invoiced"],
        ["", "", "    Accrued Liabilities", "2150", "", 18400, ""],
        ["31-Mar", "ME-02", "Depreciation Expense", "6710", 2500, "", "Studio & showroom equipment"],
        ["", "", "    Accumulated Depreciation", "1610", "", 2500, ""],
        ["31-Mar", "ME-03", "Amortization Expense", "6720", 1250, "", "Brand & design intangibles"],
        ["", "", "    Accumulated Amortization", "1710", "", 1250, ""],
        ["31-Mar", "ME-04", "Insurance Expense", "6420", 1375, "", "Prepaid insurance expired"],
        ["", "", "    Prepaid Insurance", "1410", "", 1375, ""],
        ["31-Mar", "ME-05", "Salaries & Wages Expense", "6110", 16800, "", "Accrue payroll earned, not yet paid"],
        ["", "", "    Salaries Payable", "2120", "", 16800, ""],
        ["31-Mar", "ME-06", "Accounts Payable", "2110", 640, "", "FX gain on USD wire revaluation"],
        ["", "", "    Foreign Exchange Gain", "7210", "", 640, ""],
        ["31-Mar", "ME-07", "Rent Expense", "6210", 9600, "", "Reclass rent miscoded to office supplies"],
        ["", "", "    Office Supplies Expense", "6310", "", 9600, ""],
        ["31-Mar", "ME-08", "GST/HST Receivable (ITC)", "1240", 4820, "", "Accrue GST/HST payable for the period"],
        ["", "", "    GST/HST Payable", "2210", "", 9180, ""],
        ["", "", "GST/HST Suspense", "2215", 4360, "", ""],
      ],
      footer: [null, null, "TOTAL, MONTH-END JOURNAL", null, 59745, 59745, null],
    },
  },
  {
    slug: "gl-account-reconciliations",
    company: "direct-sales",
    function: "Recon",
    title: "GL Account Reconciliations",
    subtitle: "Delegated balance sheet account reconciliations",
    period: "As at March 31, 2024",
    summary:
      "Reconciled nine delegated balance sheet accounts to independent supporting records: bank statements, sub-ledgers and working papers. Variances documented with reconciling items and cleared the following period.",
    process:
      "GL balance compared against independent support. Variances flagged with reconciling items. Sign-off required by preparer and reviewer before close.",
    file: "/6_GL_Account_Reconciliations_GoSales.xlsx",
    metrics: [
      { label: "Accounts Reconciled", value: "9" },
      { label: "Total GL", value: "$730,915" },
      { label: "Variance", value: "($1,300)" },
      { label: "Clean Recs", value: "7 of 9" },
    ],
    table: {
      headers: ["GL", "Account Name", "GL Balance", "Support Bal.", "Difference", "Status", "Reconciling Items"],
      rows: [
        ["1010", "Bank, RBC Operating", 284560, 284560, 0, "Reconciled", "Matched to bank statement, no outstanding items"],
        ["1200", "Accounts Receivable, Trade", 196340, 196340, 0, "Reconciled", "Agrees to AR aging sub-ledger"],
        ["1240", "GST/HST Receivable (ITC)", 14820, 14820, 0, "Reconciled", "Agrees to input tax credit schedule"],
        ["1410", "Prepaid Insurance", 9625, 9625, 0, "Reconciled", "Agrees to prepaid amortization schedule"],
        ["2110", "Accounts Payable, Trade", 148790, 151290, -2500, "Variance", "In transit: INV-5560 received Apr 1, dated Mar"],
        ["2120", "Salaries Payable", 16800, 16800, 0, "Reconciled", "Agrees to March payroll accrual working paper"],
        ["2150", "Accrued Liabilities", 27600, 27600, 0, "Reconciled", "Agrees to accruals listing"],
        ["2210", "GST/HST Payable", 31180, 31180, 0, "Reconciled", "Agrees to sales tax return working paper"],
        ["1250", "Employee Advances", 1200, 0, 1200, "Variance", "Outstanding: EXP advance, follow-up with employee"],
      ],
      footer: [null, "TOTAL, DELEGATED ACCOUNTS", 730915, 732215, -1300, null, null],
    },
  },
  {
    slug: "tax-returns-tracker",
    company: "fashion-house",
    function: "Tax",
    title: "Indirect Tax Returns Tracker",
    subtitle: "GST/HST, QST, PST and NRT filing calendar",
    period: "2024 Filing Calendar",
    summary:
      "Tracked Canadian indirect tax filings across federal, Quebec and BC jurisdictions. Returns prepared from the sales tax sub-ledger and reconciled to the GL control accounts before submission.",
    process:
      "Sales tax sub-ledger reconciled to GL control accounts. NRT filed weekly. GST/HST, QST and PST on assigned monthly, quarterly and annual cycles. Filing deadlines monitored to avoid interest and penalties.",
    file: "/7_Tax_Returns_Tracker_HurNusrat.xlsx",
    metrics: [
      { label: "Taxable Sales", value: "$5.73M" },
      { label: "Tax Collected", value: "$728,801" },
      { label: "Net Remittance", value: "$481,971" },
      { label: "Returns Filed", value: "5 of 10" },
    ],
    table: {
      headers: ["Tax", "Frequency", "Period", "Jurisdiction", "Taxable Sales", "Tax Collected", "ITC", "Net Remit", "Due", "Status"],
      rows: [
        ["GST/HST", "Monthly", "Feb 2024", "Federal", 312400, 40612, 12840, 27772, "31-Mar", "Filed"],
        ["QST", "Monthly", "Feb 2024", "Quebec", 128600, 12827.85, 4180, 8647.85, "31-Mar", "Filed"],
        ["PST", "Monthly", "Feb 2024", "British Columbia", 64200, 4494, 0, 4494, "31-Mar", "Filed"],
        ["NRT", "Weekly", "Wk 11 2024", "Non-Resident", 18500, 2775, 0, 2775, "19-Mar", "Filed"],
        ["NRT", "Weekly", "Wk 12 2024", "Non-Resident", 21300, 3195, 0, 3195, "26-Mar", "Filed"],
        ["GST/HST", "Monthly", "Mar 2024", "Federal", 345800, 44954, 15220, 29734, "30-Apr", "In Progress"],
        ["QST", "Monthly", "Mar 2024", "Quebec", 141200, 14084.7, 4910, 9174.7, "30-Apr", "In Progress"],
        ["PST", "Monthly", "Mar 2024", "British Columbia", 71400, 4998, 0, 4998, "30-Apr", "In Progress"],
        ["GST/HST", "Quarterly", "Q1 2024", "Federal", 982000, 127660, 41280, 86380, "30-Apr", "Not Started"],
        ["GST/HST", "Annual", "FY 2023", "Federal", 3640000, 473200, 168400, 304800, "30-Jun", "Not Started"],
      ],
      footer: [null, null, null, "TOTAL", 5725400, 728800.55, 246830, 481970.55, null, null],
    },
  },
];

export function formatCurrency(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === "") return "";
  if (typeof value === "string") return value;
  if (value === 0) return "$0";
  const sign = value < 0 ? "(" : "";
  const close = value < 0 ? ")" : "";
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString("en-CA", {
    minimumFractionDigits: Number.isInteger(abs) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `${sign}$${formatted}${close}`;
}

export function formatNumber(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === "") return "";
  if (typeof value === "string") return value;
  return value.toLocaleString("en-CA", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}
