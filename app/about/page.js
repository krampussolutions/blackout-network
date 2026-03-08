import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'About',
  description: 'About Blackout Network.'
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="Preparedness guidance for blackouts, emergencies, and off-grid living"
        description="Blackout Network helps readers find dependable gear, practical planning tips, and useful resources for home backup and everyday readiness."
      />
      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h2>What we cover</h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              We focus on blackout readiness, emergency supplies, backup power, water storage, communication tools, first aid, and practical survival gear that makes sense for real households.
            </p>
          </div>
          <div className="card">
            <h2>How we approach recommendations</h2>
            <p className="muted" style={{ lineHeight: 1.7 }}>
              Our goal is to highlight equipment that is useful, dependable, and easier to deploy under stress. We prioritize realistic preparedness over hype.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
