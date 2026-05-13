import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Decision Engine — Build Smarter Decision Workflows",
  description:
    "Automate complex business logic with visual workflows. Connect data, APIs, and services without code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <main id="main-content" className="flex flex-col w-full flex-1">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
