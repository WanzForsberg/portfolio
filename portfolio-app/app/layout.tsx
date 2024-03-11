import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Jacob Forsberg Portfolio',
  description: 'A view into my life',
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background text-foreground')}>
        {children}
      </body>
    </html>
  );
}
