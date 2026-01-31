import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/nav";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boris Vicena",
  description:
    "Developer building tools for creators. Currently at Lenovo, previously ran GoSocial. Based in Slovakia.",
  keywords: [
    "Boris Vicena",
    "Developer",
    "Creator Economy",
    "Digital Products",
    "Slovakia",
    "Vue.js",
    "Next.js",
    "Laravel",
  ],
  authors: [{ name: "Boris Vicena" }],
  openGraph: {
    title: "Boris Vicena",
    description:
      "Developer building tools for creators. Currently at Lenovo, previously ran GoSocial.",
    url: "https://borisvicena.dev",
    siteName: "Boris Vicena",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Boris Vicena",
    description: "Developer building tools for creators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="mx-auto max-w-2xl px-6 py-12 md:py-20">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
      <GoogleAnalytics gaId="G-N006CLMG44" />
    </html>
  );
}
