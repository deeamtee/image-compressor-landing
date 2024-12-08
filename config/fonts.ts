import { Fira_Code as FontMono, Montserrat as FontSans, Noto_Sans_SC as FontChinese } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin-ext', 'cyrillic-ext'],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const fontChinese = FontChinese({
  subsets: ['latin'],
  variable: '--font-chinese',
  display: 'swap',
});
