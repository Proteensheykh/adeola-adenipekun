import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { ThemeProvider } from "@/components/theme/theme-provider";

// Local fonts
const adobeCaslon = localFont({
  src: '../fonts/adobe-caslon-w01-smbd.woff2',
  variable: '--font-adobe-caslon',
  display: 'swap',
});

const helveticaBold = localFont({
  src: '../fonts/helvetica-w01-bold.woff2',
  variable: '--font-helvetica-bold',
  display: 'swap',
});

const openSans = localFont({
  src: '../fonts/open-sans.woff2',
  variable: '--font-open-sans',
  display: 'swap',
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ADEOLA ADENIPEKUN | Creative Director | Artist | Animator",
  description: "ADEOLA ADENIPEKUN is a creative director, artist and animator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${adobeCaslon.variable} ${helveticaBold.variable} ${openSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
