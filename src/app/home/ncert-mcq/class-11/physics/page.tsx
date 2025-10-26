'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const chapterItems = [
  {
    chapter: 1,
    title: 'Units and Measurements',
    href: '/home/ncert-mcq/class-11/physics/chapter-1',
  },
  { chapter: 2, title: 'Motion in a Straight Line', href: '#' },
  { chapter: 3, title: 'Motion in a Plane', href: '#' },
];

export default function PhysicsChaptersPage() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen">
       <header className="bg-card text-foreground flex items-center p-4 border-b">
          <button onClick={() => router.back()} className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Physics</h1>
            <p className="text-sm text-muted-foreground">Chapter Wise</p>
          </div>
        </header>
        <main className="p-4 space-y-3">
          {chapterItems.map((item) => (
            <Link href={item.href} key={item.chapter}>
              <Card className="rounded-lg shadow-md overflow-hidden bg-card">
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      {item.chapter}
                    </div>
                    <p className="font-semibold">{item.title}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </main>
    </div>
  );
}
