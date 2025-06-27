
import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { SidebarNavItem } from './SidebarNavItem';
import { SidebarGroup } from './types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SidebarNavGroupProps {
  group: SidebarGroup;
  isCollapsed: boolean;
  currentPath: string;
  isRTL: boolean;
}

export function SidebarNavGroup({ group, isCollapsed, currentPath, isRTL }: SidebarNavGroupProps) {
  const { t } = useTranslation();

  const header = (
    <div className="flex items-center gap-3 px-3 py-2 font-semibold">
      {group.icon && <group.icon className="h-4 w-4" />}
      {!isCollapsed && <span className="text-xs uppercase text-sidebar-foreground/60">{t(group.label)}</span>}
    </div>
  );

  return (
    <Accordion type="multiple" defaultValue={[group.id]} className="mb-2">
      <AccordionItem value={group.id} className="border-none">
        {isCollapsed ? (
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <AccordionTrigger className="p-0 hover:no-underline focus:no-underline">
                  {header}
                </AccordionTrigger>
              </TooltipTrigger>
              <TooltipContent side={isRTL ? 'left' : 'right'}>
                {t(group.label)}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <AccordionTrigger className="p-0 hover:no-underline focus:no-underline">
            {header}
          </AccordionTrigger>
        )}
        <AccordionContent className="mt-1 space-y-1">
          <ul className="space-y-1" role="list">
            {group.items.map((item) => (
              <li key={item.href}>
                <SidebarNavItem
                  item={item}
                  isCollapsed={isCollapsed}
                  isActive={currentPath === item.href || currentPath.startsWith(item.href + '/')}
                  isRTL={isRTL}
                />
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
