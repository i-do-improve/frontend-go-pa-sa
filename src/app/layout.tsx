'use client';
import { NavigationBar, Header } from './components';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import styled from 'styled-components';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
});


interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ko" className={`${roboto.variable} ${poppins.variable}`}>
      <body>
        <Main>
          {children}
        </Main>
        <NavigationBar />
      </body>
    </html>
  );
}

const Main = styled.main`
  height: calc(100vh - 78px);
`;