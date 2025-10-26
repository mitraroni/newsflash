import { getArticles } from '@/lib/data';
import { ArticleCard } from '@/components/article-card';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const articles = await getArticles(category);

  const validCategories = ['all', 'technology', 'sports', 'politics'];
  if (!validCategories.includes(category.toLowerCase())) {
    notFound();
  }

  const categoryTitle =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold font-headline text-primary">
        {categoryTitle} News
      </h1>
      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex h-[50vh] flex-col items-center justify-center rounded-lg border border-dashed">
          <h2 className="text-2xl font-semibold">No articles found</h2>
          <p className="mt-2 text-muted-foreground">
            There are no articles in this category at the moment.
          </p>
        </div>
      )}
    </div>
  );
}
