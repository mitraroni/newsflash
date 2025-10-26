'use client';

import { usePathname } from 'next/navigation';
import {
  Landmark,
  LayoutGrid,
  DollarSign,
  PlayCircle,
  Lightbulb,
  Globe,
} from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const categories = [
  { name: 'My Feed', href: '/news/all', icon: LayoutGrid },
  { name: 'Delhi', href: '/news/politics', icon: Landmark },
  { name: 'Finance', href: '/news/finance', icon: DollarSign },
  { name: 'Videos', href: '/news/videos', icon: PlayCircle },
  { name: 'Insights', href: '/news/insights', icon: Lightbulb },
  { name: 'Google', href: '/news/google', icon: Globe },
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
