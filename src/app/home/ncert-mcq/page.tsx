'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const mcqItems = [
  { title: 'Class 8', image: 'quiz', href: '#' },
  { title: 'Class 9', image: 'quiz', href: '#' },
  { title: 'Class 10', image: 'quiz', href: '/home/ncert-mcq/class-10' },
  { title: 'Class 11', image: 'quiz', href: '#' },
  { title: 'Class 12', image: 'quiz', href: '#' },
  { title: 'Feedback', image: 'feedback', href: '#' },
];

export default function NcertMcqPage() {
  const router = useRouter();
  const { quiz, feedback } = placeholderImages;
  const images = { quiz, feedback };
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <header className="bg-green-500 text-white flex items-center p-4 shadow-md">
        <button onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">NCERT MCQ</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {mcqItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <Card className="rounded-lg shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-100 flex justify-center items-center p-4">
                    <Image
                      // @ts-ignore
                      src={images[item.image].src}
                      // @ts-ignore
                      alt={images[item.image].alt}
                      width={100}
                      height={100}
                      className="object-contain"
                      // @ts-ignore
                      data-ai-hint={images[item.image].aiHint}
                    />
                  </div>
                  <div className="bg-green-500 text-white text-center p-2">
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
