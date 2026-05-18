import { Company } from "./work-samples";

export type SampleVariant = {
  label: string;
  period: string;
  company: Company;
  theme: string;
  summary: string;
  process: string;
  file?: string;
  metrics: { label: string; value: string }[];
  table: {
    headers: string[];
    rows: (string | number)[][];
    footer?: (string | number | null)[];
  };
};

export type SampleSeries = {
  slug: string;
  function: string;
  title: string;
  subtitle: string;
  variants: SampleVariant[];
};

// ============================================================================
// MANUAL EXPENSE REPORTS (Foodservice and others)
// ============================================================================
const EXPENSE_REPORT_VARIANTS: SampleVariant[] = [
  {
    label: "March 2024",
    period: "March 2024",
    company: "foodservice",
    theme: "Monthly",
    summary:
      "Processed manual expense reports for non-cardholder staff. Receipts verified against policy, GL coded, routed for departmental approval and scheduled for EFT reimbursement.",
    process:
      "Receipts verified against policy. GL coded by category. Approval routed to department manager. Reimbursement scheduled via EFT.",
    file: "/1_Manual_Expense_Reports_CompassCanada.xlsx",
    metrics: [
      { label: "Total Reports", value: "$1,863.04" },
      { label: "Approved", value: "$1,167.89" },
      { label: "GL Accounts Used", value: "6" },
      { label: "Reports Processed", value: "11" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Dept", "Description", "GL", "Amount", "Status"],
      rows: [
        ["03-Mar", "EXP-1041", "P. Sharma", "Sales", "Client lunch, boutique buyer", "6310", 184.5, "Approved"],
        ["05-Mar", "EXP-1042", "D. Roy", "Logistics", "Mileage, warehouse run", "6320", 97.2, "Approved"],
        ["07-Mar", "EXP-1043", "A. Khan", "Marketing", "Print materials for trade show", "6210", 312.75, "Pending"],
        ["11-Mar", "EXP-1044", "M. Tremblay", "Operations", "Parking, supplier site visit", "6320", 58, "Approved"],
        ["12-Mar", "EXP-1045", "P. Sharma", "Sales", "Hotel, regional conference", "6320", 428.9, "Approved"],
        ["14-Mar", "EXP-1046", "L. O'Connor", "Finance", "Professional membership", "6410", 215, "Query"],
        ["20-Mar", "EXP-1048", "D. Roy", "Logistics", "Safety equipment", "6210", 139.99, "Approved"],
        ["22-Mar", "EXP-1049", "A. Khan", "Marketing", "Campaign stock photos", "6610", 89, "Approved"],
        ["26-Mar", "EXP-1050", "M. Tremblay", "Operations", "Team meeting catering", "6310", 167.4, "Pending"],
        ["28-Mar", "EXP-1051", "S. Mendez", "Design", "Trade publication", "6410", 124, "Approved"],
      ],
      footer: [null, null, null, null, "TOTAL EXPENSE REPORTS", null, 1863.04, null],
    },
  },
  {
    label: "Travel-Heavy Month",
    period: "May 2024",
    company: "foodservice",
    theme: "Travel",
    summary:
      "May saw heavy travel expense activity from sales team road trips and a regional conference. All travel claims required mileage logs and receipts for amounts above $50.",
    process:
      "Mileage rate confirmed at CRA standard ($0.70/km). Hotel folios verified against booking authorizations. Per diem applied where receipts were missing for meals.",
    metrics: [
      { label: "Total Reports", value: "$4,820.45" },
      { label: "Travel Category", value: "$3,895.20" },
      { label: "Reports Processed", value: "14" },
      { label: "Avg Days to Pay", value: "5.4" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Dept", "Description", "GL", "Amount", "Status"],
      rows: [
        ["02-May", "EXP-1062", "P. Sharma", "Sales", "Calgary client meeting flight", "6320", 624.5, "Approved"],
        ["03-May", "EXP-1063", "P. Sharma", "Sales", "Calgary hotel 2 nights", "6320", 412.8, "Approved"],
        ["06-May", "EXP-1064", "D. Roy", "Logistics", "Mileage Vancouver-Kamloops 320km", "6320", 224, "Approved"],
        ["08-May", "EXP-1065", "L. O'Connor", "Finance", "Toronto conference flight", "6320", 542.2, "Approved"],
        ["10-May", "EXP-1066", "L. O'Connor", "Finance", "Toronto hotel 3 nights", "6320", 798, "Approved"],
        ["12-May", "EXP-1067", "L. O'Connor", "Finance", "Conference registration", "6410", 850, "Approved"],
        ["15-May", "EXP-1068", "S. Mendez", "Design", "Seattle fabric show flight", "6320", 489.6, "Approved"],
        ["17-May", "EXP-1069", "S. Mendez", "Design", "Seattle hotel & meals", "6320", 415.2, "Approved"],
        ["21-May", "EXP-1070", "M. Tremblay", "Operations", "Mileage Whistler site visit", "6320", 168, "Approved"],
      ],
      footer: [null, null, null, null, "TOTAL", null, 4524.3, null],
    },
  },
  {
    label: "Marketing Expenses",
    period: "April 2024",
    company: "direct-sales",
    theme: "Marketing",
    summary:
      "Concentrated batch of marketing-related expense reports tied to the spring product launch campaign. Included influencer collaborations, photoshoots and trade show costs.",
    process:
      "Marketing reports cross-referenced against the campaign budget approved in March. All vendor invoices over $1,000 required co-approval from the marketing director.",
    metrics: [
      { label: "Total Reports", value: "$3,284.50" },
      { label: "Marketing GL", value: "$3,012.10" },
      { label: "Reports Processed", value: "9" },
      { label: "Avg Approval Time", value: "1.8 days" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Dept", "Description", "GL", "Amount", "Status"],
      rows: [
        ["02-Apr", "EXP-2101", "A. Khan", "Marketing", "Influencer collaboration fee", "6610", 850, "Approved"],
        ["05-Apr", "EXP-2102", "A. Khan", "Marketing", "Product photoshoot studio", "6610", 1240, "Approved"],
        ["08-Apr", "EXP-2103", "K. Lee", "Marketing", "Social media ad credits", "6610", 480, "Approved"],
        ["12-Apr", "EXP-2104", "A. Khan", "Marketing", "Trade show booth materials", "6610", 320, "Approved"],
        ["15-Apr", "EXP-2105", "K. Lee", "Marketing", "Email marketing platform", "6410", 89, "Approved"],
        ["19-Apr", "EXP-2106", "A. Khan", "Marketing", "Brand swag for events", "6610", 215.5, "Approved"],
        ["22-Apr", "EXP-2107", "K. Lee", "Marketing", "Conference attendee passes", "6320", 90, "Approved"],
      ],
      footer: [null, null, null, null, "TOTAL", null, 3284.5, null],
    },
  },
  {
    label: "Meals & Entertainment",
    period: "February 2024",
    company: "fashion-house",
    theme: "Meals & Ent",
    summary:
      "Concentrated month of client entertainment and team meals tied to buyer market week. All M&E entries flagged for 50% tax deductibility tracking.",
    process:
      "Each meal claim required attendee list and business purpose noted. M&E split: 50% deductible to GL 6310, 50% reclassed to non-deductible expense account for tax reconciliation.",
    metrics: [
      { label: "Total M&E", value: "$2,184.60" },
      { label: "Deductible Portion", value: "$1,092.30" },
      { label: "Reports Processed", value: "12" },
      { label: "Avg Attendees", value: "4.2" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Description", "Attendees", "GL", "Amount", "Status"],
      rows: [
        ["05-Feb", "EXP-3201", "P. Sharma", "Buyer meeting dinner", 5, "6310", 285.4, "Approved"],
        ["07-Feb", "EXP-3202", "S. Mendez", "Designer lunch with mill rep", 3, "6310", 142.8, "Approved"],
        ["10-Feb", "EXP-3203", "P. Sharma", "Team welcome dinner", 8, "6310", 412.6, "Approved"],
        ["14-Feb", "EXP-3204", "M. Tremblay", "Coffee with consultant", 2, "6310", 28.5, "Approved"],
        ["18-Feb", "EXP-3205", "P. Sharma", "VIP client dinner", 6, "6310", 524.8, "Approved"],
        ["22-Feb", "EXP-3206", "S. Mendez", "Atelier celebration lunch", 12, "6310", 380, "Approved"],
        ["27-Feb", "EXP-3207", "L. O'Connor", "Auditor breakfast meeting", 4, "6310", 96.5, "Approved"],
        ["28-Feb", "EXP-3208", "P. Sharma", "Quarterly review dinner", 5, "6310", 314, "Approved"],
      ],
      footer: [null, null, null, "TOTAL M&E", null, null, 2184.6, null],
    },
  },
  {
    label: "Office Supplies Batch",
    period: "January 2024",
    company: "foodservice",
    theme: "Office Supplies",
    summary:
      "Year-start office supplies replenishment across all locations. Stationery, paper goods, kitchen smallwares and PPE for warehouse staff.",
    process:
      "Bulk supplier orders cross-checked against approved annual stationery contract pricing. Capital items above $500 routed to fixed asset register rather than expense.",
    metrics: [
      { label: "Total Supplies", value: "$2,840.20" },
      { label: "Office GL 6210", value: "$1,924.50" },
      { label: "Kitchen Smallwares", value: "$915.70" },
      { label: "Reports Processed", value: "13" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Description", "GL", "Amount", "Status"],
      rows: [
        ["03-Jan", "EXP-4301", "M. Tremblay", "Stationery bulk order, all sites", "6210", 484.6, "Approved"],
        ["05-Jan", "EXP-4302", "K. Lee", "Printer toner cartridges", "6210", 312.8, "Approved"],
        ["09-Jan", "EXP-4303", "M. Tremblay", "Kitchen smallwares replenishment", "6310", 624.5, "Approved"],
        ["12-Jan", "EXP-4304", "D. Roy", "PPE for warehouse staff", "6210", 268, "Approved"],
        ["16-Jan", "EXP-4305", "A. Khan", "Office furniture, desk lamp", "6210", 142.2, "Approved"],
        ["19-Jan", "EXP-4306", "S. Mendez", "Drawing supplies, design team", "6210", 89.6, "Approved"],
        ["23-Jan", "EXP-4307", "M. Tremblay", "Kitchen storage containers", "6310", 291.2, "Approved"],
        ["29-Jan", "EXP-4308", "K. Lee", "Postage and shipping supplies", "6210", 156.4, "Approved"],
      ],
      footer: [null, null, null, "TOTAL", null, 2369.3, null],
    },
  },
  {
    label: "Year-End Cleanup",
    period: "December 2023",
    company: "fashion-house",
    theme: "Year-End",
    summary:
      "December batch including outstanding receipts cleared before year-end and one-time expenses for the holiday gift-with-purchase program.",
    process:
      "Year-end push to clear all pending receipts before books close. Items past 90 days from incurrence dated reviewed and either approved or rejected as policy violations.",
    metrics: [
      { label: "Total Reports", value: "$3,624.80" },
      { label: "Year-End Cleared", value: "$2,840.10" },
      { label: "Reports Processed", value: "16" },
      { label: "Rejected", value: "2" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Description", "GL", "Amount", "Status"],
      rows: [
        ["04-Dec", "EXP-5401", "P. Sharma", "Holiday gift wrap supplies", "6610", 412.8, "Approved"],
        ["08-Dec", "EXP-5402", "A. Khan", "Holiday campaign photoshoot", "6610", 850, "Approved"],
        ["12-Dec", "EXP-5403", "M. Tremblay", "Year-end team dinner", "6310", 624, "Approved"],
        ["15-Dec", "EXP-5404", "L. O'Connor", "External audit prep materials", "6410", 285, "Approved"],
        ["19-Dec", "EXP-5405", "S. Mendez", "Studio December utilities", "6510", 142.8, "Approved"],
        ["22-Dec", "EXP-5406", "D. Roy", "Warehouse year-end supplies", "6210", 318.6, "Approved"],
        ["28-Dec", "EXP-5407", "K. Lee", "Q4 conference reimbursement", "6320", 540.6, "Approved"],
        ["29-Dec", "EXP-5408", "P. Sharma", "Old receipt, Sep 2023 meal", "—", 89.5, "Rejected"],
      ],
      footer: [null, null, null, "TOTAL APPROVED", null, 3174.8, null],
    },
  },
  {
    label: "Corporate Card Recovery",
    period: "June 2024",
    company: "direct-sales",
    theme: "Card Reconciliation",
    summary:
      "Monthly corporate card statement reconciliation, identifying personal charges and routing them through the expense report system for employee reimbursement back to the company.",
    process:
      "Card statement reviewed line by line. Personal charges flagged, employee notified, and recovery invoice created. Reimbursements applied against payroll if not settled within 30 days.",
    metrics: [
      { label: "Total Recovery", value: "$1,248.50" },
      { label: "Personal Charges", value: "8" },
      { label: "Settled Same Month", value: "6" },
      { label: "Carried Forward", value: "$285.40" },
    ],
    table: {
      headers: ["Date", "Card #", "Employee", "Vendor", "Description", "GL", "Amount", "Status"],
      rows: [
        ["02-Jun", "****4128", "P. Sharma", "Amazon", "Personal item, recovered", "RCV", 89.5, "Recovered"],
        ["05-Jun", "****4128", "P. Sharma", "Starbucks", "Personal coffee, weekend", "RCV", 18.4, "Recovered"],
        ["09-Jun", "****6712", "D. Roy", "Costco", "Personal household item", "RCV", 242.8, "Recovered"],
        ["12-Jun", "****6712", "D. Roy", "Save-On Foods", "Personal grocery", "RCV", 124.5, "Recovered"],
        ["18-Jun", "****8245", "A. Khan", "Apple", "iCloud subscription, personal", "RCV", 12.99, "Outstanding"],
        ["22-Jun", "****8245", "A. Khan", "Netflix", "Streaming, personal", "RCV", 16.99, "Outstanding"],
        ["26-Jun", "****1023", "L. O'Connor", "Air Canada", "Spouse ticket, personal", "RCV", 485, "Recovered"],
        ["28-Jun", "****1023", "L. O'Connor", "Hotel.com", "Personal weekend trip", "RCV", 258.4, "Outstanding"],
      ],
      footer: [null, null, null, null, "TOTAL RECOVERY", null, 1248.58, null],
    },
  },
  {
    label: "Training & Conferences",
    period: "September 2023",
    company: "fashion-house",
    theme: "Training",
    summary:
      "Concentrated month of professional development claims as the team attended fall industry conferences and continuing education courses.",
    process:
      "Conference fees verified against pre-approval. CPE credits captured for finance team for licensing requirements. Travel separately tracked for tax-deductibility analysis.",
    metrics: [
      { label: "Total Training", value: "$5,840.60" },
      { label: "Conference Fees", value: "$3,290.00" },
      { label: "Travel Component", value: "$1,840.20" },
      { label: "CPE Credits Tracked", value: "42" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Course / Conference", "GL", "Amount", "Status"],
      rows: [
        ["04-Sep", "EXP-6501", "L. O'Connor", "CPA Canada conference", "6410", 1240, "Approved"],
        ["08-Sep", "EXP-6502", "L. O'Connor", "Conference travel & hotel", "6320", 920, "Approved"],
        ["12-Sep", "EXP-6503", "P. Sharma", "Sales leadership course", "6410", 850, "Approved"],
        ["15-Sep", "EXP-6504", "S. Mendez", "Sustainable fashion seminar", "6410", 425, "Approved"],
        ["19-Sep", "EXP-6505", "K. Lee", "Digital marketing course", "6410", 295, "Approved"],
        ["22-Sep", "EXP-6506", "A. Khan", "Brand strategy workshop", "6410", 480, "Approved"],
        ["26-Sep", "EXP-6507", "M. Tremblay", "Operations excellence cert", "6410", 1320, "Approved"],
        ["29-Sep", "EXP-6508", "D. Roy", "Logistics & supply chain", "6410", 310.6, "Approved"],
      ],
      footer: [null, null, null, "TOTAL TRAINING", null, 5840.6, null],
    },
  },
  {
    label: "Equipment Purchases",
    period: "November 2023",
    company: "foodservice",
    theme: "Equipment",
    summary:
      "Month with multiple small-equipment expense reports for kitchen smallwares and IT peripherals. Items under $500 expensed directly, over $500 capitalized.",
    process:
      "Each claim reviewed against $500 capitalization threshold. Items routed to either expense (GL 6210) or fixed asset register with appropriate depreciation class assigned.",
    metrics: [
      { label: "Total Reports", value: "$4,128.40" },
      { label: "Expensed (<$500)", value: "$1,840.20" },
      { label: "Capitalized", value: "$2,288.20" },
      { label: "Reports Processed", value: "11" },
    ],
    table: {
      headers: ["Date", "Exp. ID", "Employee", "Item", "Cost", "GL", "Amount", "Treatment"],
      rows: [
        ["02-Nov", "EXP-7601", "M. Tremblay", "Kitchen mixer, commercial", 1248, "1610", 1248, "Capitalize"],
        ["05-Nov", "EXP-7602", "K. Lee", "Office chair ergonomic", 285, "6210", 285, "Expense"],
        ["08-Nov", "EXP-7603", "M. Tremblay", "Kitchen knife set", 124.5, "6210", 124.5, "Expense"],
        ["12-Nov", "EXP-7604", "L. O'Connor", "External monitor 27in", 425, "6210", 425, "Expense"],
        ["15-Nov", "EXP-7605", "D. Roy", "Pallet jack manual", 685, "1610", 685, "Capitalize"],
        ["19-Nov", "EXP-7606", "A. Khan", "Webcam and ring light", 142.8, "6210", 142.8, "Expense"],
        ["22-Nov", "EXP-7607", "M. Tremblay", "Refrigeration thermometers", 89.6, "6210", 89.6, "Expense"],
        ["26-Nov", "EXP-7608", "K. Lee", "Tablet for floor staff", 355.2, "1610", 355.2, "Capitalize"],
        ["29-Nov", "EXP-7609", "S. Mendez", "Drawing tablet, design", 412.8, "6210", 412.8, "Expense"],
      ],
      footer: [null, null, null, null, null, "TOTAL", 3767.7, null],
    },
  },
  {
    label: "Quarterly Summary",
    period: "Q1 2024",
    company: "foodservice",
    theme: "Quarterly Roll-Up",
    summary:
      "Quarterly summary roll-up of expense reports across the three monthly cycles. Used for budget variance analysis and category trend reporting to management.",
    process:
      "Monthly totals consolidated into category trend. Variance calculated against budget. Notable items called out in monthly management report along with year-over-year comparison.",
    metrics: [
      { label: "Q1 Total", value: "$8,420.30" },
      { label: "vs Budget", value: "-3.2%" },
      { label: "Reports Processed", value: "38" },
      { label: "Categories", value: "9" },
    ],
    table: {
      headers: ["Category", "GL", "Jan", "Feb", "Mar", "Q1 Total", "Budget", "Variance"],
      rows: [
        ["Travel", "6320", 920, 1248, 584.1, 2752.1, 3000, "(247.9)"],
        ["Meals & Ent.", "6310", 285, 524, 351.9, 1160.9, 1200, "(39.1)"],
        ["Office Supplies", "6210", 480, 312, 312.75, 1104.75, 900, 204.75],
        ["Advertising", "6610", 0, 0, 89, 89, 400, "(311)"],
        ["Freight", "6510", 142, 96.5, 46.3, 284.8, 300, "(15.2)"],
        ["Dues & Subs.", "6410", 215, 320, 339, 874, 800, 74],
        ["Other", "—", 0, 0, 167.4, 167.4, 200, "(32.6)"],
      ],
      footer: [null, null, 2042, 2500.5, 1890.45, 6432.95, 6800, "(367.05)"],
    },
  },
];

// ============================================================================
// OUTGOING PAYMENTS REGISTER
// ============================================================================
const PAYMENTS_VARIANTS: SampleVariant[] = [
  {
    label: "March 2024",
    period: "March 2024",
    company: "fashion-house",
    theme: "Monthly",
    summary:
      "Maintained the outgoing payments register across four payment methods and two currencies. All payments matched to approved invoices through a three-way match before release.",
    process:
      "Three-way match against PO, goods receipt and invoice. USD wires converted at daily rate. Cheques logged for positive-pay reconciliation.",
    file: "/2_Outgoing_Payments_Register_HurNusrat.xlsx",
    metrics: [
      { label: "Total Disbursed", value: "$165,748" },
      { label: "EFT", value: "$98,330" },
      { label: "Wire (USD)", value: "$53,157" },
      { label: "Cheque + Online", value: "$14,261" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Vendor", "Method", "Currency", "Doc Amt", "CAD Amt"],
      rows: [
        ["04-Mar", "EFT-20451", "Milano Textile Mills", "EFT", "CAD", 42850, 42850],
        ["06-Mar", "WIR-00318", "Atelier Silk Importers SA", "Wire", "USD", 18600, 25184.4],
        ["08-Mar", "CHQ-10592", "Heritage Property Mgmt", "Cheque", "CAD", 9600, 9600],
        ["11-Mar", "EFT-20452", "Northern Trims & Notions", "EFT", "CAD", 7320.45, 7320.45],
        ["14-Mar", "WIR-00319", "Paris Embellishment Co.", "Wire", "USD", 11250, 15277.5],
        ["18-Mar", "EFT-20453", "Runway Events Group", "EFT", "CAD", 28500, 28500],
        ["22-Mar", "ONL-77104", "Bell Canada", "Online", "CAD", 640.3, 640.3],
        ["25-Mar", "EFT-20454", "Studio Lighting Solutions", "EFT", "CAD", 5460, 5460],
        ["27-Mar", "WIR-00320", "Lombardia Leather Goods", "Wire", "USD", 9400, 12694.7],
        ["29-Mar", "EFT-20455", "Creative Media Partners", "EFT", "CAD", 14200, 14200],
      ],
      footer: [null, null, "TOTAL DISBURSED", null, null, null, 165748.26],
    },
  },
  {
    label: "EFT Cycle",
    period: "April 2024",
    company: "fashion-house",
    theme: "EFT Only",
    summary:
      "EFT-only payment cycle for approved domestic invoices. Bi-weekly run processed through RBC online banking, with positive-pay file uploaded simultaneously.",
    process:
      "Vendor banking details verified against vendor master before each run. EFT batch totals reconciled to AP aging before release.",
    metrics: [
      { label: "Total EFT", value: "$84,260" },
      { label: "Vendors Paid", value: "12" },
      { label: "Avg Days to Pay", value: "32" },
      { label: "Discount Captured", value: "$1,840" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Vendor", "Invoice", "Terms", "Amount", "Status"],
      rows: [
        ["08-Apr", "EFT-20461", "Milano Textile Mills", "INV-8920", "Net 30", 18400, "Cleared"],
        ["08-Apr", "EFT-20462", "Northern Trims", "INV-4501", "2/10 Net 30", 6428.4, "Cleared"],
        ["08-Apr", "EFT-20463", "Quebec Couriers", "INV-1245", "Net 15", 2840, "Cleared"],
        ["08-Apr", "EFT-20464", "Hydro One", "UTIL-0424", "Net 30", 1920.4, "Cleared"],
        ["22-Apr", "EFT-20465", "Heritage Property", "RENT-0424", "Net 1", 9600, "Cleared"],
        ["22-Apr", "EFT-20466", "Creative Media", "INV-6715", "Net 30", 14800, "Cleared"],
        ["22-Apr", "EFT-20467", "Runway Events", "INV-3185", "Net 30", 24000, "Cleared"],
        ["22-Apr", "EFT-20468", "Studio Lighting", "INV-7820", "Net 30", 6271.2, "Cleared"],
      ],
      footer: [null, null, "TOTAL", null, null, 84260, null],
    },
  },
  {
    label: "USD Wire Batch",
    period: "May 2024",
    company: "fashion-house",
    theme: "Foreign Currency",
    summary:
      "USD wire payments to international suppliers in Italy, France and the United States. Each wire booked at the daily CAD/USD rate; realized FX recorded at settlement.",
    process:
      "Wires released through RBC business online with dual authorization. MT103 confirmation captured and posted against the vendor invoice. Daily spot rate captured from Bank of Canada.",
    metrics: [
      { label: "Total Wires (CAD)", value: "$98,420" },
      { label: "USD Sent", value: "$72,400" },
      { label: "Avg FX Rate", value: "1.359" },
      { label: "Wires Released", value: "6" },
    ],
    table: {
      headers: ["Pay Date", "Wire Ref", "Vendor", "Country", "USD Amt", "FX Rate", "CAD Amt", "Status"],
      rows: [
        ["02-May", "WIR-00328", "Atelier Silk Importers SA", "France", 21500, 1.358, 29197, "Cleared"],
        ["08-May", "WIR-00329", "Lombardia Leather Goods", "Italy", 14200, 1.362, 19340.4, "Cleared"],
        ["14-May", "WIR-00330", "Paris Embellishment Co.", "France", 9800, 1.355, 13279, "Cleared"],
        ["18-May", "WIR-00331", "NY Brand Consultants", "USA", 8500, 1.36, 11560, "Cleared"],
        ["24-May", "WIR-00332", "Milano Showroom Rep", "Italy", 12400, 1.358, 16839.2, "Cleared"],
        ["30-May", "WIR-00333", "Atelier Silk Importers SA", "France", 6000, 1.367, 8202, "Cleared"],
      ],
      footer: [null, null, null, "TOTAL", 72400, null, 98417.6, null],
    },
  },
  {
    label: "Cheque Run",
    period: "February 2024",
    company: "fashion-house",
    theme: "Cheques",
    summary:
      "Monthly cheque run for vendors without EFT setup, plus refund cheques to customers. Each cheque logged for positive-pay bank reconciliation.",
    process:
      "Cheque sequence numbers verified against bank-issued range. Voided cheques retained and stamped. Stale-dated cheques over 6 months reversed and reissued.",
    metrics: [
      { label: "Total Cheques", value: "$24,180" },
      { label: "Cheques Issued", value: "9" },
      { label: "Voided", value: "1" },
      { label: "Positive-Pay Match", value: "100%" },
    ],
    table: {
      headers: ["Pay Date", "Cheque #", "Payee", "Type", "Memo", "Amount", "Status"],
      rows: [
        ["02-Feb", "10571", "Heritage Property Mgmt", "Vendor", "Feb rent", 9600, "Cleared"],
        ["06-Feb", "10572", "Quebec Couriers", "Vendor", "INV-1198", 1840, "Cleared"],
        ["12-Feb", "10573", "City of Burnaby", "Government", "Business license", 425, "Cleared"],
        ["12-Feb", "10574", "VOID", "—", "Misprint, voided", 0, "Voided"],
        ["18-Feb", "10575", "Boutique LaMode", "Customer", "Refund SI-8842", 1240, "Cleared"],
        ["22-Feb", "10576", "Studio Lighting", "Vendor", "INV-7625", 5460, "Cleared"],
        ["26-Feb", "10577", "Carter Insurance", "Vendor", "Annual premium", 4200, "Cleared"],
        ["28-Feb", "10578", "Atelier Sample Co.", "Vendor", "Sample work", 1415, "Outstanding"],
      ],
      footer: [null, null, null, null, "TOTAL", 24180, null],
    },
  },
  {
    label: "Year-End Vendor Run",
    period: "December 2023",
    company: "fashion-house",
    theme: "Year-End",
    summary:
      "Year-end vendor payment run to clear outstanding payables before December 31. Coordinated with year-end accruals to ensure expenses recorded in correct period.",
    process:
      "All approved invoices dated on or before December 31 paid in this run. Vendor statements requested for top 20 vendors to confirm zero year-end balance where possible.",
    metrics: [
      { label: "Total Disbursed", value: "$248,420" },
      { label: "Vendors Paid", value: "28" },
      { label: "Avg Payment", value: "$8,872" },
      { label: "Zero-Balance Achieved", value: "18 of 28" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Vendor", "Method", "Invoice", "Amount", "Status"],
      rows: [
        ["18-Dec", "EFT-20410", "Milano Textile Mills", "EFT", "Multiple", 32400, "Cleared"],
        ["18-Dec", "EFT-20411", "Atelier Silk Importers", "Wire", "Multiple USD", 28160, "Cleared"],
        ["20-Dec", "EFT-20412", "Heritage Property", "EFT", "Dec rent", 9600, "Cleared"],
        ["20-Dec", "EFT-20413", "Northern Trims", "EFT", "Q4 invoices", 18420, "Cleared"],
        ["22-Dec", "EFT-20414", "Runway Events", "EFT", "Year-end show", 38500, "Cleared"],
        ["22-Dec", "WIR-00310", "Paris Embellishment", "Wire", "USD invoices", 22480, "Cleared"],
        ["27-Dec", "EFT-20415", "Creative Media", "EFT", "Q4 campaigns", 28400, "Cleared"],
        ["27-Dec", "EFT-20416", "Studio Lighting", "EFT", "Dec install", 12180, "Cleared"],
        ["28-Dec", "EFT-20417", "Quebec Couriers", "EFT", "Q4 shipping", 8240, "Cleared"],
        ["29-Dec", "ONL-77115", "Hydro/Bell/Other", "Online", "Utilities", 6240, "Cleared"],
        ["29-Dec", "CHQ-10590", "Misc small vendors", "Cheque", "Various", 43800, "Cleared"],
      ],
      footer: [null, null, "TOTAL YEAR-END RUN", null, null, 248420, null],
    },
  },
  {
    label: "Foodservice Payments",
    period: "March 2024",
    company: "foodservice",
    theme: "Vendor",
    summary:
      "Foodservice operator vendor payments concentrated in food suppliers (Sysco, GFS) and utilities. Higher payment frequency due to weekly food deliveries.",
    process:
      "Food suppliers paid weekly per invoice terms (Net 7). All other vendors paid on standard 30-day cycle from invoice receipt.",
    metrics: [
      { label: "Total Disbursed", value: "$185,420" },
      { label: "Food Suppliers", value: "$124,840" },
      { label: "Utilities", value: "$8,420" },
      { label: "Other Vendors", value: "$52,160" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Vendor", "Method", "Invoice", "Amount", "Status"],
      rows: [
        ["04-Mar", "EFT-30401", "Sysco Foods", "EFT", "Weekly", 28400, "Cleared"],
        ["07-Mar", "EFT-30402", "GFS Wholesale", "EFT", "Bi-weekly", 22180, "Cleared"],
        ["11-Mar", "EFT-30403", "Sysco Foods", "EFT", "Weekly", 31200, "Cleared"],
        ["14-Mar", "EFT-30404", "Ecolab", "EFT", "Quarterly", 4746, "Cleared"],
        ["18-Mar", "EFT-30405", "Sysco Foods", "EFT", "Weekly", 24800, "Cleared"],
        ["21-Mar", "EFT-30406", "GFS Wholesale", "EFT", "Bi-weekly", 18260, "Cleared"],
        ["25-Mar", "EFT-30407", "Sysco Foods", "EFT", "Weekly", 26800, "Cleared"],
        ["27-Mar", "ONL-30408", "BC Hydro", "Online", "Monthly", 4158, "Cleared"],
        ["28-Mar", "ONL-30409", "Fortis BC", "Online", "Monthly", 2880, "Cleared"],
        ["29-Mar", "CHQ-30410", "Cool-Tech HVAC", "Cheque", "Service", 2034, "Cleared"],
        ["29-Mar", "EFT-30411", "Staples", "EFT", "Office", 516, "Cleared"],
      ],
      footer: [null, null, "TOTAL", null, null, 165974, null],
    },
  },
  {
    label: "Direct Sales Payments",
    period: "April 2024",
    company: "direct-sales",
    theme: "Vendor",
    summary:
      "Direct sales operation payment run including advertising vendors, sales commission payouts to independent reps, and standard operating vendors.",
    process:
      "Commission payouts calculated from monthly commission schedule. Independent reps paid via EFT on the 15th of each month for previous month's earnings.",
    metrics: [
      { label: "Total Disbursed", value: "$92,840" },
      { label: "Commissions", value: "$36,400" },
      { label: "Advertising", value: "$22,400" },
      { label: "Other Vendors", value: "$34,040" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Payee", "Type", "Memo", "Amount", "Status"],
      rows: [
        ["05-Apr", "EFT-40401", "Meta Ads", "Vendor", "March ad spend", 8400, "Cleared"],
        ["08-Apr", "EFT-40402", "Google Ads", "Vendor", "March ad spend", 6240, "Cleared"],
        ["12-Apr", "EFT-40403", "Yelp Ads", "Vendor", "Annual contract", 4800, "Cleared"],
        ["15-Apr", "EFT-40404", "Rep Comm Pool", "Commission", "March payouts", 36400, "Cleared"],
        ["18-Apr", "EFT-40405", "TELUS Business", "Vendor", "Phone & internet", 1240, "Cleared"],
        ["22-Apr", "EFT-40406", "Heritage Property", "Vendor", "April rent", 8000, "Cleared"],
        ["25-Apr", "ONL-40407", "BC Hydro", "Utility", "April", 1840, "Cleared"],
        ["28-Apr", "EFT-40408", "Salesforce", "SaaS", "Annual license", 12480, "Cleared"],
        ["29-Apr", "EFT-40409", "Office Pro", "Vendor", "Cleaning", 1240, "Cleared"],
        ["30-Apr", "CHQ-40410", "Office supplies", "Vendor", "Misc", 12200, "Cleared"],
      ],
      footer: [null, null, "TOTAL", null, null, 92840, null],
    },
  },
  {
    label: "Online Banking Run",
    period: "June 2024",
    company: "foodservice",
    theme: "Online",
    summary:
      "Online utility and recurring vendor payments processed through banking portal. Includes BC Hydro, telecom and SaaS subscriptions.",
    process:
      "Auto-pay setups verified against authorized vendor list quarterly. Manual online payments scheduled for vendors without recurring payment authorization.",
    metrics: [
      { label: "Total Online", value: "$16,840" },
      { label: "Auto-Pay", value: "$8,420" },
      { label: "Manual", value: "$8,420" },
      { label: "Payments Made", value: "14" },
    ],
    table: {
      headers: ["Pay Date", "Online Ref", "Vendor", "Service", "Amount", "Type", "Status"],
      rows: [
        ["02-Jun", "ONL-50601", "BC Hydro", "Electricity", 4158, "Auto-pay", "Cleared"],
        ["02-Jun", "ONL-50602", "Fortis BC", "Natural Gas", 2880, "Auto-pay", "Cleared"],
        ["05-Jun", "ONL-50603", "TELUS", "Phone & internet", 1248, "Manual", "Cleared"],
        ["08-Jun", "ONL-50604", "Bell Canada", "Mobile fleet", 940, "Manual", "Cleared"],
        ["12-Jun", "ONL-50605", "Microsoft 365", "SaaS", 480, "Auto-pay", "Cleared"],
        ["15-Jun", "ONL-50606", "QuickBooks Online", "SaaS", 240, "Auto-pay", "Cleared"],
        ["18-Jun", "ONL-50607", "Adobe CC", "Software", 320, "Auto-pay", "Cleared"],
        ["22-Jun", "ONL-50608", "Insurance Co.", "Liability prem.", 4800, "Manual", "Cleared"],
        ["26-Jun", "ONL-50609", "Workers Comp", "WCB premium", 1280, "Manual", "Cleared"],
        ["29-Jun", "ONL-50610", "Toast POS", "POS subscription", 494, "Auto-pay", "Cleared"],
      ],
      footer: [null, null, null, "TOTAL", 16840, null, null],
    },
  },
  {
    label: "Capital Asset Payments",
    period: "August 2023",
    company: "fashion-house",
    theme: "Capex",
    summary:
      "Concentrated month of capital asset purchases for studio expansion: new sewing equipment, retail fixtures, and leasehold improvements at the flagship boutique.",
    process:
      "Each capex payment matched against approved capital expenditure request and fixed asset register entry. Vendor warranties documented in capex file.",
    metrics: [
      { label: "Total Capex", value: "$84,200" },
      { label: "Equipment", value: "$48,400" },
      { label: "Leaseholds", value: "$28,400" },
      { label: "Other Capex", value: "$7,400" },
    ],
    table: {
      headers: ["Pay Date", "Payment Ref", "Vendor", "Asset Class", "Description", "Amount", "Status"],
      rows: [
        ["04-Aug", "EFT-60801", "Industrial Sewing Co.", "Equipment", "5 new sewing machines", 24800, "Cleared"],
        ["08-Aug", "EFT-60802", "Form & Fixture", "Equipment", "Showroom fixtures", 12400, "Cleared"],
        ["12-Aug", "EFT-60803", "Westside Construction", "Leasehold", "Flagship reno phase 1", 18400, "Cleared"],
        ["18-Aug", "WIR-60804", "Milano Equipment", "Equipment", "Embroidery machine USD", 11200, "Cleared"],
        ["22-Aug", "EFT-60805", "Display Plus", "Leasehold", "Window display upgrade", 10000, "Cleared"],
        ["26-Aug", "EFT-60806", "Tech Solutions", "Other", "POS system upgrade", 5400, "Cleared"],
        ["29-Aug", "EFT-60807", "Acoustic Pros", "Other", "Studio sound system", 2000, "Cleared"],
      ],
      footer: [null, null, null, null, "TOTAL CAPEX", 84200, null],
    },
  },
  {
    label: "Refund Cheques",
    period: "July 2024",
    company: "direct-sales",
    theme: "Customer Refunds",
    summary:
      "Customer refund cheques and credit memos issued for product returns, allowances and pricing adjustments. Each refund traced back to original sales invoice.",
    process:
      "Refund authorized by sales manager and reviewed against return policy. Cheque issued and AR sub-ledger adjusted in same posting cycle.",
    metrics: [
      { label: "Total Refunds", value: "$18,420" },
      { label: "Product Returns", value: "$12,400" },
      { label: "Price Adjustments", value: "$4,820" },
      { label: "Allowances", value: "$1,200" },
    ],
    table: {
      headers: ["Pay Date", "Cheque #", "Customer", "Original Invoice", "Reason", "Amount", "Status"],
      rows: [
        ["03-Jul", "20801", "Maple Leaf Retail", "SI-9001", "Damaged shipment", 2400, "Cleared"],
        ["08-Jul", "20802", "Pacific Boutiques", "SI-9015", "Wrong colourway", 1840, "Cleared"],
        ["12-Jul", "20803", "Coastal Department", "SI-9022", "Late shipment penalty", 1200, "Cleared"],
        ["15-Jul", "20804", "Urban Threads", "SI-9028", "Bulk discount missed", 2820, "Cleared"],
        ["18-Jul", "20805", "Northern Apparel", "SI-9034", "Return, off-season", 4200, "Cleared"],
        ["22-Jul", "20806", "Evergreen Outfitters", "SI-9041", "Quality dispute", 3120, "Cleared"],
        ["26-Jul", "20807", "Boutique LaMode", "SI-9048", "Price-match adjustment", 2000, "Outstanding"],
        ["29-Jul", "20808", "West Coast Style", "SI-9052", "Cancelled order deposit", 840, "Cleared"],
      ],
      footer: [null, null, null, null, "TOTAL REFUNDS", 18420, null],
    },
  },
];

// The remaining 5 sample series are declared below in this file.
// SAMPLE_SERIES is assembled after all arrays are defined.

// ============================================================================
// CASH RECEIPTS APPLICATION (Direct Sales)
// ============================================================================
const CASH_RECEIPTS: SampleVariant[] = [
  {
    label: "March 2024",
    period: "March 2024",
    company: "direct-sales",
    theme: "Monthly",
    summary:
      "Posted daily customer receipts and applied them against the AR sub-ledger. Partial payments left open balances on the original invoice. Unapplied credits cleared on the customer's next invoice.",
    process:
      "Receipts deposited daily, applied to oldest open invoice unless remittance advice specifies otherwise. Variance reconciled to zero on every application.",
    file: "/3_Cash_Receipts_Application_GoSales.xlsx",
    metrics: [
      { label: "Total Receipts", value: "$124,756" },
      { label: "Variance", value: "$0" },
      { label: "Customers", value: "6" },
      { label: "Applications", value: "12" },
    ],
    table: {
      headers: ["Date", "Receipt #", "Customer", "Method", "Invoice", "Received", "Applied", "Status"],
      rows: [
        ["04-Mar", "RCT-5510", "Maple Leaf Retail", "EFT", "SI-9001", 12400, 12400, "Fully Applied"],
        ["06-Mar", "RCT-5511", "Pacific Boutiques", "Cheque", "SI-9002", 8650, 8650, "Fully Applied"],
        ["07-Mar", "RCT-5512", "Urban Threads", "Online", "SI-9003", 4275.5, 4275.5, "Fully Applied"],
        ["11-Mar", "RCT-5513", "Maple Leaf Retail", "EFT", "SI-9007", 15000, 15000, "Partial"],
        ["12-Mar", "RCT-5514", "Coastal Department", "Wire", "SI-9004", 22150, 22150, "Fully Applied"],
        ["14-Mar", "RCT-5515", "Northern Apparel", "Cheque", "SI-9005", 6320, 6320, "Fully Applied"],
        ["18-Mar", "RCT-5516", "Urban Threads", "EFT", "SI-9009", 9480, 9480, "Fully Applied"],
        ["22-Mar", "RCT-5518", "Pacific Boutiques", "EFT", "SI-9011", 11250, 11250, "Fully Applied"],
        ["25-Mar", "RCT-5519", "Coastal Department", "Wire", "SI-9008", 18600, 18600, "Fully Applied"],
        ["29-Mar", "RCT-5521", "Northern Apparel", "EFT", "SI-9012", 7740, 7740, "Fully Applied"],
      ],
      footer: [null, null, "TOTAL RECEIPTS", null, null, 124756.25, 124756.25, null],
    },
  },
  {
    label: "Lockbox Batch",
    period: "April 2024",
    company: "direct-sales",
    theme: "Lockbox",
    summary:
      "Lockbox batch from the bank's remittance processing service. Auto-imported and matched against open invoices using customer remittance advices.",
    process:
      "Bank lockbox file imported each morning. Auto-match by invoice number; manual application for short payments or unidentified deposits.",
    metrics: [
      { label: "Lockbox Volume", value: "$184,200" },
      { label: "Auto-Match Rate", value: "92%" },
      { label: "Receipts", value: "24" },
      { label: "Manual Match", value: "2" },
    ],
    table: {
      headers: ["Date", "Lockbox Ref", "Customer", "Invoice", "Amount", "Match", "Status"],
      rows: [
        ["02-Apr", "LBX-44201", "Maple Leaf Retail", "SI-9061", 18400, "Auto", "Applied"],
        ["02-Apr", "LBX-44202", "Pacific Boutiques", "SI-9062", 9240, "Auto", "Applied"],
        ["05-Apr", "LBX-44210", "Urban Threads", "SI-9063", 6420, "Auto", "Applied"],
        ["08-Apr", "LBX-44218", "Coastal Department", "SI-9064", 24800, "Auto", "Applied"],
        ["12-Apr", "LBX-44225", "Northern Apparel", "SI-9070", 8400, "Auto", "Applied"],
        ["15-Apr", "LBX-44232", "Evergreen Outfitters", "SI-9071", 4200, "Manual", "Applied"],
        ["18-Apr", "LBX-44240", "Maple Leaf Retail", "SI-9075", 16800, "Auto", "Applied"],
        ["22-Apr", "LBX-44247", "Coastal Department", "SI-9078", 28400, "Auto", "Applied"],
        ["26-Apr", "LBX-44254", "Pacific Boutiques", "SI-9082", 12400, "Auto", "Applied"],
        ["29-Apr", "LBX-44262", "Urban Threads", "SI-9085", 8420, "Manual", "Applied"],
      ],
      footer: [null, null, null, "TOTAL", 137480, null, null],
    },
  },
  {
    label: "Partial Payments",
    period: "May 2024",
    company: "direct-sales",
    theme: "Partial",
    summary:
      "Concentrated batch of partial payments where customers paid less than invoiced amounts. Remaining balances kept open on AR aging for follow-up.",
    process:
      "Partial payment applied against original invoice; balance flagged in AR aging report sent to credit collections team weekly.",
    metrics: [
      { label: "Partial Receipts", value: "$48,200" },
      { label: "Remaining AR", value: "$22,400" },
      { label: "Partial Cases", value: "8" },
      { label: "Avg Pay %", value: "68%" },
    ],
    table: {
      headers: ["Date", "Receipt #", "Customer", "Invoice", "Invoiced", "Paid", "Balance"],
      rows: [
        ["03-May", "RCT-5601", "Maple Leaf Retail", "SI-9088", 12400, 8000, 4400],
        ["07-May", "RCT-5602", "Pacific Boutiques", "SI-9091", 8650, 6000, 2650],
        ["10-May", "RCT-5603", "Urban Threads", "SI-9095", 4275, 3000, 1275],
        ["14-May", "RCT-5604", "Coastal Department", "SI-9098", 15800, 12000, 3800],
        ["17-May", "RCT-5605", "Northern Apparel", "SI-9101", 6320, 4500, 1820],
        ["22-May", "RCT-5606", "Evergreen Outfitters", "SI-9104", 9200, 6500, 2700],
        ["26-May", "RCT-5607", "Maple Leaf Retail", "SI-9107", 14800, 10000, 4800],
        ["29-May", "RCT-5608", "Pacific Boutiques", "SI-9112", 3155, 2200, 955],
      ],
      footer: [null, null, null, "TOTAL", 74600, 52200, 22400],
    },
  },
  {
    label: "Wire Transfer Batch",
    period: "June 2024",
    company: "direct-sales",
    theme: "Wire",
    summary:
      "International customer wire transfers received in USD. Converted at daily spot rate; FX gain/loss recorded against the original invoice CAD value.",
    process:
      "Wires verified by bank reference and customer remittance advice. CAD-translated value applied to invoice; FX variance posted to FX gain/loss account.",
    metrics: [
      { label: "Wire Receipts USD", value: "$84,200" },
      { label: "CAD Equivalent", value: "$114,400" },
      { label: "FX Gain", value: "$1,240" },
      { label: "Wires Received", value: "5" },
    ],
    table: {
      headers: ["Date", "Wire Ref", "Customer", "Country", "USD Amt", "FX Rate", "CAD Amt"],
      rows: [
        ["05-Jun", "WIR-IN-441", "Seattle Threads", "USA", 18400, 1.362, 25060.8],
        ["10-Jun", "WIR-IN-442", "Portland Outfitters", "USA", 12200, 1.358, 16567.6],
        ["15-Jun", "WIR-IN-443", "Bay Area Style", "USA", 28400, 1.36, 38624],
        ["22-Jun", "WIR-IN-444", "Seattle Threads", "USA", 14800, 1.365, 20202],
        ["28-Jun", "WIR-IN-445", "LA Boutique", "USA", 10400, 1.358, 14123.2],
      ],
      footer: [null, null, null, "TOTAL", 84200, null, 114577.6],
    },
  },
  {
    label: "Online Payments",
    period: "April 2024",
    company: "direct-sales",
    theme: "Online",
    summary:
      "Online customer payments via the merchant payment portal. Auto-posted via API integration with credit card and ACH gateways.",
    process:
      "Payment gateway settlement file imported daily. Fees deducted automatically and posted to bank charges expense; net receipt applied to customer account.",
    metrics: [
      { label: "Gross Receipts", value: "$42,800" },
      { label: "Gateway Fees", value: "$1,240" },
      { label: "Net Applied", value: "$41,560" },
      { label: "Transactions", value: "18" },
    ],
    table: {
      headers: ["Date", "Gateway Ref", "Customer", "Method", "Gross", "Fee", "Net"],
      rows: [
        ["02-Apr", "STR-99001", "Online Cust A", "Visa", 1240, 36, 1204],
        ["04-Apr", "STR-99008", "Online Cust B", "Mastercard", 850, 25, 825],
        ["08-Apr", "STR-99015", "Online Cust C", "Visa", 4200, 122, 4078],
        ["12-Apr", "ACH-44001", "Maple Leaf", "ACH", 8400, 0, 8400],
        ["15-Apr", "STR-99022", "Online Cust D", "Amex", 2800, 84, 2716],
        ["18-Apr", "STR-99030", "Online Cust E", "Visa", 1840, 53, 1787],
        ["22-Apr", "STR-99036", "Online Cust F", "Mastercard", 3200, 93, 3107],
        ["25-Apr", "ACH-44012", "Pacific Boutiques", "ACH", 12400, 0, 12400],
        ["29-Apr", "STR-99044", "Online Cust G", "Visa", 7840, 227, 7613],
      ],
      footer: [null, null, null, "TOTAL", 42800, 640, 42160],
    },
  },
  {
    label: "Unapplied Credits",
    period: "March 2024",
    company: "direct-sales",
    theme: "Unapplied",
    summary:
      "Unapplied customer credits sitting in customer deposits, including duplicate payments, advance deposits and overpayments. Cleared against next invoice or refunded.",
    process:
      "Monthly review of customer deposit balances. Credits over 90 days old escalated for refund processing if no upcoming activity expected.",
    metrics: [
      { label: "Unapplied Credits", value: "$18,420" },
      { label: "Customers", value: "7" },
      { label: "Cleared This Month", value: "$8,200" },
      { label: "Refunded", value: "$2,400" },
    ],
    table: {
      headers: ["Date", "Receipt #", "Customer", "Reason", "Amount", "Status", "Disposition"],
      rows: [
        ["02-Mar", "RCT-5450", "Maple Leaf", "Duplicate payment", 4200, "Cleared", "Next invoice"],
        ["08-Mar", "RCT-5455", "Pacific Boutiques", "Deposit on PO", 2400, "Open", "Hold"],
        ["12-Mar", "RCT-5462", "Urban Threads", "Overpayment SI-8990", 425, "Cleared", "Next invoice"],
        ["15-Mar", "RCT-5468", "Coastal Department", "Advance deposit", 3500, "Open", "Hold"],
        ["19-Mar", "RCT-5474", "Northern Apparel", "Refund requested", 2400, "Closed", "Refund issued"],
        ["22-Mar", "RCT-5481", "Evergreen Outfitters", "Trade discount", 1240, "Cleared", "Next invoice"],
        ["27-Mar", "RCT-5488", "Maple Leaf", "Duplicate payment", 4255, "Cleared", "Next invoice"],
      ],
      footer: [null, null, null, "TOTAL", 18420, null, null],
    },
  },
  {
    label: "Year-End Receipts",
    period: "December 2023",
    company: "direct-sales",
    theme: "Year-End",
    summary:
      "Year-end push to collect outstanding receivables and clean up customer accounts. Aggressive collection followed up with credit-hold escalations.",
    process:
      "Outstanding AR over 60 days escalated to credit manager. Customers placed on credit hold until balances cleared. Bad debt write-offs reviewed before December 31.",
    metrics: [
      { label: "Total Collected", value: "$348,200" },
      { label: "Aging > 60 days", value: "Reduced 45%" },
      { label: "Write-Offs", value: "$12,400" },
      { label: "Credit Holds Lifted", value: "8" },
    ],
    table: {
      headers: ["Date", "Receipt #", "Customer", "Days Past Due", "Amount", "Status"],
      rows: [
        ["18-Dec", "RCT-5701", "Maple Leaf Retail", 32, 18400, "Applied"],
        ["20-Dec", "RCT-5705", "Pacific Boutiques", 78, 12400, "Applied"],
        ["20-Dec", "RCT-5708", "Urban Threads", 45, 8400, "Applied"],
        ["22-Dec", "RCT-5712", "Coastal Department", 95, 24800, "Applied"],
        ["22-Dec", "RCT-5716", "Northern Apparel", 22, 6800, "Applied"],
        ["27-Dec", "RCT-5722", "Evergreen Outfitters", 110, 4200, "Applied"],
        ["27-Dec", "RCT-5728", "Maple Leaf Retail", 18, 28400, "Applied"],
        ["28-Dec", "WO-401", "Slow Pay Co.", 365, 12400, "Written Off"],
        ["29-Dec", "RCT-5734", "Boutique LaMode", 42, 18420, "Applied"],
      ],
      footer: [null, null, null, "TOTAL", 134220, null],
    },
  },
  {
    label: "NSF Recovery",
    period: "May 2024",
    company: "direct-sales",
    theme: "NSF Cheques",
    summary:
      "NSF cheques returned by the bank and customer recovery process. Each NSF reversed from receipts and re-billed to customer with bank fee charge added.",
    process:
      "NSF notice received from bank, reversal posted same day. Customer contacted within 24 hours for replacement payment. NSF fee added to customer account.",
    metrics: [
      { label: "NSF Returns", value: "5" },
      { label: "Total NSF Value", value: "$8,420" },
      { label: "Recovered", value: "$6,820" },
      { label: "Written Off", value: "$1,600" },
    ],
    table: {
      headers: ["Date", "Cheque #", "Customer", "Original Amount", "NSF Fee", "Recovery", "Status"],
      rows: [
        ["05-May", "CHQ-1402", "Slow Co.", 2400, 45, 2445, "Recovered"],
        ["09-May", "CHQ-1408", "Smith Trading", 1840, 45, 1885, "Recovered"],
        ["14-May", "CHQ-1415", "Coast Imports", 980, 45, 1025, "Recovered"],
        ["18-May", "CHQ-1422", "Style Co.", 1600, 45, 0, "Written Off"],
        ["22-May", "CHQ-1428", "Trend Buyers", 1600, 45, 1645, "Recovered"],
      ],
      footer: [null, null, null, "TOTAL", 8420, 225, 6820, null],
    },
  },
  {
    label: "Credit Card Settlement",
    period: "June 2024",
    company: "direct-sales",
    theme: "Card Settlements",
    summary:
      "Daily credit card terminal settlement processing. Each batch reconciled to the merchant statement and posted to AR/cash with associated card fees expense.",
    process:
      "Daily settlement file imported. Each batch reconciled to terminal Z-tape. Discrepancies investigated within 24 hours via merchant services.",
    metrics: [
      { label: "Card Settlements", value: "$84,200" },
      { label: "Merchant Fees", value: "$2,420" },
      { label: "Net Deposited", value: "$81,780" },
      { label: "Batches", value: "30" },
    ],
    table: {
      headers: ["Date", "Batch #", "Gross", "Visa/MC", "Amex", "Fees", "Net Deposit"],
      rows: [
        ["03-Jun", "BAT-6601", 4280, 3850, 430, 124, 4156],
        ["07-Jun", "BAT-6608", 3120, 2820, 300, 90, 3030],
        ["10-Jun", "BAT-6614", 5680, 5100, 580, 165, 5515],
        ["14-Jun", "BAT-6622", 2840, 2540, 300, 82, 2758],
        ["18-Jun", "BAT-6630", 4920, 4400, 520, 142, 4778],
        ["22-Jun", "BAT-6638", 6200, 5580, 620, 180, 6020],
        ["26-Jun", "BAT-6645", 3480, 3120, 360, 100, 3380],
        ["29-Jun", "BAT-6652", 4800, 4280, 520, 139, 4661],
      ],
      footer: [null, "TOTAL", 35320, 31690, 3630, 1022, 34298],
    },
  },
  {
    label: "Bulk Wholesale Payments",
    period: "March 2024",
    company: "direct-sales",
    theme: "Wholesale",
    summary:
      "Large bulk wholesale customer payment receipts from key trade customers. Each receipt covered multiple invoices via remittance advice.",
    process:
      "Remittance advice imported with payment. Multiple invoices closed in single transaction. Variance investigated if total doesn't match invoice list.",
    metrics: [
      { label: "Bulk Receipts", value: "$348,400" },
      { label: "Invoices Closed", value: "42" },
      { label: "Customers", value: "5" },
      { label: "Variance", value: "$0" },
    ],
    table: {
      headers: ["Date", "Receipt #", "Customer", "Invoices Covered", "Amount", "Status"],
      rows: [
        ["05-Mar", "RCT-BL01", "Maple Leaf Retail", "SI-9001, 9007, 9018", 84800, "Applied"],
        ["08-Mar", "RCT-BL02", "Coastal Department", "SI-9004, 9008", 40750, "Applied"],
        ["12-Mar", "RCT-BL03", "Pacific Boutiques", "SI-9002, 9011, 9019", 32700, "Applied"],
        ["15-Mar", "RCT-BL04", "Urban Threads", "SI-9003, 9009, 9020", 23275, "Applied"],
        ["22-Mar", "RCT-BL05", "Maple Leaf Retail", "SI-9024, 9028, 9032", 96400, "Applied"],
        ["28-Mar", "RCT-BL06", "Coastal Department", "SI-9026, 9030", 70475, "Applied"],
      ],
      footer: [null, null, null, "TOTAL BULK", 348400, null],
    },
  },
];

// ============================================================================
// AP QUERY TRACKER (Foodservice)
// ============================================================================
const AP_QUERIES: SampleVariant[] = [
  {
    label: "March 2024",
    period: "March 2024",
    company: "foodservice",
    theme: "Monthly",
    summary:
      "Logged and resolved AP queries raised by Procurement, Operations, Design, Finance and Marketing. Each query investigated against PO, goods receipt, vendor statement and tax rules.",
    process:
      "Service targets: High closed within 2 business days, Medium within 4, Low within 5. Resolution requires supporting documentation.",
    file: "/4_AP_Query_Tracker_CompassCanada.xlsx",
    metrics: [
      { label: "Queries Logged", value: "9" },
      { label: "Resolved", value: "6" },
      { label: "In Progress", value: "2" },
      { label: "Avg Days Open", value: "2.2" },
    ],
    table: {
      headers: ["Date", "Query ID", "Raised By", "Vendor / Subject", "Priority", "Days", "Status"],
      rows: [
        ["04-Mar", "Q-3301", "Procurement", "Milano Textile Mills, price variance", "Medium", "2", "Resolved"],
        ["06-Mar", "Q-3302", "Operations", "Quebec Couriers, duplicate suspected", "Low", "1", "Resolved"],
        ["08-Mar", "Q-3303", "Design", "Northern Trims, missing GRN", "High", "open", "In Progress"],
        ["11-Mar", "Q-3304", "Finance", "Heritage Property, wrong cost centre", "Medium", "3", "Resolved"],
        ["13-Mar", "Q-3305", "Marketing", "Creative Media, payment timing", "Low", "2", "Resolved"],
        ["18-Mar", "Q-3306", "Procurement", "Studio Lighting, tax error", "High", "open", "Awaiting Vendor"],
        ["20-Mar", "Q-3307", "Logistics", "Lombardia, wire not on statement", "Medium", "4", "Resolved"],
        ["22-Mar", "Q-3308", "Operations", "Hydro One, high utility charge", "Low", "1", "Resolved"],
        ["26-Mar", "Q-3309", "Finance", "Runway Events, deposit overlap", "Medium", "open", "In Progress"],
      ],
    },
  },
  {
    label: "Price Variances",
    period: "April 2024",
    company: "foodservice",
    theme: "Pricing",
    summary:
      "Concentrated batch of price variance queries where invoice unit prices didn't match PO. Each investigated against current vendor agreement.",
    process:
      "Vendor agreement pricing pulled from contracts. Variance over 5% escalated to procurement. Resolution via credit note or PO update with buyer approval.",
    metrics: [
      { label: "Variance Queries", value: "11" },
      { label: "Credit Notes Requested", value: "6" },
      { label: "PO Updates", value: "3" },
      { label: "Accepted As-Is", value: "2" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "Invoice", "PO Price", "Inv Price", "Resolution"],
      rows: [
        ["02-Apr", "Q-4101", "Milano Textile", "INV-8920", "$42/yd", "$45/yd", "Credit note"],
        ["05-Apr", "Q-4102", "Northern Trims", "INV-4501", "$8.50", "$8.75", "PO update"],
        ["09-Apr", "Q-4103", "Atelier Silk", "INV-2280", "$58/yd", "$62/yd", "Credit note"],
        ["12-Apr", "Q-4104", "Paris Embell.", "INV-5620", "$22/pc", "$25/pc", "PO update"],
        ["15-Apr", "Q-4105", "Lombardia Leather", "INV-9920", "$120/yd", "$115/yd", "Accept"],
        ["18-Apr", "Q-4106", "Studio Lighting", "INV-7820", "$485 fix.", "$510 fix.", "Credit note"],
        ["22-Apr", "Q-4107", "Quebec Couriers", "INV-1245", "$18/pkg", "$22/pkg", "PO update"],
        ["26-Apr", "Q-4108", "Heritage Property", "RENT-0424", "$9,600", "$9,800", "Credit note"],
        ["29-Apr", "Q-4109", "Creative Media", "INV-6720", "$120/hr", "$135/hr", "Credit note"],
      ],
    },
  },
  {
    label: "Duplicate Invoices",
    period: "May 2024",
    company: "foodservice",
    theme: "Duplicates",
    summary:
      "Investigated suspected duplicate invoice postings flagged by the ERP duplicate-detection rules. Each verified against vendor statement and prior payment history.",
    process:
      "ERP duplicate-detection rule triggers on vendor + invoice number + amount match. Each flagged invoice cross-checked manually before approval or rejection.",
    metrics: [
      { label: "Duplicates Flagged", value: "8" },
      { label: "Confirmed Duplicates", value: "5" },
      { label: "Different Periods", value: "3" },
      { label: "Avoided Loss", value: "$24,800" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "Invoice", "Status"],
      rows: [
        ["02-May", "Q-5101", "Sysco Foods", "INV-44280", "Confirmed duplicate, rejected"],
        ["06-May", "Q-5102", "GFS Wholesale", "INV-55280", "Different period, posted"],
        ["09-May", "Q-5103", "Quebec Couriers", "INV-1280", "Confirmed duplicate, rejected"],
        ["12-May", "Q-5104", "Heritage Property", "RENT-0524", "Different period, posted"],
        ["15-May", "Q-5105", "BC Hydro", "UTIL-0524", "Confirmed duplicate, rejected"],
        ["18-May", "Q-5106", "Ecolab", "INV-22408", "Confirmed duplicate, rejected"],
        ["22-May", "Q-5107", "Cool-Tech HVAC", "INV-7720", "Different period, posted"],
        ["28-May", "Q-5108", "Studio Lighting", "INV-7825", "Confirmed duplicate, rejected"],
      ],
    },
  },
  {
    label: "Missing Goods Receipts",
    period: "February 2024",
    company: "foodservice",
    theme: "GRN",
    summary:
      "Investigated invoices without matching goods receipt notes from the warehouse. Coordinated with logistics team to confirm delivery before payment release.",
    process:
      "Daily report of invoices > 3 days old without GRN. Logistics contacted to confirm physical delivery. GRN entered retroactively or invoice rejected if no delivery confirmed.",
    metrics: [
      { label: "Missing GRN", value: "6" },
      { label: "Resolved Same Day", value: "4" },
      { label: "Held > 5 days", value: "1" },
      { label: "Invoice Rejected", value: "1" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "Invoice", "PO", "Resolution"],
      rows: [
        ["05-Feb", "Q-2201", "Milano Textile", "INV-8820", "PO-1240", "GRN posted same day"],
        ["08-Feb", "Q-2202", "Northern Trims", "INV-4401", "PO-1248", "GRN found, posted"],
        ["12-Feb", "Q-2203", "Atelier Silk", "INV-2208", "PO-1255", "Delivery confirmed"],
        ["15-Feb", "Q-2204", "Paris Embell.", "INV-5510", "PO-1260", "Pending, 5 days open"],
        ["18-Feb", "Q-2205", "Studio Lighting", "INV-7715", "PO-1265", "Wrong vendor, rejected"],
        ["22-Feb", "Q-2206", "Lombardia Leather", "INV-9810", "PO-1268", "GRN posted next day"],
      ],
    },
  },
  {
    label: "Tax Coding Errors",
    period: "March 2024",
    company: "foodservice",
    theme: "Tax",
    summary:
      "Tax-related queries on invoices where GST/HST, QST or PST was applied incorrectly. Each reviewed against the GST/HST place-of-supply rules.",
    process:
      "Each tax error verified against CRA GST/HST rules and provincial tax rules. Credit note requested from vendor for incorrect tax; ITC reversed if needed.",
    metrics: [
      { label: "Tax Queries", value: "7" },
      { label: "Credit Notes Issued", value: "4" },
      { label: "ITC Adjusted", value: "$2,420" },
      { label: "PST Refund Claimed", value: "$840" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "Issue", "Amount", "Resolution"],
      rows: [
        ["04-Mar", "Q-3401", "Studio Lighting", "QST not applicable", 285, "Credit note received"],
        ["08-Mar", "Q-3402", "Out-of-province vendor", "Wrong PST rate", 142, "ITC adjusted"],
        ["12-Mar", "Q-3403", "Northern Trims", "Missing GST registration #", 0, "Vendor updated"],
        ["15-Mar", "Q-3404", "Quebec Couriers", "QST charged on inter-provincial", 86, "Credit note"],
        ["19-Mar", "Q-3405", "Creative Media", "HST instead of GST+PST", 480, "Credit note"],
        ["22-Mar", "Q-3406", "Bell Canada", "PST refund claim", 840, "Refund claimed"],
        ["27-Mar", "Q-3407", "Heritage Property", "Tax-exempt missed", 0, "Vendor adjusted"],
      ],
    },
  },
  {
    label: "Vendor Statement Recs",
    period: "April 2024",
    company: "foodservice",
    theme: "Vendor Recs",
    summary:
      "Vendor statement reconciliation queries where vendor balances didn't match AP sub-ledger. Each variance investigated and resolved with vendor correspondence.",
    process:
      "Quarterly vendor statements requested from top 20 vendors. AP sub-ledger compared line-by-line. Reconciling items documented and cleared within 30 days.",
    metrics: [
      { label: "Vendor Recs", value: "20" },
      { label: "Clean Recs", value: "14" },
      { label: "Variances Cleared", value: "5" },
      { label: "Outstanding", value: "1" },
    ],
    table: {
      headers: ["Date", "Vendor", "GL Balance", "Vendor Bal", "Variance", "Status"],
      rows: [
        ["02-Apr", "Milano Textile Mills", 42850, 42850, 0, "Reconciled"],
        ["05-Apr", "Atelier Silk Importers", 25184, 28084, -2900, "INV-2280 in transit"],
        ["08-Apr", "Northern Trims", 7320, 7320, 0, "Reconciled"],
        ["12-Apr", "Heritage Property", 9600, 0, 9600, "Pre-paid Apr rent"],
        ["15-Apr", "Quebec Couriers", 2140, 2140, 0, "Reconciled"],
        ["18-Apr", "Studio Lighting", 5460, 5460, 0, "Reconciled"],
        ["22-Apr", "Paris Embellishment", 15277, 16517, -1240, "Credit note pending"],
        ["26-Apr", "Lombardia Leather", 12694, 12694, 0, "Reconciled"],
      ],
    },
  },
  {
    label: "Quantity Discrepancies",
    period: "June 2024",
    company: "fashion-house",
    theme: "Quantities",
    summary:
      "Queries on invoices where billed quantities didn't match received quantities. Each investigated with warehouse staff and resolved with credit note or short-ship acceptance.",
    process:
      "Receiving discrepancy report generated weekly. Each item reconciled to physical count. Short-ships documented for credit; over-receipts adjusted in inventory.",
    metrics: [
      { label: "Quantity Disputes", value: "8" },
      { label: "Credit Notes Received", value: "5" },
      { label: "Accept Over-Receipt", value: "2" },
      { label: "Open", value: "1" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "PO Qty", "Invoiced", "Received", "Variance"],
      rows: [
        ["03-Jun", "Q-6501", "Milano Textile", 200, 200, 195, "-5 yds"],
        ["07-Jun", "Q-6502", "Northern Trims", 50, 50, 48, "-2 pcs"],
        ["12-Jun", "Q-6503", "Atelier Silk", 100, 100, 102, "+2 yds"],
        ["15-Jun", "Q-6504", "Paris Embell.", 24, 24, 23, "-1 pc"],
        ["18-Jun", "Q-6505", "Lombardia Leather", 80, 80, 78, "-2 yds"],
        ["22-Jun", "Q-6506", "Studio Lighting", 4, 4, 3, "-1 fixture"],
        ["26-Jun", "Q-6507", "Creative Media", 1, 1, 1.5, "+0.5 days"],
        ["29-Jun", "Q-6508", "Runway Events", 1, 1, 1, "OK, open query"],
      ],
    },
  },
  {
    label: "Account Coding Reclasses",
    period: "May 2024",
    company: "foodservice",
    theme: "Reclass",
    summary:
      "Queries about GL coding on AP invoices, leading to reclass entries. Misclassified expenses moved to correct accounts via month-end journal entry batch.",
    process:
      "Quarterly review of GL coding by Finance Director. Reclasses booked as month-end JEs with audit trail back to original invoice posting.",
    metrics: [
      { label: "Reclasses", value: "12" },
      { label: "GL Accounts Changed", value: "8" },
      { label: "Cost Centres Updated", value: "5" },
      { label: "Reclass Value", value: "$28,420" },
    ],
    table: {
      headers: ["Date", "Query ID", "From GL", "To GL", "Vendor", "Amount", "Reason"],
      rows: [
        ["02-May", "Q-5301", "6310", "6210", "Sysco Foods", 4200, "Office supplies not food"],
        ["05-May", "Q-5302", "6210", "1610", "Industrial Sewing", 8200, "Capitalize, not expense"],
        ["09-May", "Q-5303", "6320", "6310", "Hotel travel", 1240, "Per diem meal portion"],
        ["12-May", "Q-5304", "6410", "6610", "Trade pub", 480, "Advertising not subscription"],
        ["15-May", "Q-5305", "6510", "6320", "Mileage claim", 285, "Travel not freight"],
        ["19-May", "Q-5306", "6610", "6410", "LinkedIn premium", 320, "Subscription not advertising"],
        ["22-May", "Q-5307", "6210", "6310", "Coffee supplies", 142, "M&E not office"],
        ["26-May", "Q-5308", "6310", "6320", "Conference dinner", 850, "Travel meal not regular"],
      ],
    },
  },
  {
    label: "Payment Status Queries",
    period: "April 2024",
    company: "foodservice",
    theme: "Payment Status",
    summary:
      "Queries from vendors requesting payment status updates. Each investigated against payment schedule and resolved within 24 hours of receipt.",
    process:
      "Standard reply template with payment method, scheduled date and reference. MT103 confirmation provided for international wires; ACH trace number for domestic EFTs.",
    metrics: [
      { label: "Status Queries", value: "15" },
      { label: "Resolved Same Day", value: "12" },
      { label: "Vendors Contacted", value: "11" },
      { label: "Avg Response Time", value: "4 hours" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "Invoice", "Issue", "Resolution"],
      rows: [
        ["02-Apr", "Q-4501", "Sysco Foods", "INV-44210", "Payment status", "EFT cleared 04-Mar, ref provided"],
        ["05-Apr", "Q-4502", "GFS Wholesale", "INV-55218", "Late payment query", "Scheduled 12-Apr per terms"],
        ["08-Apr", "Q-4503", "Atelier Silk", "INV-2280", "Wire confirmation", "MT103 provided"],
        ["12-Apr", "Q-4504", "Quebec Couriers", "INV-1248", "Cheque not received", "Stop payment, reissue"],
        ["15-Apr", "Q-4505", "Heritage Property", "RENT-0424", "Early payment request", "Standard cycle confirmed"],
        ["18-Apr", "Q-4506", "Bell Canada", "TEL-0424", "Auto-pay failed", "Manual payment scheduled"],
        ["22-Apr", "Q-4507", "Creative Media", "INV-6720", "Net 30 vs Net 60", "Terms confirmed Net 30"],
        ["26-Apr", "Q-4508", "Studio Lighting", "INV-7820", "Discount claimed", "2/10 not eligible, denied"],
        ["29-Apr", "Q-4509", "Lombardia Leather", "INV-9820", "FX rate question", "Daily spot rate verified"],
      ],
    },
  },
  {
    label: "Year-End Cleanup",
    period: "December 2023",
    company: "foodservice",
    theme: "Year-End",
    summary:
      "Year-end AP queries focused on clearing open items before December 31. Coordinated with vendors to issue final credit notes and resolve disputes.",
    process:
      "All open queries reviewed pre year-end. Items unlikely to resolve by year-end accrued and reversed in January. Vendor statements pulled for top 30 vendors.",
    metrics: [
      { label: "Open Queries", value: "18" },
      { label: "Resolved Pre-YE", value: "14" },
      { label: "Accrued to Jan", value: "3" },
      { label: "Year-End Variance", value: "$1,240" },
    ],
    table: {
      headers: ["Date", "Query ID", "Vendor", "Issue", "Status", "Resolution"],
      rows: [
        ["04-Dec", "Q-7401", "Milano Textile", "Multi-invoice rec", "Resolved", "Credit issued $4,200"],
        ["08-Dec", "Q-7402", "Atelier Silk", "Annual rebate", "Resolved", "Rebate credited"],
        ["12-Dec", "Q-7403", "Heritage Property", "CAM adjustment", "Resolved", "Year-end CAM true-up"],
        ["15-Dec", "Q-7404", "Northern Trims", "Volume discount", "Resolved", "5% retro applied"],
        ["18-Dec", "Q-7405", "Paris Embell.", "Damaged goods", "Accrued", "Pending Jan inspection"],
        ["22-Dec", "Q-7406", "Lombardia Leather", "Quality dispute", "Accrued", "Awaiting vendor visit"],
        ["27-Dec", "Q-7407", "Studio Lighting", "Warranty claim", "Resolved", "Replacement scheduled"],
        ["28-Dec", "Q-7408", "Quebec Couriers", "Pricing rebate", "Resolved", "$840 credit applied"],
      ],
    },
  },
];

// ============================================================================
// MONTH-END JOURNAL ENTRIES (Fashion House)
// ============================================================================
const MONTH_END_JES: SampleVariant[] = [
  {
    label: "March 2024 Close",
    period: "March 2024",
    company: "fashion-house",
    theme: "Standard",
    summary:
      "Standard month-end journal entry package including unbilled accruals, depreciation, amortization, prepaid amortization, payroll accrual, FX revaluation, reclasses and sales tax.",
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
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["ME-01", "Raw Materials Inventory", "1310", 18400, "", "Accrue unbilled fabric received"],
        ["", "    Accrued Liabilities", "2150", "", 18400, ""],
        ["ME-02", "Depreciation Expense", "6710", 2500, "", "Studio & showroom equipment"],
        ["", "    Accumulated Depreciation", "1610", "", 2500, ""],
        ["ME-03", "Amortization Expense", "6720", 1250, "", "Brand & design intangibles"],
        ["", "    Accumulated Amortization", "1710", "", 1250, ""],
        ["ME-04", "Insurance Expense", "6420", 1375, "", "Prepaid insurance expired"],
        ["", "    Prepaid Insurance", "1410", "", 1375, ""],
        ["ME-05", "Salaries & Wages", "6110", 16800, "", "Accrue payroll earned"],
        ["", "    Salaries Payable", "2120", "", 16800, ""],
        ["ME-06", "Accounts Payable", "2110", 640, "", "FX gain on USD revaluation"],
        ["", "    Foreign Exchange Gain", "7210", "", 640, ""],
        ["ME-07", "Rent Expense", "6210", 9600, "", "Reclass rent"],
        ["", "    Office Supplies Expense", "6310", "", 9600, ""],
        ["ME-08", "GST/HST Receivable", "1240", 4820, "", "Sales tax accrual"],
        ["", "GST/HST Suspense", "2215", 4360, "", ""],
        ["", "    GST/HST Payable", "2210", "", 9180, ""],
      ],
      footer: [null, "TOTAL", null, 59745, 59745, null],
    },
  },
  {
    label: "April 2024 Close",
    period: "April 2024",
    company: "fashion-house",
    theme: "Standard",
    summary:
      "April close with focus on April accruals plus reversal of March accruals. Each ME-XX entry from March reversed on April 1 before this month's package booked.",
    process:
      "March reversing entries auto-generated on April 1. New April accruals booked separately. Net P&L impact reviewed to confirm timing-only differences.",
    metrics: [
      { label: "Entries Posted", value: "10" },
      { label: "Reversals", value: "8" },
      { label: "Net P&L Impact", value: "+$1,840" },
      { label: "Balance Check", value: "In Balance" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["RV-01", "Accrued Liabilities", "2150", 18400, "", "Reverse Mar fabric accrual"],
        ["", "    Raw Materials Inventory", "1310", "", 18400, ""],
        ["ME-01", "Raw Materials Inventory", "1310", 22600, "", "Apr fabric accrual"],
        ["", "    Accrued Liabilities", "2150", "", 22600, ""],
        ["ME-02", "Depreciation Expense", "6710", 2500, "", "Apr depreciation"],
        ["", "    Accumulated Depreciation", "1610", "", 2500, ""],
        ["ME-03", "Salaries & Wages", "6110", 18420, "", "Apr payroll accrual"],
        ["", "    Salaries Payable", "2120", "", 18420, ""],
        ["ME-04", "Insurance Expense", "6420", 1375, "", "Apr insurance"],
        ["", "    Prepaid Insurance", "1410", "", 1375, ""],
        ["ME-05", "Amortization Expense", "6720", 1250, "", "Apr amortization"],
        ["", "    Accumulated Amortization", "1710", "", 1250, ""],
        ["ME-06", "Foreign Exchange Loss", "7220", 280, "", "Apr FX revaluation"],
        ["", "    Accounts Payable", "2110", "", 280, ""],
      ],
      footer: [null, "TOTAL", null, 64825, 64825, null],
    },
  },
  {
    label: "Quarter-End Close",
    period: "Q1 2024",
    company: "fashion-house",
    theme: "Quarterly",
    summary:
      "Q1 quarterly close with additional entries beyond standard monthly: bonus accrual, inventory reserve true-up, and quarterly variance reclasses.",
    process:
      "Q1 quarter-end procedures triggered after March close completed. Additional working papers: bonus calculation, inventory aging analysis, and budget variance review.",
    metrics: [
      { label: "Entries Posted", value: "14" },
      { label: "Q1 Bonus Accrual", value: "$28,400" },
      { label: "Reserve True-Up", value: "$8,200" },
      { label: "Balance Check", value: "In Balance" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["QE-01", "Bonus Expense", "6115", 28400, "", "Q1 bonus accrual, 5% of net income"],
        ["", "    Bonus Payable", "2125", "", 28400, ""],
        ["QE-02", "Inventory Reserve Exp.", "6325", 8200, "", "Slow-moving inventory true-up"],
        ["", "    Allow. for Obsolescence", "1318", "", 8200, ""],
        ["QE-03", "COGS, Reclass", "5110", 12400, "", "Reclass freight from rent"],
        ["", "    Rent Expense", "6210", "", 12400, ""],
        ["QE-04", "Tax Provision Expense", "6810", 24850, "", "Q1 corporate tax provision"],
        ["", "    Income Tax Payable", "2310", "", 24850, ""],
        ["QE-05", "Marketing Expense", "6610", 4200, "", "Q1 ad-spend accrual"],
        ["", "    Accrued Liabilities", "2150", "", 4200, ""],
        ["QE-06", "Bad Debt Expense", "6320", 2400, "", "AR aging reserve update"],
        ["", "    Allow. for Doubtful Accts", "1208", "", 2400, ""],
      ],
      footer: [null, "TOTAL", null, 80450, 80450, null],
    },
  },
  {
    label: "Year-End Close",
    period: "December 2023",
    company: "fashion-house",
    theme: "Year-End",
    summary:
      "Year-end closing journal entries including annual depreciation, income tax provision, dividends declared, and closing entries to retained earnings.",
    process:
      "Year-end close follows standard procedure plus annual entries: tax provision, dividend declaration, and closing of all revenue/expense accounts to income summary then retained earnings.",
    metrics: [
      { label: "Entries Posted", value: "18" },
      { label: "Tax Provision", value: "$92,225" },
      { label: "Dividends Declared", value: "$50,000" },
      { label: "Net Income Closed", value: "$276,675" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["YE-01", "Depreciation Expense", "6710", 30000, "", "FY22 annual depreciation"],
        ["", "    Accumulated Depreciation", "1610", "", 30000, ""],
        ["YE-02", "Amortization Expense", "6720", 15000, "", "FY22 annual amortization"],
        ["", "    Accumulated Amortization", "1710", "", 15000, ""],
        ["YE-03", "Income Tax Expense", "6810", 92225, "", "FY22 income tax (25%)"],
        ["", "    Income Tax Payable", "2310", "", 92225, ""],
        ["YE-04", "Dividends Declared", "3210", 50000, "", "Annual dividend"],
        ["", "    Dividends Payable", "2350", "", 50000, ""],
        ["YE-05", "Salaries & Wages", "6110", 22000, "", "Year-end payroll accrual"],
        ["", "    Salaries Payable", "2120", "", 22000, ""],
        ["YE-06", "Insurance Expense", "6420", 16500, "", "Annual prepaid expiry"],
        ["", "    Prepaid Insurance", "1410", "", 16500, ""],
      ],
      footer: [null, "TOTAL", null, 225725, 225725, null],
    },
  },
  {
    label: "Bonus Accrual",
    period: "October 2023",
    company: "fashion-house",
    theme: "Compensation",
    summary:
      "Monthly bonus accrual entries tracking estimated annual bonus pool. Updated each month based on YTD performance against bonus pool metrics.",
    process:
      "Bonus formula: 4% of net income above target threshold. Pool accrued monthly at 1/12 of estimated annual. Adjustment entry booked if actual pool diverges materially.",
    metrics: [
      { label: "Monthly Accrual", value: "$8,200" },
      { label: "YTD Accrued", value: "$82,000" },
      { label: "Estimated Annual", value: "$98,400" },
      { label: "True-Up Pending", value: "$16,400" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["BN-01", "Salaries & Wages, Bonus", "6115", 8200, "", "October bonus accrual"],
        ["", "    Bonus Payable", "2125", "", 8200, ""],
      ],
      footer: [null, "TOTAL", null, 8200, 8200, null],
    },
  },
  {
    label: "FX Revaluation",
    period: "June 2024",
    company: "fashion-house",
    theme: "FX",
    summary:
      "Month-end FX revaluation of all USD-denominated balance sheet accounts at closing CAD/USD spot rate. Unrealized gains/losses posted to FX gain/loss accounts.",
    process:
      "Bank of Canada noon rate captured June 30. Each USD account revalued; FX entry posted to bring CAD-translated value in line with current rate.",
    metrics: [
      { label: "USD AR Revalued", value: "$84,200" },
      { label: "USD AP Revalued", value: "$48,200" },
      { label: "USD Cash Revalued", value: "$22,400" },
      { label: "Net FX Gain", value: "$1,840" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["FX-01", "Accounts Receivable, USD", "1205", 1240, "", "AR revaluation, USD 84.2K @ 1.362"],
        ["", "    Foreign Exchange Gain", "7210", "", 1240, ""],
        ["FX-02", "Accounts Payable, USD", "2105", 480, "", "AP revaluation, USD 48.2K @ 1.362"],
        ["", "    Foreign Exchange Gain", "7210", "", 480, ""],
        ["FX-03", "Cash, RBC USD", "1015", 120, "", "Cash revaluation"],
        ["", "    Foreign Exchange Gain", "7210", "", 120, ""],
      ],
      footer: [null, "TOTAL", null, 1840, 1840, null],
    },
  },
  {
    label: "Inventory True-Up",
    period: "September 2023",
    company: "fashion-house",
    theme: "Inventory",
    summary:
      "Quarterly inventory true-up entries from physical count results. Adjustments for shrinkage, obsolescence write-downs and reserve updates.",
    process:
      "Physical count conducted last weekend of quarter. Variance to perpetual records reconciled; shrinkage written off; reserves adjusted for slow-moving SKUs.",
    metrics: [
      { label: "Shrinkage Posted", value: "$4,820" },
      { label: "Obsolescence W/D", value: "$8,400" },
      { label: "Reserve Increase", value: "$3,200" },
      { label: "Total Inventory Adj", value: "$16,420" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["IN-01", "COGS, Shrinkage", "5120", 4820, "", "Q3 physical count shrink"],
        ["", "    Raw Materials Inventory", "1310", "", 4820, ""],
        ["IN-02", "COGS, Obsolescence", "5130", 8400, "", "Q3 write-down slow movers"],
        ["", "    Finished Goods Inventory", "1320", "", 8400, ""],
        ["IN-03", "Inventory Reserve Exp.", "6325", 3200, "", "Reserve increase"],
        ["", "    Allow. for Obsolescence", "1318", "", 3200, ""],
      ],
      footer: [null, "TOTAL", null, 16420, 16420, null],
    },
  },
  {
    label: "Capex Posting",
    period: "August 2023",
    company: "fashion-house",
    theme: "Capex",
    summary:
      "Month-end capex posting entries to move capital purchases from clearing accounts into fixed asset register, with appropriate depreciation classes assigned.",
    process:
      "Each capex purchase verified against approved CER. Asset class assigned per depreciation policy. Depreciation started in month placed in service per half-year convention.",
    metrics: [
      { label: "Assets Capitalized", value: "$84,200" },
      { label: "Asset Classes", value: "3" },
      { label: "Annual Dep'n Start", value: "$8,420" },
      { label: "Asset Tags Assigned", value: "12" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["CX-01", "Studio Equipment", "1610", 48400, "", "5 sewing machines + showroom"],
        ["", "    Capex Clearing", "1690", "", 48400, ""],
        ["CX-02", "Leasehold Improvements", "1620", 28400, "", "Flagship reno phase 1"],
        ["", "    Capex Clearing", "1690", "", 28400, ""],
        ["CX-03", "IT Equipment", "1630", 7400, "", "POS system upgrade"],
        ["", "    Capex Clearing", "1690", "", 7400, ""],
      ],
      footer: [null, "TOTAL", null, 84200, 84200, null],
    },
  },
  {
    label: "Tax Provision",
    period: "Q4 2023",
    company: "fashion-house",
    theme: "Tax",
    summary:
      "Quarterly tax provision entry computed as 25% of pre-tax income, less prior quarter provisions. Includes both current and deferred tax components.",
    process:
      "Tax provision calculated from quarterly P&L. Current portion accrued as Income Tax Payable; deferred portion to Deferred Tax Liability based on temporary differences.",
    metrics: [
      { label: "Current Tax", value: "$36,400" },
      { label: "Deferred Tax", value: "$4,200" },
      { label: "YTD Tax Provision", value: "$92,225" },
      { label: "Effective Rate", value: "25%" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["TX-01", "Current Income Tax Exp.", "6810", 36400, "", "Q4 current tax"],
        ["", "    Income Tax Payable", "2310", "", 36400, ""],
        ["TX-02", "Deferred Tax Expense", "6815", 4200, "", "Q4 deferred tax"],
        ["", "    Deferred Tax Liability", "2320", "", 4200, ""],
      ],
      footer: [null, "TOTAL", null, 40600, 40600, null],
    },
  },
  {
    label: "Closing to RE",
    period: "December 2023",
    company: "fashion-house",
    theme: "Closing",
    summary:
      "Final year-end closing entries: close all revenue, expense and dividend accounts to income summary, then close income summary to retained earnings.",
    process:
      "Standard four-step closing entries: close revenues, close expenses, close income summary to RE, close dividends to RE. Verified retained earnings balance after closing.",
    metrics: [
      { label: "Revenues Closed", value: "$1,800,000" },
      { label: "Expenses Closed", value: "$1,523,325" },
      { label: "Net Income to RE", value: "$276,675" },
      { label: "Dividends to RE", value: "$50,000" },
    ],
    table: {
      headers: ["JE #", "Account", "GL", "Debit", "Credit", "Narrative"],
      rows: [
        ["CL-01", "Wholesale Revenue", "4100", 980000, "", "Close revenue"],
        ["", "Retail Revenue", "4200", 760000, "", ""],
        ["", "Licensing Income", "4300", 60000, "", ""],
        ["", "    Income Summary", "3900", "", 1800000, ""],
        ["CL-02", "Income Summary", "3900", 1523325, "", "Close expenses"],
        ["", "    COGS + All Expenses", "5xxx-6xxx", "", 1523325, ""],
        ["CL-03", "Income Summary", "3900", 276675, "", "Close income summary"],
        ["", "    Retained Earnings", "3300", "", 276675, ""],
        ["CL-04", "Retained Earnings", "3300", 50000, "", "Close dividends"],
        ["", "    Dividends Declared", "3210", "", 50000, ""],
      ],
      footer: [null, "TOTAL", null, 3590000, 3590000, null],
    },
  },
];

// ============================================================================
// GL ACCOUNT RECONCILIATIONS (Direct Sales)
// ============================================================================
const GL_RECONS: SampleVariant[] = [
  {
    label: "March 2024 Recs",
    period: "Mar 31, 2024",
    company: "direct-sales",
    theme: "Monthly",
    summary:
      "Reconciled nine delegated balance sheet accounts to independent supporting records: bank statements, sub-ledgers and working papers. Variances documented with reconciling items.",
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
      headers: ["GL", "Account Name", "GL Balance", "Support Bal", "Difference", "Status"],
      rows: [
        ["1010", "Bank, RBC Operating", 284560, 284560, 0, "Reconciled"],
        ["1200", "Accounts Receivable", 196340, 196340, 0, "Reconciled"],
        ["1240", "GST/HST Receivable", 14820, 14820, 0, "Reconciled"],
        ["1410", "Prepaid Insurance", 9625, 9625, 0, "Reconciled"],
        ["2110", "Accounts Payable", 148790, 151290, -2500, "Variance"],
        ["2120", "Salaries Payable", 16800, 16800, 0, "Reconciled"],
        ["2150", "Accrued Liabilities", 27600, 27600, 0, "Reconciled"],
        ["2210", "GST/HST Payable", 31180, 31180, 0, "Reconciled"],
        ["1250", "Employee Advances", 1200, 0, 1200, "Variance"],
      ],
      footer: [null, "TOTAL DELEGATED", 730915, 732215, -1300, null],
    },
  },
  {
    label: "Bank Reconciliations",
    period: "April 2024",
    company: "direct-sales",
    theme: "Bank",
    summary:
      "Monthly bank reconciliations across all three bank accounts (operating, savings, USD). Outstanding cheques, deposits in transit and bank charges accounted for.",
    process:
      "Bank statement matched to GL line-by-line. Outstanding items listed; reconciling items resolved within 30 days or escalated.",
    metrics: [
      { label: "Bank Accounts", value: "3" },
      { label: "Total Bank Balance", value: "$524,200" },
      { label: "Outstanding Cheques", value: "$8,420" },
      { label: "Deposits in Transit", value: "$2,400" },
    ],
    table: {
      headers: ["GL", "Account Name", "GL Balance", "Bank Balance", "O/S Items", "Status"],
      rows: [
        ["1010", "Bank, RBC Operating", 318420, 320440, "(2020) Net o/s", "Reconciled"],
        ["1015", "Bank, RBC USD", 56820, 56820, 0, "Reconciled"],
        ["1020", "Bank, Savings", 148960, 148960, 0, "Reconciled"],
      ],
      footer: [null, "TOTAL", 524200, 526220, "(2020)", null],
    },
  },
  {
    label: "AR Sub-Ledger Tie",
    period: "Mar 31, 2024",
    company: "direct-sales",
    theme: "AR",
    summary:
      "AR control account reconciliation to the detailed AR sub-ledger. Each customer balance verified, aging analyzed and allowance for doubtful accounts adjusted.",
    process:
      "Sub-ledger total compared to control account. Customer balances over 60 days reviewed for collectibility. ADA updated based on aging buckets.",
    metrics: [
      { label: "AR Control", value: "$196,340" },
      { label: "Sub-Ledger", value: "$196,340" },
      { label: "Variance", value: "$0" },
      { label: "Customers", value: "18" },
    ],
    table: {
      headers: ["Aging Bucket", "Sub-Ledger", "% of Total", "ADA %", "ADA Required"],
      rows: [
        ["Current (0-30)", 124800, "63.6%", "0%", 0],
        ["31-60 days", 48420, "24.7%", "2%", 968],
        ["61-90 days", 14800, "7.5%", "10%", 1480],
        ["91-120 days", 6420, "3.3%", "25%", 1605],
        ["Over 120 days", 1900, "0.9%", "50%", 950],
      ],
      footer: [null, 196340, "100%", null, 5003],
    },
  },
  {
    label: "AP Sub-Ledger Tie",
    period: "Mar 31, 2024",
    company: "fashion-house",
    theme: "AP",
    summary:
      "AP control account reconciliation to the AP sub-ledger. Each vendor balance reviewed, in-transit items identified and vendor statements requested where balances disagreed.",
    process:
      "Sub-ledger total compared to control. Top 10 vendors reconciled to vendor statements monthly. Discrepancies actioned within 30 days.",
    metrics: [
      { label: "AP Control", value: "$384,200" },
      { label: "Sub-Ledger", value: "$386,700" },
      { label: "Variance", value: "($2,500)" },
      { label: "Vendors", value: "26" },
    ],
    table: {
      headers: ["Vendor", "Sub-Ledger", "Statement Bal", "Difference", "Status"],
      rows: [
        ["Milano Textile Mills", 84200, 84200, 0, "Reconciled"],
        ["Atelier Silk Importers", 48200, 50700, -2500, "INV-2280 in transit"],
        ["Northern Trims", 22480, 22480, 0, "Reconciled"],
        ["Heritage Property", 9600, 9600, 0, "Reconciled"],
        ["Paris Embellishment", 32400, 32400, 0, "Reconciled"],
        ["Lombardia Leather", 22480, 22480, 0, "Reconciled"],
        ["Other 20 vendors", 164840, 164840, 0, "Reconciled"],
      ],
      footer: [null, 384200, 386700, -2500, null],
    },
  },
  {
    label: "Prepaid Schedule",
    period: "Mar 31, 2024",
    company: "fashion-house",
    theme: "Prepaids",
    summary:
      "Prepaid expense schedule reconciliation. Each prepaid balance traced to original invoice with amortization schedule applied through period-end.",
    process:
      "Each prepaid line item amortized on schedule. GL balance verified against expected closing balance per schedule.",
    metrics: [
      { label: "Total Prepaids", value: "$4,125" },
      { label: "Schedule Bal", value: "$4,125" },
      { label: "Variance", value: "$0" },
      { label: "Active Prepaids", value: "4" },
    ],
    table: {
      headers: ["Prepaid Item", "Original", "Amortized YTD", "Closing Bal", "Months Left"],
      rows: [
        ["Annual Insurance", 18000, -15375, 2625, 2],
        ["Annual Software License", 4800, -4400, 400, 1],
        ["Trade Show Booth", 2400, -1800, 600, 3],
        ["Conference Registration", 1500, -1000, 500, 1],
      ],
      footer: [null, 26700, -22575, 4125, null],
    },
  },
  {
    label: "Fixed Asset Register",
    period: "Mar 31, 2024",
    company: "fashion-house",
    theme: "Fixed Assets",
    summary:
      "Fixed asset register reconciliation to GL. Each asset class, accumulated depreciation balance and current period depreciation verified against the register.",
    process:
      "FA register total cross-checked to GL. Depreciation per class compared to expected expense based on policy. Disposals and additions reconciled.",
    metrics: [
      { label: "Gross FA", value: "$325,000" },
      { label: "Accum Dep'n", value: "($101,250)" },
      { label: "Net Book Value", value: "$223,750" },
      { label: "Active Assets", value: "47" },
    ],
    table: {
      headers: ["Asset Class", "Cost", "Accum Dep'n", "NBV", "Annual Dep'n"],
      rows: [
        ["Studio Equipment", 235000, -67500, 167500, 30000],
        ["IT Equipment", 32000, -16800, 15200, 6400],
        ["Leasehold Improvements", 58000, -16950, 41050, 5800],
      ],
      footer: ["TOTAL", 325000, -101250, 223750, 42200],
    },
  },
  {
    label: "Sales Tax Recs",
    period: "Mar 31, 2024",
    company: "fashion-house",
    theme: "Tax",
    summary:
      "Sales tax control account reconciliation. GST/HST, QST and PST balances verified against the sales tax sub-ledger and prior-period filing positions.",
    process:
      "Monthly tax filing return compared to GL tax payable balances. Reconciling items: in-month sales not yet on filing, ITC timing differences.",
    metrics: [
      { label: "Net Tax Payable", value: "$31,180" },
      { label: "Last Filed", value: "27-Mar-2024" },
      { label: "Current Period", value: "$29,734" },
      { label: "Variance", value: "$0" },
    ],
    table: {
      headers: ["Tax Type", "GL Balance", "Tax Return Bal", "Difference", "Status"],
      rows: [
        ["GST/HST Payable", 31180, 27772, 3408, "March sales not filed"],
        ["GST/HST Receivable", -14820, -12840, -1980, "March ITC not filed"],
        ["QST Payable", 8647, 8647, 0, "Reconciled"],
        ["PST Payable, BC", 4494, 4494, 0, "Reconciled"],
      ],
      footer: [null, 29501, 28073, 1428, null],
    },
  },
  {
    label: "Payroll Liabilities",
    period: "Apr 30, 2024",
    company: "foodservice",
    theme: "Payroll",
    summary:
      "Payroll liability accounts reconciled: salaries payable, source deductions, employer payroll taxes, and benefits payable. All tied to ADP payroll service report.",
    process:
      "ADP payroll register pulled for the period. Each payable account compared to register and remittance schedule. CPP/EI remittance prepared from this rec.",
    metrics: [
      { label: "Total Payroll Liab", value: "$84,520" },
      { label: "Source Deductions", value: "$18,510" },
      { label: "Remittance Due", value: "15th May" },
      { label: "Variance", value: "$0" },
    ],
    table: {
      headers: ["GL", "Account", "GL Balance", "Payroll Register", "Variance", "Status"],
      rows: [
        ["2120", "Salaries Payable", 32400, 32400, 0, "Reconciled"],
        ["2122", "CPP Payable", 4480, 4480, 0, "Reconciled"],
        ["2123", "EI Payable", 1940, 1940, 0, "Reconciled"],
        ["2124", "Federal Tax Payable", 12640, 12640, 0, "Reconciled"],
        ["2126", "Benefits Payable", 4200, 4200, 0, "Reconciled"],
        ["2127", "Vacation Pay Accrual", 28860, 28860, 0, "Reconciled"],
      ],
      footer: [null, "TOTAL", 84520, 84520, 0, null],
    },
  },
  {
    label: "Intercompany Recs",
    period: "Mar 31, 2024",
    company: "fashion-house",
    theme: "Intercompany",
    summary:
      "Intercompany account reconciliation between operating entity and holding company. Mirror balances confirmed equal and offsetting on consolidation.",
    process:
      "Both sides of intercompany match identified. Differences (typically timing) reconciled within 30 days. Quarterly settlements scheduled for net positions.",
    metrics: [
      { label: "IC Receivable", value: "$48,200" },
      { label: "IC Payable", value: "($48,200)" },
      { label: "Consolidation", value: "$0" },
      { label: "Variance", value: "$0" },
    ],
    table: {
      headers: ["Entity", "GL", "Account", "Balance", "Mirror Balance", "Difference"],
      rows: [
        ["Operating", "1290", "Due from Parent", 48200, -48200, 0],
        ["Parent", "2190", "Due to Subsidiary", -48200, 48200, 0],
      ],
      footer: ["CONSOLIDATION", null, null, 0, 0, 0],
    },
  },
  {
    label: "Year-End Full Rec",
    period: "Dec 31, 2023",
    company: "fashion-house",
    theme: "Year-End",
    summary:
      "Year-end full balance sheet account reconciliation across all GL accounts. Required deliverable for external audit, with supporting documentation for each rec.",
    process:
      "Every balance sheet GL reconciled to independent support. Supporting binder organized by account. Auditor select-sample reviewed.",
    metrics: [
      { label: "Accounts Reconciled", value: "32" },
      { label: "Clean Recs", value: "30" },
      { label: "Variances Identified", value: "2" },
      { label: "Audit Selections", value: "8" },
    ],
    table: {
      headers: ["GL Range", "Category", "Accounts", "Clean", "Variances"],
      rows: [
        ["1010-1099", "Cash & Equivalents", 3, 3, 0],
        ["1200-1299", "Accounts Receivable", 4, 4, 0],
        ["1300-1399", "Inventory", 5, 5, 0],
        ["1400-1499", "Prepaid Expenses", 3, 3, 0],
        ["1600-1799", "Fixed & Intangible Assets", 6, 6, 0],
        ["2100-2199", "Accounts Payable", 4, 3, 1],
        ["2200-2299", "Tax Payables", 4, 4, 0],
        ["2300-2399", "Other Current Liab.", 3, 2, 1],
      ],
      footer: [null, "TOTAL", 32, 30, 2],
    },
  },
];

// ============================================================================
// TAX RETURNS TRACKER (Fashion House)
// ============================================================================
const TAX_TRACKERS: SampleVariant[] = [
  {
    label: "2024 Filing Calendar",
    period: "2024",
    company: "fashion-house",
    theme: "Multi-Jurisdiction",
    summary:
      "Tracked Canadian indirect tax filings across federal, Quebec and BC jurisdictions. Returns prepared from the sales tax sub-ledger and reconciled to GL control accounts before submission.",
    process:
      "Sub-ledger reconciled to GL control accounts. NRT filed weekly; GST/HST, QST and PST on assigned cycles. Filing deadlines monitored to avoid interest and penalties.",
    file: "/7_Tax_Returns_Tracker_HurNusrat.xlsx",
    metrics: [
      { label: "Taxable Sales", value: "$5.73M" },
      { label: "Tax Collected", value: "$728,801" },
      { label: "Net Remittance", value: "$481,971" },
      { label: "Returns Filed", value: "5 of 10" },
    ],
    table: {
      headers: ["Tax", "Frequency", "Period", "Jurisdiction", "Net Remit", "Due", "Status"],
      rows: [
        ["GST/HST", "Monthly", "Feb 2024", "Federal", 27772, "31-Mar", "Filed"],
        ["QST", "Monthly", "Feb 2024", "Quebec", 8647.85, "31-Mar", "Filed"],
        ["PST", "Monthly", "Feb 2024", "British Columbia", 4494, "31-Mar", "Filed"],
        ["NRT", "Weekly", "Wk 11 2024", "Non-Resident", 2775, "19-Mar", "Filed"],
        ["NRT", "Weekly", "Wk 12 2024", "Non-Resident", 3195, "26-Mar", "Filed"],
        ["GST/HST", "Monthly", "Mar 2024", "Federal", 29734, "30-Apr", "In Progress"],
        ["QST", "Monthly", "Mar 2024", "Quebec", 9174.7, "30-Apr", "In Progress"],
        ["PST", "Monthly", "Mar 2024", "British Columbia", 4998, "30-Apr", "In Progress"],
        ["GST/HST", "Quarterly", "Q1 2024", "Federal", 86380, "30-Apr", "Not Started"],
        ["GST/HST", "Annual", "FY 2023", "Federal", 304800, "30-Jun", "Not Started"],
      ],
      footer: [null, null, null, "TOTAL", 481970.55, null, null],
    },
  },
  {
    label: "GST/HST Monthly",
    period: "April 2024",
    company: "fashion-house",
    theme: "GST/HST",
    summary:
      "Monthly GST/HST return preparation for April 2024. Output tax on sales netted against input tax credits to calculate net remittance.",
    process:
      "Sales tax sub-ledger pulled at month-end. Output tax by sales line summed. ITC analyzed against AP invoices to confirm eligible inputs. Return filed via CRA My Business Account.",
    metrics: [
      { label: "Taxable Sales", value: "$368,400" },
      { label: "Output Tax", value: "$47,892" },
      { label: "Input Tax Credits", value: "$16,420" },
      { label: "Net Remittance", value: "$31,472" },
    ],
    table: {
      headers: ["Line", "Description", "Amount"],
      rows: [
        ["101", "Sales and other revenue", 368400],
        ["103", "GST/HST collected", 47892],
        ["106", "Input tax credits", 16420],
        ["109", "Net tax (103 - 106)", 31472],
        ["110", "Instalment payments", 0],
        ["111", "Rebates", 0],
        ["112", "Balance due", 31472],
      ],
    },
  },
  {
    label: "QST Monthly",
    period: "April 2024",
    company: "fashion-house",
    theme: "QST",
    summary:
      "Monthly QST return for Quebec sales. Filed through Revenu Quebec's online portal. Separate from GST/HST despite covering same transactions in Quebec.",
    process:
      "Quebec sales tax sub-ledger reconciled. QST registration verified for all Quebec customers. Output tax compared to GST/HST output for QC sales as cross-check.",
    metrics: [
      { label: "QC Taxable Sales", value: "$152,400" },
      { label: "QST Collected", value: "$15,201" },
      { label: "QST Input Credits", value: "$5,240" },
      { label: "Net Remittance", value: "$9,961" },
    ],
    table: {
      headers: ["Line", "Description", "Amount"],
      rows: [
        ["201", "Quebec sales", 152400],
        ["203", "QST collected (9.975%)", 15201],
        ["205", "QST input tax refund", 5240],
        ["207", "Net QST payable", 9961],
        ["209", "Refund or balance due", 9961],
      ],
    },
  },
  {
    label: "PST Monthly",
    period: "April 2024",
    company: "fashion-house",
    theme: "PST",
    summary:
      "Monthly BC PST return covering taxable retail sales to BC consumers. Wholesale/resale sales exempt with valid PST exemption certificates collected.",
    process:
      "Retail vs wholesale split verified. PST exemption certificates collected for wholesale customers. Out-of-province sales separately tracked.",
    metrics: [
      { label: "BC Retail Sales", value: "$78,400" },
      { label: "PST Collected (7%)", value: "$5,488" },
      { label: "Net Remittance", value: "$5,488" },
      { label: "Exempt Sales", value: "$28,400" },
    ],
    table: {
      headers: ["Line", "Description", "Amount"],
      rows: [
        ["A", "Total BC sales", 106800],
        ["B", "Less: Exempt sales", -28400],
        ["C", "Taxable BC sales", 78400],
        ["D", "PST collected (7%)", 5488],
        ["E", "Commission (cap $198)", -198],
        ["F", "Net PST due", 5290],
      ],
    },
  },
  {
    label: "Non-Resident Tax",
    period: "Q2 2024",
    company: "fashion-house",
    theme: "NRT",
    summary:
      "Non-Resident Tax filings for payments to foreign suppliers (royalty payments to foreign brand licensors). Filed weekly per CRA non-resident remittance rules.",
    process:
      "All payments to non-residents reviewed for Part XIII withholding requirement. Tax withheld at source and remitted weekly via NR-4 process.",
    metrics: [
      { label: "Q2 NRT Remitted", value: "$24,420" },
      { label: "Filing Frequency", value: "Weekly" },
      { label: "Filings Submitted", value: "13" },
      { label: "On-Time Rate", value: "100%" },
    ],
    table: {
      headers: ["Week", "Recipient", "Country", "Payment", "Tax Rate", "NRT"],
      rows: [
        ["W14", "Paris Brand Licensor", "France", 28000, "10%", 2800],
        ["W15", "Milano Designer Fee", "Italy", 18400, "15%", 2760],
        ["W16", "Paris Brand Licensor", "France", 24000, "10%", 2400],
        ["W17", "NY Brand Consultants", "USA", 12400, "10%", 1240],
        ["W18", "Milano Designer Fee", "Italy", 21000, "15%", 3150],
        ["W19", "Paris Brand Licensor", "France", 32400, "10%", 3240],
        ["W20", "London Trademark Agent", "UK", 18000, "10%", 1800],
        ["W21", "Paris Brand Licensor", "France", 18000, "10%", 1800],
        ["W22", "Milano Designer Fee", "Italy", 14000, "15%", 2100],
        ["W23", "Hong Kong Sourcing", "HK", 22000, "15%", 3300],
      ],
      footer: [null, null, null, 208200, null, 24590],
    },
  },
  {
    label: "Q1 GST/HST",
    period: "Q1 2024",
    company: "fashion-house",
    theme: "Quarterly",
    summary:
      "Quarterly GST/HST return consolidating monthly filings. Used for businesses on quarterly filing cadence; this entity also files monthly for cash flow reasons.",
    process:
      "Three monthly returns rolled into quarterly summary. Reconciled to GL quarter-end tax balances. Quarterly variance analysis vs Q1 prior year.",
    metrics: [
      { label: "Q1 Taxable Sales", value: "$982,000" },
      { label: "Q1 Output Tax", value: "$127,660" },
      { label: "Q1 ITCs", value: "$41,280" },
      { label: "Q1 Net Remit", value: "$86,380" },
    ],
    table: {
      headers: ["Period", "Taxable Sales", "Output Tax", "ITCs", "Net Remit"],
      rows: [
        ["January 2024", 312400, 40612, 12840, 27772],
        ["February 2024", 323800, 42094, 13220, 28874],
        ["March 2024", 345800, 44954, 15220, 29734],
      ],
      footer: ["Q1 TOTAL", 982000, 127660, 41280, 86380],
    },
  },
  {
    label: "Annual GST/HST",
    period: "FY 2023",
    company: "fashion-house",
    theme: "Annual",
    summary:
      "Annual GST/HST return summarizing FY23 monthly filings. Used as comprehensive year-end reconciliation against the GL and annual financial statements.",
    process:
      "12 monthly returns rolled up. Reconciled to FY23 revenue per income statement. Variances explained: revenue recognition timing, exempt sales adjustments.",
    metrics: [
      { label: "FY23 Taxable Sales", value: "$3.64M" },
      { label: "FY23 Output Tax", value: "$473,200" },
      { label: "FY23 ITCs", value: "$168,400" },
      { label: "FY23 Net Remit", value: "$304,800" },
    ],
    table: {
      headers: ["Quarter", "Taxable Sales", "Output Tax", "ITCs", "Net Remit"],
      rows: [
        ["Q1 2023", 824000, 107120, 42400, 64720],
        ["Q2 2023", 868000, 112840, 44200, 68640],
        ["Q3 2023", 964000, 125320, 42800, 82520],
        ["Q4 2023", 984000, 127920, 39000, 88920],
      ],
      footer: ["FY 2023", 3640000, 473200, 168400, 304800],
    },
  },
  {
    label: "Tax Audit Support",
    period: "Q3 2023",
    company: "fashion-house",
    theme: "Audit",
    summary:
      "Tax authority audit support file covering Q1-Q2 2023 GST/HST returns. CRA selected the period for review; documentation prepared and submitted within deadline.",
    process:
      "Audit request received. Source documentation pulled: invoices, sub-ledger detail, sales journals, bank statements. All matched to returns line-by-line.",
    metrics: [
      { label: "Period Audited", value: "Q1-Q2 2023" },
      { label: "Docs Submitted", value: "1,240" },
      { label: "Adjustments", value: "$0" },
      { label: "Outcome", value: "Clean" },
    ],
    table: {
      headers: ["Doc Type", "Quantity", "Period", "Status"],
      rows: [
        ["Sales invoices", 824, "Q1-Q2 2023", "Submitted"],
        ["Purchase invoices", 412, "Q1-Q2 2023", "Submitted"],
        ["Bank statements", 12, "Jan-Jun 2023", "Submitted"],
        ["GL trial balance", 6, "Monthly", "Submitted"],
        ["Sales sub-ledger", 6, "Monthly", "Submitted"],
      ],
      footer: [null, 1260, null, null],
    },
  },
  {
    label: "Tax Refund Claim",
    period: "August 2023",
    company: "fashion-house",
    theme: "Refunds",
    summary:
      "GST/HST refund claim filed where ITCs exceeded output tax due to large capex spend in the month. Refund of $14,820 received within 30 days.",
    process:
      "Net negative GST/HST position triggered refund request. Supporting capex invoices reviewed for eligibility. Refund tracked through CRA portal.",
    metrics: [
      { label: "Refund Claimed", value: "$14,820" },
      { label: "Refund Received", value: "$14,820" },
      { label: "Days to Receive", value: "28" },
      { label: "Status", value: "Settled" },
    ],
    table: {
      headers: ["Line", "Description", "Amount"],
      rows: [
        ["101", "Sales for August 2023", 218400],
        ["103", "GST/HST output tax", 28392],
        ["106", "Input tax credits", 43212],
        ["106A", "Capex ITC component", -28480],
        ["109", "Net tax (refund position)", -14820],
        ["111", "Refund claimed", 14820],
      ],
    },
  },
  {
    label: "Cross-Border Tax",
    period: "May 2024",
    company: "fashion-house",
    theme: "International",
    summary:
      "Cross-border tax tracking for US sales: monitored nexus thresholds in each state, tracked use tax on inventory transfers, and prepared state sales tax filings where required.",
    process:
      "US state nexus thresholds monitored monthly. Where exceeded, state registration triggered and monthly returns prepared. Wayfair compliance reviewed annually.",
    metrics: [
      { label: "US States Active", value: "8" },
      { label: "Nexus Triggered", value: "3" },
      { label: "State Tax Collected", value: "USD $4,820" },
      { label: "Compliance Status", value: "Current" },
    ],
    table: {
      headers: ["State", "Sales YTD", "Threshold", "Nexus", "Tax Collected", "Status"],
      rows: [
        ["California", 184000, 500000, "No", 0, "Monitor"],
        ["New York", 124000, 500000, "No", 0, "Monitor"],
        ["Washington", 84000, 100000, "No", 0, "Monitor"],
        ["Florida", 124000, 100000, "Yes", 8680, "Filing"],
        ["Texas", 184000, 100000, "Yes", 11385, "Filing"],
        ["Illinois", 142000, 100000, "Yes", 9088, "Filing"],
      ],
      footer: [null, 842000, null, null, 29153, null],
    },
  },
];

export const SAMPLE_SERIES: Record<string, SampleVariant[]> = {
  "manual-expense-reports": EXPENSE_REPORT_VARIANTS,
  "outgoing-payments-register": PAYMENTS_VARIANTS,
  "cash-receipts-application": CASH_RECEIPTS,
  "ap-query-tracker": AP_QUERIES,
  "month-end-journal-entries": MONTH_END_JES,
  "gl-account-reconciliations": GL_RECONS,
  "tax-returns-tracker": TAX_TRACKERS,
};
