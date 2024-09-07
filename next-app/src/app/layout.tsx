'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} />
        <link rel="icon" type="image/x-icon" href="/favicon-32x32.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {pathname !== "/auth" && <Navbar />}
        {children}
        {pathname !== "/auth" && <Chatbot />}
      </body>
    </html>
  );
}