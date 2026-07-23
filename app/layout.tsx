import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JB Valley Homes Infra LLP — Master Township & Infrastructure Developer",
  description:
    "JB Valley Homes Infra LLP — Institutional township developer executing master-planned infrastructure, large-scale land assembly, and the flagship 3,500+ acre Konkan Valley project.",
  icons: ["/jblogo-redesign.svg"],
  openGraph: {
    title: "JB Valley Homes Infra LLP — Master Township & Infrastructure Developer",
    description:
      "Institutional township developer executing master-planned infrastructure and large-scale land assembly.",
    images: ["/master-vision.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0D192B] text-white">
        {children}
      </body>
    </html>
  );
}
