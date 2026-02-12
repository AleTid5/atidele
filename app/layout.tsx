import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { FC, PropsWithChildren } from 'react';
import './globals.css';

export * from '@/app/constants/metadata';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className="font-sans">
      {children}
      <SpeedInsights />
    </body>
    <Analytics />
  </html>
);

export default RootLayout;
