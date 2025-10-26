'use client';

import { NewsCard } from '@/components/news-card';

export default function FinancePage() {
  return (
    <div className="pt-16">
      <h1 className="text-2xl font-bold mb-4">Finance News</h1>
      <NewsCard />
    </div>
  );
}
