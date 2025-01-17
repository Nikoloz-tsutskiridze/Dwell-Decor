import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Containter from "@/components/global/Containter";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwell & Decor",
  description: "Store built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable} ${robotoMono.variable} antialiased`}
        >
          <Providers>
            <Navbar />
            <Containter className="py-20">{children}</Containter>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
