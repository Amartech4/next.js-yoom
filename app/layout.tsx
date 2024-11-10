import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoom",
  description: "video calling app",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider  appearance={{
        variables: {
          colorText: "#fff",
        colorPrimary: "#0E78F9",
        colorBackground: "#1c1f2e",
        colorInputBackground: "#252a41",
        colorInputText: "#fff",
        },
    layout: {
      logoImageUrl: "/icons/yoom-logo.svg",
      socialButtonsVariant: "iconButton",
      unsafe_disableDevelopmentModeWarnings: true,
    },
  }}>
      <body
        className={`${inter.className} antialiased bg-dark-2`}
        >
        {children}
        <Toaster />
      </body>
       </ClerkProvider>
    </html>
  );
}
