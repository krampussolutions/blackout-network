export default function PageHero({ kicker, title, description }) {
  return (
    <section className="page-hero">
      <div className="container">
        {kicker ? <span className="kicker">{kicker}</span> : null}
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
    </section>
  );
}
