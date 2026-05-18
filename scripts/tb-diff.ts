import { TRIAL_BALANCE_VARIANTS } from "../src/lib/trial-balance-variants";

TRIAL_BALANCE_VARIANTS.forEach((v, i) => {
  const dr = v.rows.reduce((a, r) => a + (r.debit || 0), 0);
  const cr = v.rows.reduce((a, r) => a + (r.credit || 0), 0);
  const diff = dr - cr;
  if (Math.abs(diff) > 0.01 || Math.abs(dr - v.totalDebits) > 0.01) {
    console.log(`#${i + 1} "${v.label}" (${v.period})`);
    console.log(`  Debits: ${dr.toLocaleString()}, Credits: ${cr.toLocaleString()}, Diff: ${diff.toLocaleString()}`);
    console.log(`  Stated: ${v.totalDebits.toLocaleString()} / ${v.totalCredits.toLocaleString()}`);
    // Find retained earnings row
    const re = v.rows.find((r) => r.account.includes("Retained Earnings"));
    if (re) {
      console.log(`  RE row: Dr ${re.debit}, Cr ${re.credit}`);
    } else {
      console.log(`  No Retained Earnings row`);
    }
    console.log("");
  }
});
