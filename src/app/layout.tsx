import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/animations.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iSertu - Premium Health & Wellness Products",
  description: "Transform your health naturally with our premium wellness products backed by science and natural ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-gray-900 antialiased`}
        suppressHydrationWarning={true}
      >
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
