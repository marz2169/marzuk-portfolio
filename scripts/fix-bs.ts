import { BALANCE_SHEET_VARIANTS } from "../src/lib/balance-sheet-variants";

BALANCE_SHEET_VARIANTS.forEach((v, i) => {
  const taLine = v.lines.find(
    (l) => l.type === "total" && l.label.includes("TOTAL ASSETS") && !l.label.includes("LIABILITIES")
  );
  const tlLine = v.lines.find((l) => l.label === "TOTAL LIABILITIES");
  const teLine = v.lines.find(
    (l) => l.label === "TOTAL EQUITY" || l.label === "TOTAL SHAREHOLDERS' EQUITY"
  );
  const taeLine = v.lines.find((l) => l.type === "total" && l.label.includes("LIABILITIES & EQUITY"));

  const TA = taLine?.amount ?? null;
  const TL = tlLine?.amount ?? null;
  const TE = teLine?.amount ?? null;
  const TAE = taeLine?.amount ?? null;

  console.log(`\n#${i + 1} "${v.label}" (${v.period})`);
  console.log(`  Stated:  TA=${v.totalAssets}, TL=${v.totalLiabilities}, TE=${v.totalEquity}`);
  console.log(`  Lines:   TA=${TA}, TL=${TL}, TE=${TE}, TA&E=${TAE}`);
  if (TA !== null && TL !== null && TE !== null) {
    console.log(`  TL+TE = ${TL + TE} ${TL + TE === TA ? "✓" : "✗ MISMATCH"}`);
  }
  // Suggested corrections
  if (TA !== null && (TA !== v.totalAssets || TL !== v.totalLiabilities || TE !== v.totalEquity)) {
    console.log(`  Suggested: totalAssets: ${TA}, totalLiabilities: ${TL}, totalEquity: ${TE}`);
    if (TL !== null && TE !== null && TE !== 0) {
      const newDE = TL / TE;
      console.log(`             debtToEquity: ${newDE.toFixed(2)}`);
    }
  }
});
