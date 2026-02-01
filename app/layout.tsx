import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DM_Sans } from 'next/font/google';
import { Providers } from "@/components/provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Property",
  description: "Real state App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${dmSans.className} antialiased`}
      >
      <Providers>
        <NavBar />
          {children} 
          <Footer/>
          </Providers>
      </body>
    </html>
  );
}
