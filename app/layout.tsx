import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Marwan Ashraf | AI Engineer",
  description:
    "AI Engineer specializing in Machine Learning, LLMs, Computer Vision, NLP, and Data Science.",

  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "LLMs",
    "NLP",
    "PyTorch",
    "FastAPI",
    "Data Science",
    "Marwan Ashraf",
  ],

  authors: [
    {
      name: "Marwan Ashraf",
    },
  ],

  creator: "Marwan Ashraf",

  openGraph: {
    title: "Marwan Ashraf | AI Engineer",
    description:
      "Portfolio of AI Engineer Marwan Ashraf showcasing AI, Machine Learning, Computer Vision, and LLM projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
