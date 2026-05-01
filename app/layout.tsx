import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Poly Garden Sugar — Custom Cakes & Desserts in NY/NJ",
    template: "%s · The Poly Garden Sugar",
  },
  description:
    "Hand-crafted custom cakes, sugar flowers, and desserts by Ivelisse Schuwerer. Serving New York and New Jersey by appointment.",
  keywords: [
    "custom cakes NY",
    "custom cakes NJ",
    "wedding cakes",
    "sugar flowers",
    "quinceañera cake",
    "floral cake",
    "Ivelisse Schuwerer",
  ],
  openGraph: {
    title: "The Poly Garden Sugar",
    description:
      "Hand-crafted custom cakes, sugar flowers, and desserts in NY & NJ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${pinyon.variable} antialiased`}
    >
      <body className="bg-cream text-ink min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
