'use client';
import { NavigationBar } from './components';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="ko" className={roboto.className}>
      <body>
        {children}
        <NavigationBar />
      </body>
    </html>
  );
}