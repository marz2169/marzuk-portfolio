import { JOURNAL_VARIANTS } from "../src/lib/journal-variants";
import { TRIAL_BALANCE_VARIANTS } from "../src/lib/trial-balance-variants";
import { INCOME_STATEMENT_VARIANTS } from "../src/lib/income-statement-variants";
import { BALANCE_SHEET_VARIANTS } from "../src/lib/balance-sheet-variants";

console.log("=== CROSS-STATEMENT REFERENCE CHECK ===\n");

// FY22 Fashion House should be consistent across statements
const fy22Journal = JOURNAL_VARIANTS.find((v) => v.label === "Annual Journal" && v.period === "FY 2022");
const fy22TB = TRIAL_BALANCE_VARIANTS.find((v) => v.label === "Year-End Trial Balance" && v.period === "Dec 31, 2022");
const fy22IS = INCOME_STATEMENT_VARIANTS.find((v) => v.label === "Annual Income Statement" && v.period === "FY 2022");
const fy22BS = BALANCE_SHEET_VARIANTS.find((v) => v.label === "Year-End Balance Sheet" && v.period === "Dec 31, 2022");

console.log("FY22 FASHION HOUSE CROSS-CHECK:");
console.log(`  Journal Annual debits/credits: $${fy22Journal?.totalDebits.toLocaleString()}`);
console.log(`  Trial Balance Year-End:        $${fy22TB?.totalDebits.toLocaleString()}`);
console.log(`  Income Statement Revenue:      $${fy22IS?.revenue.toLocaleString()}`);
console.log(`  Income Statement Net Income:   $${fy22IS?.netIncome.toLocaleString()}`);
console.log(`  Balance Sheet Total Assets:    $${fy22BS?.totalAssets.toLocaleString()}`);
console.log(`  Balance Sheet Total Equity:    $${fy22BS?.totalEquity.toLocaleString()}`);

// Income statement to Balance Sheet flow: NI - Dividends = Retained Earnings
const re = fy22BS?.lines.find((l) => l.label === "Retained Earnings" && l.type === "subtotal");
console.log(`  Balance Sheet Retained Earnings: $${re?.amount?.toLocaleString()}`);
console.log(`  Expected RE = NI - Dividends = ${fy22IS!.netIncome - 50000} = $${(fy22IS!.netIncome - 50000).toLocaleString()}`);
if (re?.amount === fy22IS!.netIncome - 50000) {
  console.log(`  ✓ Net Income flows to Retained Earnings correctly`);
} else {
  console.log(`  ✗ MISMATCH between IS net income and BS retained earnings`);
}

// Income statement margin sanity
console.log(`\nINCOME STATEMENT MARGIN CHECKS:`);
INCOME_STATEMENT_VARIANTS.forEach((v) => {
  const computed = v.netIncome / v.revenue;
  const stated = v.netMargin;
  const match = Math.abs(computed - stated) < 0.005 ? "✓" : "✗";
  console.log(`  ${match} ${v.label} (${v.period}): stated ${(stated * 100).toFixed(1)}% vs computed ${(computed * 100).toFixed(1)}%`);
});

// Balance sheet equation check
console.log(`\nBALANCE SHEET EQUATION CHECK (A = L + E):`);
BALANCE_SHEET_VARIANTS.forEach((v) => {
  const expected = v.totalLiabilities + v.totalEquity;
  const match = Math.abs(expected - v.totalAssets) < 1 ? "✓" : "✗";
  console.log(`  ${match} ${v.label} (${v.period}): TA $${v.totalAssets.toLocaleString()} vs TL+TE $${expected.toLocaleString()}`);
});

// Working capital sanity: WC = current assets - current liabilities
// Current ratio = current assets / current liabilities
console.log(`\nWORKING CAPITAL / RATIO INTERNAL CONSISTENCY:`);
BALANCE_SHEET_VARIANTS.forEach((v) => {
  // Internal ratio check: D/E
  if (v.totalEquity !== 0) {
    const computedDE = v.totalLiabilities / v.totalEquity;
    const match = Math.abs(computedDE - v.debtToEquity) < 0.05 ? "✓" : "✗";
    if (match === "✗") {
      console.log(`  ${match} ${v.label}: D/E stated ${v.debtToEquity} vs computed ${computedDE.toFixed(2)}`);
    }
  }
});

console.log("\n=== END CROSS-CHECK ===");
