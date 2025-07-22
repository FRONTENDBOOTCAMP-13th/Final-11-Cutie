import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  viewport: 'width=device-width, user-scalable=no',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
