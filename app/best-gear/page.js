import PageHero from '@/components/PageHero';
import PostCard from '@/components/PostCard';
import { featuredProducts } from '@/lib/site-data';

export const metadata = {
  title: 'Best Gear',
  description: 'Trusted gear recommendations for emergency preparedness, survival, and off-grid readiness.'
};

export default function BestGearPage() {
  return (
    <main>
      <PageHero
        kicker="Best gear"
        title="Trusted gear picks for blackout readiness"
        description="Explore dependable recommendations for backup power, emergency radios, water filtration, first aid, long-term food storage, and other preparedness essentials."
      />
      <section className="section">
        <div className="container grid-3">
          {featuredProducts.map((item) => (
            <PostCard key={item.slug} item={item} basePath="/best-gear" />
          ))}
        </div>
      </section>
    </main>
  );
}
