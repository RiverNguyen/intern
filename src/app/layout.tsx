import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "@/config/font";

export const metadata: Metadata = {
  title: "Amnitest",
  description: "Amnitest",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
