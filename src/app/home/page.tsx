'use client';

import { NewsCard } from '@/components/news-card';
import { NotificationDialog } from '@/components/notification-dialog';
import React, { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  useCollection,
  useFirestore,
  useMemoFirebase,
} from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import type { NewsArticle } from '@/ai/flows/fetch-news-flow';

type StoredNewsArticle = NewsArticle & { id: string };

export default function HomePage() {
  const [showDialog, setShowDialog] = useState(false);
  const firestore = useFirestore();

  const articlesRef = useMemoFirebase(
    () => (firestore ? collection(firestore, 'news_articles') : null),
    [firestore]
  );
  const articlesQuery = useMemoFirebase(
    () => (articlesRef ? query(articlesRef, orderBy('createdAt', 'desc'), limit(5)) : null),
    [articlesRef]
  );

  const { data: articles, isLoading } = useCollection<StoredNewsArticle>(articlesQuery);

  useEffect(() => {
    // Show the dialog after a short delay
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="pt-16">
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
          articles && articles.length > 0 && <NewsCard article={articles[0]} />
        )}
      </div>
      <NotificationDialog open={showDialog} onOpenChange={handleDialogClose} />
    </>
  );
}
