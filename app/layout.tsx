import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Gezat Communications- New Year Wish",
  description: "Get your personalized New Year wish from our creative agency.",
  openGraph: {
    images: [
      {
        url: "/Img/bg.png",
        width: 1200,
        height: 630,
        alt: "Gezat New Year Wish Background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/Img/bg.png",
        width: 1200,
        height: 630,
        alt: "Gezat New Year Wish Background",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
