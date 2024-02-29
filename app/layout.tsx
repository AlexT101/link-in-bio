import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://link-in-bio.vercel.app/'),
  title: "AlexT / Link in Bio",
  description: "Consolidate your links and control your traffic flow.",
  openGraph: {
    title: "AlexT / Link in Bio",
    description: "Consolidate your links and control your traffic flow.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
