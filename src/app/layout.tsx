import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marzuk Haider Chowdhury | Accounting Portfolio",
  description:
    "Accounting work portfolio of Marzuk Haider Chowdhury. Full-cycle financial statement preparation including general journal, T-accounts, trial balance, income statement and balance sheet. BCIT Diploma of Accounting candidate based in Burnaby, BC.",
  keywords:
    "Marzuk Chowdhury, Accounting Portfolio, Corporate Accountant Clerk, Financial Statements, Journal Entries, Trial Balance, Income Statement, Balance Sheet, BCIT Accounting, Burnaby BC",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
