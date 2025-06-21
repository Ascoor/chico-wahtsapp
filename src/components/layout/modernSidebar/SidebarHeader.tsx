
import React from 'react';
import { useAppStore } from '@/stores/useAppStore';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import AppLogo from '@/components/ui/AppLogo';

export function SidebarHeader() {
  const { sidebarOpen, language } = useAppStore();
  const { t } = useTranslation();
  const isRTL = language === 'ar';

  return (
    <div
      className={cn(
        'flex items-center gap-3 p-4 border-b border-sidebar-border bg-gradient-primary',
        !sidebarOpen && 'lg:p-2 lg:justify-center'
      )}
    >
      {sidebarOpen ? (
        <div className="flex items-center gap-2">
          <img src="/logo-day.png" alt="Sports Hub" className="h-10 w-auto" />
          <img
            src="/logo-patrens.png"
            alt="Sports Hub mark"
            className="h-10 w-auto"
          />
        </div>
      ) : (
        <img
          src="/logo-patrens.png"
          alt="Sports Hub mark"
          className="h-8 w-auto"
        />
      )}

      {sidebarOpen && (
        <div className={cn('min-w-0', isRTL ? 'text-right' : 'text-left')}>
          <h1 className="text-white font-bold text-lg leading-tight truncate">
            {t('app.name')}
          </h1>
          <p className="text-white/80 text-xs truncate">{t('app.tagline')}</p>
        </div>
      )}
    </div>
  );
}
