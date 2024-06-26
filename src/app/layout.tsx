import type { Metadata } from "next";
import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";
import NavigationBar from "@/components/navigation";
import NavigationFooter from "@/components/navigation/footer";
import MobileNav from "@/components/navigation/mobile-nav2";
// const inter = Inter({ subsets: ["latin"] });
const font = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Base Connect - Outsource Administrative Services",
  description: "Generated by create next app",
  icons:{
    icon:"/assets/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LayoutWrapper>
        <MobileNav/>
        <NavigationBar/>
        {children}
        <NavigationFooter/>
        </LayoutWrapper>
      </body>
    </html>
  );
}
