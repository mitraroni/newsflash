import { Home, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export function FooterNav() {
  const newsUpdateLogo = placeholderImages.newsUpdateLogo;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/50 shadow-t-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-around">
        <Link href="/home/search" className="p-2">
          <Search className="h-7 w-7 text-foreground" />
        </Link>
        <Link href="/home" className="p-2">
          <Home className="h-7 w-7 text-foreground" />
        </Link>
        <Link href="/home/news-update" className="p-2">
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
      <div className="w-32 h-1 bg-foreground rounded-full mx-auto mb-2"></div>
    </footer>
  );
}
