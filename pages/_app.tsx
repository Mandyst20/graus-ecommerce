import type { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * Custom App component for Next.js. It imports global CSS once and allows
 * persistence of layout between page changes.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
