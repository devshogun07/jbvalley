import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB Konkan Valley",
  description:
    "Er. Papeshwar Rao Berelli — 41 years across public civil infrastructure and private township development. Nine sanctioned ventures across Telangana and Andhra Pradesh. Founder & Designated Partner, JB Valley Homes Infra LLP.",
  icons: ["/jblogo.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
