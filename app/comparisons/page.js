import PageHero from '@/components/PageHero';
import PostCard from '@/components/PostCard';
import { comparisons } from '@/lib/site-data';

export const metadata = {
  title: 'Comparisons',
  description: 'Side-by-side gear comparisons to help you choose the right option with confidence.'
};

export default function ComparisonsPage() {
  return (
    <main>
      <PageHero
        kicker="Comparisons"
        title="Side-by-side gear comparisons"
        description="Compare popular preparedness products head to head so you can choose the right fit for your home, vehicle, or off-grid setup."
      />
      <section className="section">
        <div className="container grid-3">
          {comparisons.map((item) => (
            <PostCard key={item.slug} item={item} basePath="/comparisons" />
          ))}
        </div>
      </section>
    </main>
  );
}
