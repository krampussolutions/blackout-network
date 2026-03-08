import Link from 'next/link';
import { site } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">{site.name}</div>
          <p className="muted" style={{ maxWidth: '56ch', lineHeight: 1.7 }}>
            Blackout Network helps individuals and families find dependable gear for emergencies, blackouts, and off-grid preparedness.
          </p>
          <p className="notice small">
            Disclosure: Some links on this website may earn us a commission at no extra cost to you.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <Link href="/best-gear">Best Gear</Link>
            <Link href="/comparisons">Comparisons</Link>
            <Link href="/guides">Guides</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div>
          <h3>Categories</h3>
          <div className="footer-links">
            <Link href="/categories/power">Power</Link>
            <Link href="/categories/water">Water</Link>
            <Link href="/categories/food">Food</Link>
            <Link href="/categories/medical">Medical</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
