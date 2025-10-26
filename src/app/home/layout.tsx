import React from 'react';
import Link from 'next/link';
import { CategoryNav } from '@/components/category-nav';
import { Newspaper } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/home" className="flex items-center gap-2">
              <Newspaper className="h-6 w-6" />
              <span className="text-xl font-bold">News</span>
            </Link>
          </div>
          <CategoryNav />
        </div>
      </header>
      <main className="container mx-auto px-4 py-4">{children}</main>
      <Toaster />
    </div>
  );
}
