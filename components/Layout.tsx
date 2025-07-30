import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component encapsulates the page structure with a header and footer.
 * Use this component to wrap pages so that common UI elements stay consistent
 * across the site.
 
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Graus E‑commerce</h1>
        </div>
      </header>
      <main className="container">{children}</main>
      <footer>
        &copy; {new Date().getFullYear()} Graus E‑commerce. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
