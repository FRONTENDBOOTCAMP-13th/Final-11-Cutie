import './globals.css';
import { Viewport } from 'next';

// veiwport 따로 분리해서 선언해야한다고함..?
export const viewport: Viewport = {
  width: 'device-width',
  userScalable: false,
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
