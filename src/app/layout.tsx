import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac — Bezliab Graphics | Portfolio 2026",
  description: "Passionate graphic designer with 5+ years of experience in brand identity, editorial design, packaging, poster design, and video editing. Based in Nigeria.",
  keywords: ["graphic designer","brand identity","logo design","editorial design","packaging","video editing","poster design","Nigeria","Bezliab Graphics","Isaac"],
  authors: [{ name: "Isaac — Bezliab Graphics" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
