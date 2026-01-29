import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/libs/themeProvider";
import { Toaster } from "sonner";
import "@/styles/globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mihreteab Demeke",
  description: "Mihreteab Demeke Portifolio",
  openGraph: {
    title: "Mihreteab Demeke",
    description: "Mihreteab Demeke Portifolio",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://mihreteab-demeke.vercel.app/",
    siteName: "Mihreteab Demeke",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mihreteab Demeke Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mihreteab Demeke",
    description: "Mihreteab Demeke Portifolio",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="manifest" href="/images/favicon.png" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
