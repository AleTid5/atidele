'use client';

import dynamic from 'next/dynamic';

// Use dynamic import to prevent SSR bundler complaints
const App = dynamic(() => import('./app'), { ssr: false });

export default function Home() {
  return <App />;
}
