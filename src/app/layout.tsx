import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const Monsterrat = Montserrat({
  variable: "--font-monsterrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timio AI",
  description: "The AI tool you always needed!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Monsterrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
