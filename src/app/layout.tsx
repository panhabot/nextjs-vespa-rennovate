import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Nav from "./nav";

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
      <body className={`${popin.className} px-4`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
