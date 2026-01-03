import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.SITE_URL || "https://homie-calendar.vercel.app";
const siteName = "Homie";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Homie｜AI-Powered Calendar That Adapts to You",
    template: "%s｜Homie",
  },
  description:
    "Homie is an AI-powered calendar that adjusts itself based on your energy, mood, workload, and unexpected changes. Stop forcing yourself to fit your calendar.",
  applicationName: "Homie",
  authors: [{ name: "Homie Team" }],
  creator: "Homie",
  publisher: "Homie",
  keywords: [
    "AI calendar",
    "dynamic scheduling",
    "schedule optimizer",
    "task prioritization",
    "calendar sync",
    "productivity",
    "weekly insights",
  ],
  openGraph: {
    title: "Homie｜Your AI Schedule Team — Built to Adapt to You",
    description:
      "The first AI-powered calendar that rebuilds your day when plans change. Real-time adjustments, smart prioritization, and unified calendars.",
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homie｜Your AI Schedule Team",
    description:
      "An AI-powered calendar that adapts to your energy, mood, workload, and surprises. Your day, rebuilt in real time.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
