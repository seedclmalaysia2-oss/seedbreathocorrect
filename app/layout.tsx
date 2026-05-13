import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MainShell } from "@/components/main-shell";
import { Toaster } from "@/components/ui/sonner";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seed-breathocorrect.com"),
  title: {
    default: "Breath-O Correct — Japan Quality Orthokeratology",
    template: "%s · Breath-O Correct",
  },
  description:
    "Breath-O Correct is a Japan-made rigid gas permeable orthokeratology contact lens by SEED Co., Ltd. for non-surgical myopia management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} h-full antialiased`}>
      <body
        className="flex min-h-full flex-col bg-background text-foreground"
        style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}
      >
        <SiteHeader />
        <MainShell>{children}</MainShell>
        <SiteFooter />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
