import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const ninoMtavruli = localFont({
  src: "../fonts/bpg_nino_mtavruli_normal.ttf",
  variable: "--font-nino-mtavruli",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landscape website",
  description: "Landscaping services right to your door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ninoMtavruli.variable} ${geistSans.variable} ${geistMono.variable} ${ninoMtavruli.className} antialiased`}
      >
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
