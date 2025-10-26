'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const chapterItems = [
  {
    chapter: 1,
    title: 'Chemical Reactions and Equations',
    href: '/home/ncert-mcq/class-10/science/chapter-1',
  },
  { chapter: 2, title: 'Acids, Bases and Salts', href: '#' },
  { chapter: 3, title: 'Metals and Non-metals', href: '#' },
  { chapter: 4, title: 'Carbon and its Compounds', href: '#' },
  {
    chapter: 5,
    title: 'Periodic Classification of Elements',
    href: '#',
  },
  { chapter: 6, title: 'Life Processes', href: '#' },
  { chapter: 7, title: 'Control and Coordination', href: '#' },
  { chapter: 8, title: 'How do Organisms Reproduce?', href: '#' },
  { chapter: 9, title: 'Heredity and Evolution', href: '#' },
  { chapter: 10, title: 'Light – Reflection and Refraction', href: '#' },
  {
    chapter: 11,
    title: 'The Human Eye and the Colourful World',
    href: '#',
  },
];

export default function ScienceChaptersPage() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen">
       <header className="bg-card text-foreground flex items-center p-4 border-b">
          <button onClick={() => router.back()} className="mr-4">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Science</h1>
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
