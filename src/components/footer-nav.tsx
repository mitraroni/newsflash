'use client';
import { Home, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function FooterNav() {
  const newsUpdateLogo = placeholderImages.newsUpdateLogo;
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-around">
        <Link
          href="/home/search"
          className={cn('p-2', {
            'text-primary': pathname === '/home/search',
            'text-foreground': pathname !== '/home/search',
          })}
        >
          <Search className="h-7 w-7" />
        </Link>
        <Link
          href="/home"
          className={cn('p-2', {
            'text-primary': pathname === '/home',
            'text-foreground': pathname !== '/home',
          })}
        >
          <Home className="h-7 w-7" />
        </Link>
        <Link
          href="/home/news-update"
          className={cn('p-2', {
            'border-primary border-2 rounded-full': pathname === '/home/news-update',
          })}
        >
          <Image
            src={newsUpdateLogo.src}
            alt={newsUpdateLogo.alt}
            width={32}
            height={32}
            className="rounded-full"
            data-ai-hint="news logo"
          />
        </Link>
      </div>
    </footer>
  );
}
