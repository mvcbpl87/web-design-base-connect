import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import NavigationBar from "@/components/navigation";
import NavigationFooter from "@/components/navigation/footer";
import MobileNav from "@/components/navigation/mobile-nav";
// const inter = Inter({ subsets: ["latin"] });
const font = DM_Sans({subsets:['latin']})

export const metadata: Metadata = {
  title: "AI SaaS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LayoutWrapper className="font-custom">
        <MobileNav/>
        <NavigationBar/>
        {children}
        <NavigationFooter/>
        </LayoutWrapper>
      </body>
    </html>
  );
}
