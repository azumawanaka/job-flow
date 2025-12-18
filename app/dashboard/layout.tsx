import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

import ThemeRegistry from '@/lib/theme-registry';
import Header from '@/components/common/header';

import '@/styles/globals.css';
import { Suspense } from 'react';

import { Main } from './page-styles';
import { Providers } from '@/redux/store/providers';
import Footer from '@/components/common/footer';

export const metadata = {
  title: "Fil's Portfolio",
  description: 'Fullstack Web Developer - Portfolio',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const RouteProgress = dynamic(
  () => import('@/components/common/route-progress')
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.variable}>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <Suspense fallback={<RouteProgress />}>
            <RouteProgress />
            <Providers>
              <Header />
              <Main>{children}</Main>
              <Footer />
            </Providers>
          </Suspense>
        </ThemeRegistry>
      </body>
    </html>
  );
}
