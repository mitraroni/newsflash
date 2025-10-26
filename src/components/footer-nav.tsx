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

  const navItems = [
    {
      href: '/home/search',
      icon: Search,
      activeCondition: pathname === '/home/search',
    },
    { href: '/home', icon: Home, activeCondition: pathname === '/home' },
    {
      href: '/home/news-update',
      image: newsUpdateLogo,
      activeCondition: pathname === '/home/news-update',
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-around">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn('p-2 flex items-center justify-center', {
              'text-primary': item.activeCondition,
              'text-foreground': !item.activeCondition,
              'border-primary border-2 rounded-full':
                item.href === '/home/news-update' && item.activeCondition,
            })}
          >
            {item.icon && <item.icon className="h-7 w-7" />}
            {item.image && (
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={32}
                height={32}
                className="rounded-full"
                data-ai-hint="news logo"
              />
            )}
          </Link>
        ))}
      </div>
    </footer>
  );
}
