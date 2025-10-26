'use client';

import { NewsCard } from '@/components/news-card';
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy, limit } from 'firebase/firestore';
import type { NewsArticle } from '@/ai/flows/fetch-news-flow';

type StoredNewsArticle = NewsArticle & { id: string };

export default function VideosPage() {
  const firestore = useFirestore();
  const articlesRef = useMemoFirebase(
    () => (firestore ? collection(firestore, 'news_articles') : null),
    [firestore]
  );
  const articlesQuery = useMemoFirebase(
    () =>
      articlesRef
        ? query(
            articlesRef,
            where('category', '==', 'Videos'),
            orderBy('createdAt', 'desc'),
            limit(1)
          )
        : null,
    [articlesRef]
  );

  const { data: articles, isLoading } =
    useCollection<StoredNewsArticle>(articlesQuery);

  return (
    <div className="pt-16">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-[250px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      ) : articles && articles.length > 0 ? (
        <NewsCard article={articles[0]} />
      ) : (
        <p>No videos found.</p>
      )}
    </div>
  );
}
