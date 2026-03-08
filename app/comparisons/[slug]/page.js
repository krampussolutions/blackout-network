import SidebarBoxes from '@/components/SidebarBoxes';
import { articlePages, getAllArticleSlugsByType } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllArticleSlugsByType('comparisons').map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const article = articlePages[params.slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.intro
  };
}

export default function ComparisonArticlePage({ params }) {
  const article = articlePages[params.slug];
  if (!article || article.type !== 'comparisons') notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Comparison</span>
          <h1>{article.title}</h1>
          <p className="lead">{article.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container article-layout">
          <article className="article-content">
            <h2>Quick verdict</h2>
            <div className="grid-2">
              <div className="card">
                <h3>{article.comparison.left.name}</h3>
                <ul>
                  {article.comparison.left.strengths.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="card">
                <h3>{article.comparison.right.name}</h3>
                <ul>
                  {article.comparison.right.strengths.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
          <SidebarBoxes />
        </div>
      </section>
    </main>
  );
}
