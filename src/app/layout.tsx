import type { Metadata } from "next";
import Providers from "./providers";

import "./globals.css";
import { SITE_NAME } from "@/constants";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "Yet another Rick and Morty API website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
