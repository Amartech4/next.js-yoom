import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Yoom",
  description: "video calling app",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}
