'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  { name: 'My Feed', href: '/home' },
  { name: 'Delhi', href: '/home/delhi' },
  { name: 'Finance', href: '/home/finance' },
  { name: 'Videos', href: '/home/videos' },
  { name: 'Insights', href: '/home/insights' },
  { name: 'Google', href: '/home/google' },
];

export function CategoryNav() {
  const pathname = usePathname();
  const defaultValue =
    categories.find((c) => c.href === pathname)?.href || '/home';

  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <ScrollArea className="w-full whitespace-nowrap">
        <TabsList className="bg-transparent p-0">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} passHref>
              <TabsTrigger
                value={category.href}
                className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
              >
                {category.name}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </Tabs>
  );
}
