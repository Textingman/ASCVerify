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
  metadataBase: new URL("https://ascverify.com"),
  title: "ASC Verify | Identity, Privacy & Compliance",
  description:
    "SMS verification and privacy solutions for businesses and consumers.",
  openGraph: {
    title: "ASC Verify | Identity, Privacy & Compliance",
    description:
      "SMS verification and privacy solutions for businesses and consumers.",
    url: "https://ascverify.com",
    siteName: "ASC Verify",
    images: [
      {
        url: "/ASC Verify.png",
        width: 500,
        height: 167,
        alt: "ASC Verify",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASC Verify | Identity, Privacy & Compliance",
    description:
      "SMS verification and privacy solutions for businesses and consumers.",
    images: ["/ASC Verify.png"],
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
