import { JOURNAL_VARIANTS } from "../src/lib/journal-variants";
import { T_ACCOUNT_VARIANTS } from "../src/lib/t-account-variants";
import { TRIAL_BALANCE_VARIANTS } from "../src/lib/trial-balance-variants";
import { INCOME_STATEMENT_VARIANTS } from "../src/lib/income-statement-variants";
import { BALANCE_SHEET_VARIANTS } from "../src/lib/balance-sheet-variants";
import { SAMPLE_SERIES } from "../src/lib/sample-variants";

console.log("=== DUPLICATE / COUNT CHECK ===\n");

function checkDups(name: string, variants: { label: string; period: string }[]) {
  const labels = variants.map((v) => `${v.label} (${v.period})`);
  const seen = new Set<string>();
  const dups: string[] = [];
  labels.forEach((l) => {
    if (seen.has(l)) dups.push(l);
    seen.add(l);
  });
  console.log(`${name}: ${variants.length} variants ${dups.length ? `— DUPLICATES: ${dups.join(", ")}` : "✓"}`);
}

checkDups("Journal", JOURNAL_VARIANTS);
checkDups("T-Accounts", T_ACCOUNT_VARIANTS);
checkDups("Trial Balance", TRIAL_BALANCE_VARIANTS);
checkDups("Income Statement", INCOME_STATEMENT_VARIANTS);
checkDups("Balance Sheet", BALANCE_SHEET_VARIANTS);

console.log("\nSAMPLE SERIES:");
let totalSampleVariants = 0;
for (const [slug, variants] of Object.entries(SAMPLE_SERIES)) {
  checkDups(`  ${slug}`, variants);
  totalSampleVariants += variants.length;
}

const statementVariants =
  JOURNAL_VARIANTS.length +
  T_ACCOUNT_VARIANTS.length +
  TRIAL_BALANCE_VARIANTS.length +
  INCOME_STATEMENT_VARIANTS.length +
  BALANCE_SHEET_VARIANTS.length;

console.log(`\nTOTAL VARIANTS: ${statementVariants + totalSampleVariants}`);
console.log(`  Statement section variants: ${statementVariants}`);
console.log(`  Sample series variants:     ${totalSampleVariants}`);
