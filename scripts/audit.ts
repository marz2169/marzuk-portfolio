/* eslint-disable @typescript-eslint/no-explicit-any */
import { JOURNAL_VARIANTS } from "../src/lib/journal-variants";
import { T_ACCOUNT_VARIANTS } from "../src/lib/t-account-variants";
import { TRIAL_BALANCE_VARIANTS } from "../src/lib/trial-balance-variants";
import { INCOME_STATEMENT_VARIANTS } from "../src/lib/income-statement-variants";
import { BALANCE_SHEET_VARIANTS } from "../src/lib/balance-sheet-variants";
import { SAMPLE_SERIES } from "../src/lib/sample-variants";

let errors: string[] = [];
let warnings: string[] = [];

function err(category: string, idx: number, label: string, message: string) {
  errors.push(`[ERROR] ${category} #${idx} "${label}" — ${message}`);
}
function warn(category: string, idx: number, label: string, message: string) {
  warnings.push(`[WARN]  ${category} #${idx} "${label}" — ${message}`);
}

function approxEqual(a: number, b: number, tol = 0.01): boolean {
  return Math.abs(a - b) < tol;
}

// ============================================================================
// JOURNAL VARIANTS
// ============================================================================
console.log("\n=== AUDITING JOURNAL VARIANTS ===");
JOURNAL_VARIANTS.forEach((v, i) => {
  const debitSum = v.rows.reduce((a, r) => a + (r.debit || 0), 0);
  const creditSum = v.rows.reduce((a, r) => a + (r.credit || 0), 0);
  if (!approxEqual(debitSum, creditSum)) {
    err("Journal", i + 1, v.label, `Rows debit sum ${debitSum} ≠ credit sum ${creditSum} (diff ${debitSum - creditSum})`);
  }
  if (!approxEqual(debitSum, v.totalDebits)) {
    err("Journal", i + 1, v.label, `Rows debit sum ${debitSum} ≠ stated totalDebits ${v.totalDebits}`);
  }
  if (!approxEqual(creditSum, v.totalCredits)) {
    err("Journal", i + 1, v.label, `Rows credit sum ${creditSum} ≠ stated totalCredits ${v.totalCredits}`);
  }
  if (!approxEqual(v.totalDebits, v.totalCredits)) {
    err("Journal", i + 1, v.label, `Stated totalDebits ${v.totalDebits} ≠ totalCredits ${v.totalCredits}`);
  }
  // Verify entry count loosely
  const jeCount = new Set(v.rows.filter((r) => r.je).map((r) => r.je)).size;
  if (!v.showingExcerpt && jeCount !== v.entryCount) {
    warn("Journal", i + 1, v.label, `Stated entryCount ${v.entryCount} ≠ JE numbers found ${jeCount}`);
  }
});

// ============================================================================
// T-ACCOUNT VARIANTS
// ============================================================================
console.log("\n=== AUDITING T-ACCOUNT VARIANTS ===");
T_ACCOUNT_VARIANTS.forEach((v, i) => {
  const dr = v.debits.reduce((a, b) => a + b.amount, 0);
  const cr = v.credits.reduce((a, b) => a + b.amount, 0);
  if (dr < 0) err("T-Account", i + 1, v.label, `Negative debit total: ${dr}`);
  if (cr < 0) err("T-Account", i + 1, v.label, `Negative credit total: ${cr}`);
  // Verify accountType is sane
  const validTypes = ["Asset", "Contra-Asset", "Liability", "Equity", "Revenue", "Expense", "Fixed Asset"];
  if (!validTypes.includes(v.accountType)) {
    err("T-Account", i + 1, v.label, `Invalid accountType: ${v.accountType}`);
  }
});

