import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gin Comici | Ridi Responsabilmente",
  description: "Più gin che gym. Stanup ma anche down & more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${montserrat.variable} antialiased bg-black text-brand-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
