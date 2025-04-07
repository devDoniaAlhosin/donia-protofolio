import { Metadata } from "next";
import "./globals.css";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProvider,
} from "next-themes";

import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Donia's Protfolio",
  description:
    "Innovative Full-Stack Developer | Crafting Scalable & Engaging Web Experiences",
};
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
