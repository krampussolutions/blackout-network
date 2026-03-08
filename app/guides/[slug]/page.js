import SidebarBoxes from '@/components/SidebarBoxes';
import { articlePages, getAllArticleSlugsByType } from '@/lib/site-data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllArticleSlugsByType('guides').map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const article = articlePages[params.slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.intro
  };
}

export default function GuideArticlePage({ params }) {
  const article = articlePages[params.slug];
  if (!article || article.type !== 'guides') notFound();

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">Guide</span>
          <h1>{article.title}</h1>
          <p className="lead">{article.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container article-layout">
          <article className="article-content">
            <h2>Quick checklist</h2>
            <ul>
              {article.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
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
