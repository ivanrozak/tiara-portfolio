import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tiara-bisrina.vercel.app"),
  title: {
    default: "Tiara Bisrina | CX Researcher and Designer",
    template: `%s | Tiara Bisrina`,
  },
  description: "CX Researcher and Designer",
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORD,
  openGraph: {
    type: "website",
    url: "https://tiara-bisrina.vercel.app/",
    title: "Tiara Bisrina | CX Researcher and Designer",
    description: "CX Researcher and Designer",
    siteName: "Yesdok",
    images: [{ url: "https://tiara-bisrina.vercel.app/apple-touch-icon.png?" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={epilogue.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
