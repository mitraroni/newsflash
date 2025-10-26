'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Flame,
  Newspaper,
  Star,
  Rss,
  Search as SearchIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import placeholderImages from '@/lib/placeholder-images.json';

const notificationItems = [
  {
    text: 'Video shows SUV which carries PM Modi being washed at local shop; sparks safety concerns',
    image: 'suv',
    aiHint: 'car wash',
  },
  {
    text: 'Indians can hold crypto as property, it falls under Income Tax Act: Madras HC',
    image: 'crypto',
    aiHint: 'crypto currency',
  },
  {
    text: 'Satish Shah remembered Shammi Kapoor in final social media post a day before his death',
    image: 'actor',
    aiHint: 'indian actor',
  },
];

const insightItems = [
  {
    text: 'What is the new capital of Andhra Pradesh?',
    image: 'city',
    aiHint: 'cityscape evening',
  },
  {
    text: 'How did ISRO lose contact with Chandrayaan-2 lander?',
    image: 'isro',
    aiHint: 'space mission',
  },
];

const iconNavItems = [
  { icon: Rss, label: 'My Feed', href: '/home' },
  { icon: Newspaper, label: 'All News', href: '/home/all-news' },
  { icon: Star, label: 'Top Stories', href: '/home/top-stories' },
  { icon: Flame, label: 'Trending', href: '/home/trending' },
];

export default function SearchPage() {
  const { wordWheel, ...images } = placeholderImages;
  return (
    <div className="pt-4 pb-20">
      <div className="relative mb-4">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search for news" className="pl-10" />
      </div>

      <Card className="mb-6 border-none">
        <CardContent className="p-0">
          <div className="relative h-32 w-full">
            <Image
              src={wordWheel.src}
              alt={wordWheel.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="word game"
            />
          </div>
        </CardContent>
      </Card>

      <div className="mb-6 grid grid-cols-4 gap-4 text-center">
        {iconNavItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Notifications</h2>
          <Button variant="link" asChild>
            <Link href="/home/notifications">VIEW ALL</Link>
          </Button>
        </div>
        <div className="space-y-4">
          {notificationItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium leading-tight">{item.text}</p>
                <Image
                  // @ts-ignore
                  src={images[item.image].src}
                  // @ts-ignore
                  alt={images[item.image].alt}
                  width={80}
                  height={60}
                  className="rounded-md object-cover"
                  data-ai-hint={item.aiHint}
                />
              </div>
              {index < notificationItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold">Insights</h2>
          <Button variant="link" asChild>
            <Link href="/home/insights">VIEW ALL</Link>
          </Button>
        </div>
        <div className="space-y-4">
          {insightItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium leading-tight">{item.text}</p>
                <Image
                  // @ts-ignore
                  src={images[item.image].src}
                  // @ts-ignore
                  alt={images[item.image].alt}
                  width={80}
                  height={60}
                  className="rounded-md object-cover"
                  data-ai-hint={item.aiHint}
                />
              </div>
              {index < insightItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}