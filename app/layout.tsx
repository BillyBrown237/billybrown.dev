import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { incognito } from "@/assets/fonts/font";
import { gitlabmono } from "@/assets/fonts/font";
import Footer from "@/components/layout/footer";
import { Providers } from "@/providers/providers";
import "./globals.css";
import Navbar from "@/components/layout/header";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const options = {
  title: "Billy Brown | Software Developer",
  description:
    "Billy Brown is a Software Developer with a soft spot for beautiful interfaces and clean code. He is passionate about building products that solve real problems and make people's lives easier.",
  url: "https://dekoubrown.dev",
  ogImage:
    "https://res.cloudinary.com/dqjmfu8ju/image/upload/v1771724172/github-header-image_rywr5o.png",
};

export const metadata: Metadata = {
  title: options.title,
  metadataBase: new URL(options.url),
  description: options.description,
  openGraph: {
    title: options.title,
    url: options.url,
    siteName: "www.dekoubrown.dev",
    locale: "en-GB",
    type: "website",
    description: options.description,
    images: options.ogImage,
  },
  alternates: {
    canonical: options.url,
  },
  other: {
    // "google-site-verification": "IzcWMgn5Qjf-LCtA337KTGjivsf9bmod_1pZ-jxYQh8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}