import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Madhav Food Products",
  description: "Pure and Natural Indian Staples",
  openGraph: {
    title: "Madhav Food Products",
    description: "Pure and Natural Indian Staples",
    images: [
      {
        url: "/assets/mfp.png", // Make sure to add this image in your public folder
        width: 1200,
        height: 630,
        alt: "Madhav Food Products - Pure and Natural Indian Staples",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Madhav Food Products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav Food Products",
    description: "Pure and Natural Indian Staples",
    images: ["/assets/mfp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