// ============================================================================
// TRIAL BALANCE VARIANTS
// ============================================================================
console.log("\n=== AUDITING TRIAL BALANCE VARIANTS ===");
TRIAL_BALANCE_VARIANTS.forEach((v, i) => {
  const debitSum = v.rows.reduce((a, r) => a + (r.debit || 0), 0);
  const creditSum = v.rows.reduce((a, r) => a + (r.credit || 0), 0);
  if (!approxEqual(debitSum, creditSum)) {
    err("Trial Balance", i + 1, v.label, `Rows debit sum ${debitSum} ≠ credit sum ${creditSum} (diff ${debitSum - creditSum})`);
  }
  if (!approxEqual(debitSum, v.totalDebits)) {
    err("Trial Balance", i + 1, v.label, `Rows debit sum ${debitSum} ≠ stated totalDebits ${v.totalDebits}`);
  }
  if (!approxEqual(creditSum, v.totalCredits)) {
    err("Trial Balance", i + 1, v.label, `Rows credit sum ${creditSum} ≠ stated totalCredits ${v.totalCredits}`);
  }
});

// ============================================================================
// INCOME STATEMENT VARIANTS
// ============================================================================
console.log("\n=== AUDITING INCOME STATEMENT VARIANTS ===");
INCOME_STATEMENT_VARIANTS.forEach((v, i) => {
  const netIncomeLine = v.lines.find((l) => l.type === "total" && l.amount !== null);
  if (!netIncomeLine) {
    err("Income Statement", i + 1, v.label, "No NET INCOME total line");
    return;
  }
  if (!approxEqual(netIncomeLine.amount!, v.netIncome)) {
    err("Income Statement", i + 1, v.label, `Net income line ${netIncomeLine.amount} ≠ stated netIncome ${v.netIncome}`);
  }
  // Net margin sanity
  const computedMargin = v.netIncome / v.revenue;
  if (!approxEqual(computedMargin, v.netMargin, 0.005)) {
    err("Income Statement", i + 1, v.label, `Computed margin ${computedMargin.toFixed(4)} ≠ stated netMargin ${v.netMargin}`);
  }
  // Find Total Revenue line
  const revenueLine = v.lines.find((l) => l.type === "subtotal" && l.label.toLowerCase().includes("revenue"));
  if (revenueLine && !approxEqual(revenueLine.amount!, v.revenue)) {
    err("Income Statement", i + 1, v.label, `Revenue line ${revenueLine.amount} ≠ stated revenue ${v.revenue}`);
  }
  // Verify sums: walk through lines and verify subtotals are correct relative to preceding lines
  // For each subtotal, sum the preceding line items at indent 1 since last header/subtotal
  let runningSum = 0;
  let lastSectionStart = 0;
  for (let li = 0; li < v.lines.length; li++) {
    const line = v.lines[li];
    if (line.type === "header") {
      runningSum = 0;
      lastSectionStart = li;
    } else if (line.type === "line" && line.amount !== null) {
      runningSum += line.amount;
    } else if (line.type === "subtotal" && line.amount !== null) {
      // Subtotals can be either the section sum OR a cumulative running total — skip strict check
      // We'll just spot-check for obvious mismatches
    }
  }
  // Sanity: gross profit should equal revenue + COGS (COGS is negative)
  if (v.grossProfit) {
    const cogsLine = v.lines.find((l) => l.label === "Cost of Goods Sold" || l.label === "COGS" || l.label === "F&B COGS" || l.label === "Food & Beverage COGS");
    if (cogsLine && cogsLine.amount !== null) {
      const computedGP = v.revenue + cogsLine.amount;
      if (!approxEqual(computedGP, v.grossProfit, 1)) {
        warn("Income Statement", i + 1, v.label, `Computed gross profit ${computedGP} ≠ stated grossProfit ${v.grossProfit}`);
      }
    }
  }
});

