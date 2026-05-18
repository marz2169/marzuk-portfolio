import { Company } from "./work-samples";

export type TAccountVariant = {
  label: string;
  period: string;
  company: Company;
  theme: string;
  accountName: string;
  accountType: string;
  summary: string;
  debits: { desc: string; amount: number }[];
  credits: { desc: string; amount: number }[];
  openingBalance?: number;
  balanceSide?: "Dr" | "Cr";
};

export const T_ACCOUNT_VARIANTS: TAccountVariant[] = [
  {
    label: "Cash",
    period: "FY 2022",
    company: "fashion-house",
    theme: "Asset",
    accountName: "Cash, RBC Operating",
    accountType: "Asset",
    summary:
      "Main operating cash account for the year. Tracked share issuance, sales receipts, supplier payments, payroll runs and operating expenses across 19 transactions.",
    debits: [
      { desc: "J-01 Share issuance", amount: 600000 },
      { desc: "J-11 Retail sales", amount: 760000 },
      { desc: "J-13 AR collection", amount: 400000 },
      { desc: "J-15 Royalty income", amount: 60000 },
    ],
    credits: [
      { desc: "J-02 Equipment purchase", amount: 60000 },
      { desc: "J-03 Trademark fee", amount: 90000 },
      { desc: "J-04 Prepaid insurance", amount: 18000 },
      { desc: "J-06 Sampling expense", amount: 64000 },
      { desc: "J-07 Production labour", amount: 200000 },
      { desc: "J-08 Fashion show", amount: 75000 },
      { desc: "J-14 AP payment", amount: 280000 },
      { desc: "J-16 Payroll", amount: 268000 },
      { desc: "J-17 Rent", amount: 96000 },
      { desc: "J-18 Utilities", amount: 19000 },
      { desc: "J-19 Marketing", amount: 88000 },
      { desc: "J-20 Freight", amount: 24000 },
      { desc: "J-21 Dividends", amount: 50000 },
      { desc: "J-22 Sampling", amount: 46000 },
      { desc: "J-23 Interest", amount: 9600 },
    ],
    balanceSide: "Dr",
  },
  {
    label: "Accounts Receivable",
    period: "March 2024",
    company: "direct-sales",
    theme: "Asset",
    accountName: "Accounts Receivable, Trade",
    accountType: "Asset",
    summary:
      "AR sub-ledger control account for the month. New invoices billed to wholesale customers, offset by cash receipts applied. Closing balance reconciles to AR aging.",
    openingBalance: 184500,
    debits: [
      { desc: "SI-9001 Maple Leaf Retail", amount: 12400 },
      { desc: "SI-9002 Pacific Boutiques", amount: 8650 },
      { desc: "SI-9003 Urban Threads", amount: 4275.5 },
      { desc: "SI-9004 Coastal Department", amount: 22150 },
      { desc: "SI-9005 Northern Apparel", amount: 6320 },
      { desc: "SI-9006 Evergreen Outfitters", amount: 3890.75 },
      { desc: "SI-9007 Maple Leaf Retail", amount: 15800 },
      { desc: "SI-9008 Coastal Department", amount: 18600 },
      { desc: "SI-9009 Urban Threads", amount: 9480 },
      { desc: "SI-9011 Pacific Boutiques", amount: 11250 },
      { desc: "SI-9012 Northern Apparel", amount: 7740 },
    ],
    credits: [
      { desc: "RCT-5510 Cash applied", amount: 12400 },
      { desc: "RCT-5511 Cash applied", amount: 8650 },
      { desc: "RCT-5512 Cash applied", amount: 4275.5 },
      { desc: "RCT-5513 Partial payment", amount: 15000 },
      { desc: "RCT-5514 Cash applied", amount: 22150 },
      { desc: "RCT-5515 Cash applied", amount: 6320 },
      { desc: "RCT-5516 Cash applied", amount: 9480 },
      { desc: "RCT-5517 Cash applied", amount: 3890.75 },
      { desc: "RCT-5518 Cash applied", amount: 11250 },
      { desc: "RCT-5519 Cash applied", amount: 18600 },
      { desc: "RCT-5521 Cash applied", amount: 7740 },
    ],
  },
  {
    label: "Raw Materials Inventory",
    period: "FY 2022",
    company: "fashion-house",
    theme: "Asset",
    accountName: "Raw Materials & Fabric Inventory",
    accountType: "Asset",
    summary:
      "Premium fabrics, silks, embellishments and trim purchases, less amounts consumed into finished goods production during the year. Closing balance carried to balance sheet.",
    debits: [
      { desc: "J-05 Spring collection fabrics", amount: 620000 },
    ],
    credits: [
      { desc: "J-07 Consumed in production", amount: 520000 },
    ],
    balanceSide: "Dr",
  },
  {
    label: "Accounts Payable",
    period: "March 2024",
    company: "foodservice",
    theme: "Liability",
    accountName: "Accounts Payable, Trade",
    accountType: "Liability",
    summary:
      "Vendor payable control account for the month. Daily invoice postings via three-way match, offset by EFT, cheque and online payments scheduled per terms.",
    openingBalance: 142800,
    debits: [
      { desc: "EFT-20451 Milano Textile", amount: 42850 },
      { desc: "EFT-20452 Northern Trims", amount: 7320.45 },
      { desc: "CHQ-10592 Heritage Property", amount: 9600 },
      { desc: "CHQ-10593 Quebec Couriers", amount: 2140.75 },
      { desc: "EFT-20453 Runway Events", amount: 28500 },
      { desc: "ONL-77103 Hydro One", amount: 1880.16 },
      { desc: "EFT-20454 Studio Lighting", amount: 5460 },
      { desc: "EFT-20455 Creative Media", amount: 14200 },
    ],
    credits: [
      { desc: "Sysco INV-44210", amount: 21018 },
      { desc: "Ecolab quarterly", amount: 4746 },
      { desc: "Cool-Tech HVAC", amount: 2034 },
      { desc: "GFS bi-weekly delivery", amount: 25312 },
      { desc: "BC Hydro Feb billing", amount: 4158 },
      { desc: "Sysco weekly", amount: 35256 },
      { desc: "Staples office supplies", amount: 516 },
      { desc: "Milano Textile INV-8841", amount: 42850 },
      { desc: "Northern Trims INV-4419", amount: 7320.45 },
      { desc: "Heritage Property RENT", amount: 9600 },
      { desc: "Quebec Couriers INV-1187", amount: 2140.75 },
      { desc: "Runway Events INV-3092", amount: 28500 },
    ],
  },
  {
    label: "Studio Equipment",
    period: "FY 2022",
    company: "fashion-house",
    theme: "Fixed Asset",
    accountName: "Studio & Showroom Equipment",
    accountType: "Asset",
    summary:
      "Original cost of sewing equipment, fitting room fixtures and POS systems acquired at start-up. Carried at cost, depreciated separately in accumulated depreciation.",
    debits: [
      { desc: "J-02 Initial equipment purchase, mixed payment", amount: 180000 },
    ],
    credits: [],
    balanceSide: "Dr",
  },
  {
    label: "Wholesale Revenue",
    period: "FY 2022",
    company: "fashion-house",
    theme: "Revenue",
    accountName: "Wholesale Revenue",
    accountType: "Revenue",
    summary:
      "Revenue earned on wholesale orders shipped to boutiques and department stores during the year. Recognized on shipment, recorded with corresponding AR debit.",
    debits: [],
    credits: [
      { desc: "J-09 Wholesale orders shipped", amount: 980000 },
    ],
    balanceSide: "Cr",
  },
  {
    label: "Salaries Payable",
    period: "April 2024",
    company: "foodservice",
    theme: "Liability",
    accountName: "Salaries Payable",
    accountType: "Liability",
    summary:
      "Accrued wages owed to staff at the bi-weekly cutoff. Reset when payroll runs settle, then re-accrued at the next period-end working paper.",
    openingBalance: 22000,
    debits: [
      { desc: "PR-05 Apr 12 direct deposit settle", amount: 2400 },
      { desc: "Apr 26 payroll settlement", amount: 65990 },
    ],
    credits: [
      { desc: "PR-01 Apr 12 gross payroll accrual", amount: 65990 },
      { desc: "PR-04 Apr 26 second-half accrual", amount: 26800 },
    ],
  },
  {
    label: "GST/HST Payable",
    period: "Q1 2024",
    company: "fashion-house",
    theme: "Tax",
    accountName: "GST/HST Payable",
    accountType: "Liability",
    summary:
      "Output tax collected on Canadian sales, accumulated through the quarter and netted against input tax credits on the quarterly return.",
    debits: [
      { desc: "Apr 30 Quarterly remittance to CRA", amount: 86380 },
    ],
    credits: [
      { desc: "Jan sales output tax", amount: 40612 },
      { desc: "Feb sales output tax", amount: 42094 },
      { desc: "Mar sales output tax", amount: 44954 },
    ],
  },
  {
    label: "Bank, RBC Operating",
    period: "March 2024",
    company: "direct-sales",
    theme: "Asset",
    accountName: "Bank, RBC Operating",
    accountType: "Asset",
    summary:
      "Bank account control for the month. Daily customer remittances deposited, offset by AP cheque runs, payroll EFTs and standing payments to landlord and utilities.",
    openingBalance: 248200,
    debits: [
      { desc: "Customer EFT deposits (5)", amount: 56870 },
      { desc: "Customer cheque deposits (3)", amount: 19970 },
      { desc: "Customer wire deposits (2)", amount: 40750 },
      { desc: "Online customer payments", amount: 7166.25 },
      { desc: "Bank interest credit", amount: 142 },
    ],
    credits: [
      { desc: "Vendor EFT payments", amount: 98330.45 },
      { desc: "Vendor cheques", amount: 11740.75 },
      { desc: "USD wire payments", amount: 53156.6 },
      { desc: "Online utility payments", amount: 2520.46 },
      { desc: "Bank service charges", amount: 285 },
      { desc: "NSF cheque return", amount: 2480 },
    ],
  },
  {
    label: "Retained Earnings",
    period: "FY 2022",
    company: "fashion-house",
    theme: "Equity",
    accountName: "Retained Earnings",
    accountType: "Equity",
    summary:
      "Retained earnings roll-forward: opening zero (first year of operations), net income closed in from income statement, less dividends declared during the year.",
    debits: [
      { desc: "Closing dividends declared", amount: 50000 },
    ],
    credits: [
      { desc: "Net income closed from income statement", amount: 276675 },
    ],
    balanceSide: "Cr",
  },
];
