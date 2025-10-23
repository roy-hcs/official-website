import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import RrhLayout from '@/components/RrhLoyout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Haame - Multi-asset Fintech Service Platform',
  description:
    'Haame provides comprehensive multi-asset fintech services and solutions',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily:
            'Inter, PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif, Droid Sans Fallback',
        }}
      >
        <RrhLayout>{children}</RrhLayout>
      </body>
    </html>
  );
}
