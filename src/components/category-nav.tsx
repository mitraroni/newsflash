'use client';

import { usePathname } from 'next/navigation';
import { Landmark, LayoutGrid, Trophy, Cpu } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const categories = [
  { name: 'All', href: '/news/all', icon: LayoutGrid },
  { name: 'Technology', href: '/news/technology', icon: Cpu },
  { name: 'Sports', href: '/news/sports', icon: Trophy },
  { name: 'Politics', href: '/news/politics', icon: Landmark },
];

export function CategoryNav() {
  const pathname = usePathname();

  return (
    <div className="p-2">
      <SidebarMenu>
        {categories.map((category) => (
          <SidebarMenuItem key={category.name}>
            <SidebarMenuButton
              asChild
              isActive={pathname === category.href}
              className="justify-start"
              tooltip={category.name}
            >
              <Link href={category.href}>
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
}
