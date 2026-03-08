export default function NewsletterCard() {
  return (
    <section className="section">
      <div className="container">
        <div className="card">
          <span className="kicker">Free checklist</span>
          <h2 style={{ marginTop: 14 }}>Get preparedness tips and gear recommendations by email</h2>
          <p className="section-copy">
            Join the list for practical blackout planning tips, essential gear guides, and emergency readiness checklists.
          </p>
          <form className="form" action="/api/newsletter" method="post" style={{ maxWidth: 560 }}>
            <input className="input" type="email" name="email" placeholder="Email address" required />
            <button type="submit">Join Free</button>
          </form>
        </div>
      </div>
    </section>
  );
}
