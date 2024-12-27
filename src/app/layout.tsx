import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MyNavbar from "./Navigation/page";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next js",
  description: "Generated by create next app",
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
         <header className="bg-blue-600 text-white p-8 text-center">
       <MyNavbar/>
         </header>
        {children}
      </body>
    </html>
  );
}
