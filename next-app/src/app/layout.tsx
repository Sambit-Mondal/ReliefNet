import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReliefNet",
  description: "ReliefNet is a platform that will serve as an integrated disaster management system designed to assist government agencies, NGOs, and communities in planning for, responding to, and recovering from disasters. It combines predictive analytics, real-time communication, and resource optimization to minimize risks and enhance disaster preparedness and response.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}