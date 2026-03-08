import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Blackout Network.'
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Get in touch"
        description="Have a question, recommendation, or partnership inquiry? Send a message and we’ll get back to you as soon as we can."
      />
      <section className="section">
        <div className="container">
          <div className="card" style={{ maxWidth: 820 }}>
            <form className="form" action="/api/contact" method="post">
              <input className="input" name="name" placeholder="Your name" required />
              <input className="input" type="email" name="email" placeholder="Your email" required />
              <textarea rows="6" name="message" placeholder="How can we help?" required />
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
