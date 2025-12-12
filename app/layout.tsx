import "./globals.css";
import { metadata } from "./metadata";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/Analytics";
import { Inter, Roboto, Cormorant_Garamond, Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { LandingProvider } from "@/app/context/LandingContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-roboto" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} ${cormorant.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LandingProvider>
            {children}
          </LandingProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}