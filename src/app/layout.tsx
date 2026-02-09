import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const moderniz = localFont({
  src: "./fonts/Moderniz.otf",
  variable: "--font-moderniz",
});

export const metadata: Metadata = {
  title: "L7-Pro | Exzellenz in sieben Dimensionen",
  description: "Transport, Vertrieb, Sanierung, Reinigung, Baustoffhandel, Marketing & Personalservice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${moderniz.variable} antialiased relative`}
      >
        <AnimatedBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
