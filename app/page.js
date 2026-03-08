import Head from "next/head";
import Link from 'next/link';
import NewsletterCard from '@/components/NewsletterCard';
import PostCard from '@/components/PostCard';
import { categories, comparisons, featuredProducts, guides } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="card">
            <span className="kicker">Preparedness gear and emergency guides</span>
            <h1>Be ready for blackouts, emergencies, and off-grid living</h1>
            <p className="lead">
              Discover dependable gear, practical preparedness guides, and trusted recommendations for home backup, emergencies, and everyday readiness.
            </p>
            <div className="button-row">
              <Link href="/best-gear" className="button">Shop Best Gear</Link>
              <Link href="/guides" className="button secondary">Explore Guides</Link>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>6</strong>
                <span className="muted small">Featured gear guides to start with</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span className="muted small">Side-by-side comparisons for key products</span>
              </div>
              <div className="stat">
                <strong>4</strong>
                <span className="muted small">Preparedness guides for real-world planning</span>
              </div>
            </div>
          </div>
          <div className="panel">
            <span className="badge">Preparedness starts before the emergency</span>
            <h3>Trusted gear for real-world readiness</h3>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              Find carefully selected equipment for power outages, emergency communication, water storage, first aid, lighting, and off-grid backup.
            </p>
            <ul>
              <li>Reliable gear recommendations</li>
              <li>Easy-to-browse categories</li>
              <li>In-depth product comparisons</li>
              <li>Practical preparedness guides</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Top preparedness picks</h2>
          <p className="section-copy">Start with our most popular blackout, emergency, and survival gear guides.</p>
          <div className="grid-3">
            {featuredProducts.map((item) => (
              <PostCard key={item.slug} item={item} basePath="/best-gear" />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Browse gear by category</h2>
          <p className="section-copy">Explore essential equipment for home backup, off-grid living, and emergency preparedness.</p>
          <div className="grid-3">
            {categories.map((category) => (
              <article className="post-card" key={category.slug}>
                <span className="badge">Category Guide</span>
                <h3 style={{ margin: 0 }}>{category.name}</h3>
                <p className="muted" style={{ lineHeight: 1.7 }}>{category.description}</p>
                <Link href={`/categories/${category.slug}`} className="button secondary">Explore Category</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Popular comparisons</h2>
            <p className="section-copy">Compare top options side by side so you can choose the right gear with confidence.</p>
            <div className="grid-2">
              {comparisons.map((item) => (
                <PostCard key={item.slug} item={item} basePath="/comparisons" />
              ))}
            </div>
          </div>
          <div>
            <h2>Preparedness guides</h2>
            <p className="section-copy">Build a stronger plan with practical how-to articles for families, vehicles, and home backup kits.</p>
            <div className="grid-2">
              {guides.map((item) => (
                <PostCard key={item.slug} item={item} basePath="/guides" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterCard />
    </main>
  );
}
