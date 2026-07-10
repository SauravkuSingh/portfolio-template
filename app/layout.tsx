import type { Metadata } from "next";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";
import NavBar from "./components/NavBar";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Anne Frank | Portfolio",
  description: "A modern portfolio template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Macondo&family=Merienda:wght@300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-neutral-950 text-white" suppressHydrationWarning>
        <SmoothScroll />
        <TransitionProvider>
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
