'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  'My Feed',
  'Finance',
  'Timelines',
  'Videos',
  'Insights',
  'Technology',
  'Sports',
];

export function CategoryNav() {
  return (
    <Tabs defaultValue="My Feed" className="w-full">
      <ScrollArea className="w-full whitespace-nowrap">
        <TabsList className="bg-transparent p-0">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </ScrollArea>
    </Tabs>
  );
}
