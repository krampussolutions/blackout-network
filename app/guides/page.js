import PageHero from '@/components/PageHero';
import PostCard from '@/components/PostCard';
import { guides } from '@/lib/site-data';

export const metadata = {
  title: 'Guides',
  description: 'Preparedness guides that help you plan for outages, emergencies, and everyday readiness.'
};

export default function GuidesPage() {
  return (
    <main>
      <PageHero
        kicker="Guides"
        title="Preparedness guides for real-world planning"
        description="Build a stronger emergency plan with practical how-to articles for home backup, family kits, water storage, and everyday preparedness."
      />
      <section className="section">
        <div className="container grid-3">
          {guides.map((item) => (
            <PostCard key={item.slug} item={item} basePath="/guides" />
          ))}
        </div>
      </section>
    </main>
  );
}
