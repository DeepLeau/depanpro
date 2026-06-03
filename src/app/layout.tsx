import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dépan.Pro — Le dépannage d'urgence, enfin transparent",
  description:
    "Prix clairs. Artisans vérifiés. Intervention rapide et éthique — sans la panique, sans l'arnaque.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}
