import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const fontMontserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gam3r.Store',
  description: 'Gam3r.Store - O melhor site para de gamers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontMontserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
