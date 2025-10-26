import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { CategoryNav } from '@/components/category-nav';
import { Newspaper } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden" />
          <Link href="/news/all" className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline tracking-tight">
              NewsFlash
            </span>
          </Link>
        </div>
      </header>
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar className="hidden md:flex">
          <SidebarContent>
            <CategoryNav />
          </SidebarContent>
        </Sidebar>
        <Sidebar className="md:hidden">
            <CategoryNav />
        </Sidebar>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </ScrollArea>
      </div>
    </SidebarProvider>
  );
}
