import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from '@/components/navbar/navbar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delighted Games",
  description: "A Christian Indie Game Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link precedence="default"
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
