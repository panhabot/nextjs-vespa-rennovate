import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import { Suspense } from "react";

const popin = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vespa",
  description: "Vespa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${popin.className} relative px-4 max-h-screen `}>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
