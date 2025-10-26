'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const subjectItems = [
  { title: 'Science', image: 'science', href: '/home/ncert-mcq/class-9/science' },
  { title: 'Mathematics', image: 'mathematics', href: '#' },
  { title: 'History', image: 'history', href: '#' },
  { title: 'Political', image: 'political', href: '#' },
  { title: 'Economics', image: 'economics', href: '#' },
  { title: 'Geography', image: 'geography', href: '#' },
  { title: 'Hindi', image: 'hindi', href: '#' },
  { title: 'English', image: 'english', href: '#' },
];

export default function Class9Page() {
  const router = useRouter();
  const {
    science,
    mathematics,
    history,
    political,
    economics,
    geography,
    hindi,
    english,
  } = placeholderImages;
  const images = {
    science,
    mathematics,
    history,
    political,
    economics,
    geography,
    hindi,
    english,
  };

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-card text-foreground flex items-center p-4 border-b">
        <button onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">Class 9</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {subjectItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <Card className="rounded-lg shadow-lg overflow-hidden bg-card">
                <CardContent className="p-0">
                  <div className="bg-muted flex justify-center items-center p-4 h-28">
                    <Image
                      // @ts-ignore
                      src={images[item.image].src}
                      // @ts-ignore
                      alt={images[item.image].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      // @ts-ignore
                      data-ai-hint={images[item.image].aiHint}
                    />
                  </div>
                  <div className="bg-primary text-primary-foreground text-center p-2 rounded-b-lg">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
