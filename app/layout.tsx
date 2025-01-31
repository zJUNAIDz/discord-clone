import { ThemeProvider } from "@/shared/providers/theme-provider";
import { cn } from "@/shared/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ModalProvider } from "@/shared/providers/modal-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RelayComm",
  description: "Discord app clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "dark:bg-[#313338] bg-white ")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-clone"
        >
          <ModalProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
