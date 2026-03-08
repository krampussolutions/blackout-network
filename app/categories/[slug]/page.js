import PageHero from '@/components/PageHero';
import PostCard from '@/components/PostCard';
import { categories, getArticlesByCategory, getCategory } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.slug);
  if (!category) return {};
  return {
    title: `${category.name} Gear`,
    description: category.description
  };
}

export default function CategoryPage({ params }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const items = getArticlesByCategory(params.slug);

  return (
    <main>
      <PageHero kicker="Category" title={category.name} description={category.description} />
      <section className="section">
        <div className="container grid-3">
          {items.map((item) => {
            const basePath = item.heroStat ? '/best-gear' : item.winner ? '/comparisons' : '/guides';
            return <PostCard key={item.slug} item={item} basePath={basePath} />;
          })}
        </div>
      </section>
    </main>
  );
}
