'use client';

import { NewsCard } from '@/components/news-card';
import React, { useEffect, useState } from 'react';
import { fetchNews, type NewsArticle } from '@/ai/flows/fetch-news-flow';
import { Skeleton } from '@/components/ui/skeleton';

export default function DelhiPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const newsArticles = await fetchNews({ count: 1 });
        setArticles(newsArticles);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="pt-16">
      <h1 className="text-2xl font-bold mb-4">Delhi News</h1>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-[250px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      ) : (
        articles.length > 0 && <NewsCard article={articles[0]} />
      )}
    </div>
  );
}
