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
  title: "Marzuk Haider Chowdhury - Data Analytics Professional",
  description: "Data Analytics Professional specializing in data visualization, SQL, R programming, and business intelligence. Google Data Analytics certified with experience in financial operations and customer service.",
  keywords: "Data Analytics, SQL, R Programming, Data Visualization, Business Intelligence, Google Data Analytics, Marzuk Chowdhury",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
