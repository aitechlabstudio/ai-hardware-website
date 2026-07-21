import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA One | Personal AI Hardware",
  description:
    "NOVA One is a premium AI personal hardware device built for private, ambient intelligence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
