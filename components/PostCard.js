import Link from 'next/link';
import { getCategory } from '@/lib/site-data';

export default function PostCard({ item, basePath }) {
  const category = getCategory(item.category);
  return (
    <article className="post-card">
      <span className="badge">{category?.name || 'Category'}</span>
      <div>
        <h3 style={{ margin: '0 0 8px' }}>{item.title}</h3>
        <p className="muted" style={{ lineHeight: 1.7 }}>{item.excerpt}</p>
      </div>
      <div className="small muted">{item.readingTime || item.winner || item.heroStat || 'Buying guide'}</div>
      <div>
        <Link className="button secondary" href={`${basePath}/${item.slug}`}>
          Read More
        </Link>
      </div>
    </article>
  );
}
