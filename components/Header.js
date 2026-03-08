import Link from 'next/link';
import { site } from '@/lib/site-data';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">
          {site.name}
          <small>Preparedness gear and emergency planning guides</small>
        </Link>
        <nav className="nav-links">
          <Link href="/best-gear">Best Gear</Link>
          <Link href="/comparisons">Comparisons</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
