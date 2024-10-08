import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "@/redux/providers";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Great fake for your fake life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-600">
      <body className={`${inter.className}`}>
        <NextUIProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
