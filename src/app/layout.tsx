import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marzuk Haider Chowdhury | Accounting Portfolio",
  description:
    "Accounting work portfolio of Marzuk Haider Chowdhury. Full-cycle financial statement preparation including general journal, T-accounts, trial balance, income statement and balance sheet. Based in Burnaby, BC.",
  keywords:
    "Marzuk Chowdhury, Accounting Portfolio, Accountant, Financial Statements, Journal Entries, Trial Balance, Income Statement, Balance Sheet, AP, AR, Reconciliations, SAP, Microsoft Dynamics 365, Xero",
  authors: [{ name: "Marzuk Haider Chowdhury" }],
  creator: "Marzuk Haider Chowdhury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