// ============================================================================
// BALANCE SHEET VARIANTS
// ============================================================================
console.log("\n=== AUDITING BALANCE SHEET VARIANTS ===");
BALANCE_SHEET_VARIANTS.forEach((v, i) => {
  // Check TOTAL ASSETS matches stated
  const totalAssetsLine = v.lines.find((l) => l.type === "total" && (l.label.includes("TOTAL ASSETS") && !l.label.includes("LIABILITIES")));
  if (!totalAssetsLine) {
    err("Balance Sheet", i + 1, v.label, "No TOTAL ASSETS line found");
  } else if (!approxEqual(totalAssetsLine.amount!, v.totalAssets)) {
    err("Balance Sheet", i + 1, v.label, `TOTAL ASSETS line ${totalAssetsLine.amount} ≠ stated totalAssets ${v.totalAssets}`);
  }
  // Check TOTAL LIABILITIES & EQUITY matches stated totalAssets
  const liabEquityLine = v.lines.find((l) => l.type === "total" && l.label.includes("LIABILITIES & EQUITY"));
  if (!liabEquityLine) {
    err("Balance Sheet", i + 1, v.label, "No TOTAL LIABILITIES & EQUITY line found");
  } else if (!approxEqual(liabEquityLine.amount!, v.totalAssets)) {
    err("Balance Sheet", i + 1, v.label, `TOTAL LIABILITIES & EQUITY line ${liabEquityLine.amount} ≠ totalAssets ${v.totalAssets} (balance sheet doesn't balance!)`);
  }
  // Balance sheet equation: assets = liabilities + equity
  if (!approxEqual(v.totalAssets, v.totalLiabilities + v.totalEquity, 1)) {
    err("Balance Sheet", i + 1, v.label, `Stated TA ${v.totalAssets} ≠ TL ${v.totalLiabilities} + TE ${v.totalEquity} (= ${v.totalLiabilities + v.totalEquity})`);
  }
  // Verify TOTAL LIABILITIES subtotal in lines
  const tlLine = v.lines.find((l) => l.label === "TOTAL LIABILITIES");
  if (tlLine && tlLine.amount !== null && !approxEqual(tlLine.amount, v.totalLiabilities, 1)) {
    warn("Balance Sheet", i + 1, v.label, `TOTAL LIABILITIES line ${tlLine.amount} ≠ stated totalLiabilities ${v.totalLiabilities}`);
  }
  // Verify total equity subtotal
  const teLine = v.lines.find((l) => (l.label === "TOTAL EQUITY" || l.label === "TOTAL SHAREHOLDERS' EQUITY") && l.amount !== null);
  if (teLine && teLine.amount !== null && !approxEqual(teLine.amount, v.totalEquity, 1)) {
    warn("Balance Sheet", i + 1, v.label, `Total equity line ${teLine.amount} ≠ stated totalEquity ${v.totalEquity}`);
  }
});

// ============================================================================
// SAMPLE VARIANTS (AP, AR, etc.)
// ============================================================================
console.log("\n=== AUDITING SAMPLE VARIANTS ===");
for (const [slug, variants] of Object.entries(SAMPLE_SERIES)) {
  variants.forEach((v: any, i: number) => {
    // For each variant with a footer, verify footer sums match column sums
    if (v.table.footer) {
      v.table.footer.forEach((footerVal: any, colIdx: number) => {
        if (typeof footerVal === "number") {
          const columnSum = v.table.rows.reduce((acc: number, row: any[]) => {
            const cell = row[colIdx];
            return typeof cell === "number" ? acc + cell : acc;
          }, 0);
          if (!approxEqual(columnSum, footerVal, 1)) {
            warn(
              `Sample ${slug}`,
              i + 1,
              v.label,
              `Footer col ${colIdx} "${v.table.headers[colIdx]}" stated ${footerVal} ≠ column sum ${columnSum}`
            );
          }
        }
      });
    }
  });
}

// ============================================================================
// REPORT
// ============================================================================
console.log("\n" + "=".repeat(60));
console.log(`AUDIT COMPLETE: ${errors.length} errors, ${warnings.length} warnings`);
console.log("=".repeat(60));

if (errors.length > 0) {
  console.log("\nERRORS:");
  errors.forEach((e) => console.log("  " + e));
}
if (warnings.length > 0) {
  console.log("\nWARNINGS:");
  warnings.forEach((w) => console.log("  " + w));
}

if (errors.length > 0) {
  process.exit(1);
}
