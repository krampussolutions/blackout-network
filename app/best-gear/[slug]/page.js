import SidebarBoxes from '@/components/SidebarBoxes';
import { articlePages, featuredProducts, getAllArticleSlugsByType } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllArticleSlugsByType('best-gear').map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const article = articlePages[params.slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.intro
  };
}

export default function BestGearArticlePage({ params }) {
  const article = articlePages[params.slug];
  if (!article || article.type !== 'best-gear') notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Best gear</span>
          <h1>{article.title}</h1>
          <p className="lead">{article.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container article-layout">
          <article className="article-content">
            <h2 id="top-picks">Top picks</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Best For</th>
                  <th>Price Tier</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {article.picks.map((pick) => (
                  <tr key={pick.name}>
                    <td>{pick.name}</td>
                    <td>{pick.bestFor}</td>
                    <td>{pick.price}</td>
                    <td><a href={pick.link}>Check Price</a></td>
                  </tr>
                ))}
              </tbody>
            </table>

            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            ))}

            <h2>More gear to explore</h2>
            <ul>
              {featuredProducts.filter((item) => item.slug !== params.slug).map((item) => (
                <li key={item.slug}>{item.title}</li>
              ))}
            </ul>
          </article>
          <SidebarBoxes />
        </div>
      </section>
    </main>
  );
}
