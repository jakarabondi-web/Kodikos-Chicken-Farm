import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/app-shell/sidebar";
import { AIDrawer } from "@/components/ai/ai-drawer";
import { MobileNav } from "@/components/app-shell/mobile-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Kodiko FarmOS",
  description: "Farm operations, sales, and M-Pesa finance command center for Kodiko Farm, Oyugis, Kenya.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-canvas text-text">
        <Sidebar />
        <MobileNav />
        <div className="min-w-0 md:pl-[248px]">
          <main className="min-w-0 pb-24">{children}</main>
        </div>
        <AIDrawer />
      </body>
    </html>
  );
}
