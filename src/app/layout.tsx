import type { Metadata } from 'next';
import { Roboto, Cascadia_Code } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto' 
});

const cascadiaCode = Cascadia_Code({ 
  subsets: ['latin'], 
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cascadia' 
});

export const metadata: Metadata = {
  title: 'WebCare Solutions',
  description: 'Jasa pembuatan website modern, aman, dan cepat dengan desain futuristik. Mulai proyekmu sekarang.',
  icons: {
    icon: '/images/heroicon.png',
  },
  openGraph: {
    title: 'WebCare Solutions',
    description: 'Jasa pembuatan website modern, aman, dan cepat dengan desain futuristik.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/heroicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${roboto.variable} ${cascadiaCode.variable} font-sans antialiased bg-[#0F172A] text-white`}>{children}</body>
    </html>
  );
}
