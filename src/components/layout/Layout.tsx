import React, { useEffect } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import SidebarRail from './SidebarRail';
import Topbar from './Topbar';
import AuthModal from '@/components/auth/AuthModal';
import { cn } from '@/lib/utils';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, theme, sidebarOpen, setSidebarOpen } = useAppStore();

  // Dark mode & direction
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.classList.add('antialiased');
  }, [theme, language]);

  // Initial sidebar state on mount
  useEffect(() => {
    const width = window.innerWidth;
    setSidebarOpen(width >= 1536); // ≥2xl => open, else collapsed
  }, [setSidebarOpen]);

  const isRTL = language === 'ar';

  // Margin classes for both header & main
  const marginClasses = cn(
    'transition-all duration-200 ease-in-out',
    sidebarOpen
      ? isRTL
        ? 'lg:mr-72 2xl:mr-72'
        : 'lg:ml-72 2xl:ml-72'
      : isRTL
        ? 'lg:mr-16 2xl:mr-16'
        : 'lg:ml-16 2xl:ml-16'
  );

  return (
    <div
      className={cn(
        'min-h-screen flex bg-background transition-all duration-200 ease-in-out',
        isRTL ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* SidebarRail دائماً */}
      <SidebarRail />

      {/* Wrapper يحوي Topbar و main ويطبق عليه marginClasses */}
      <div className={cn(
        'flex flex-col flex-1 min-h-screen transition-all duration-200 ease-in-out',
        marginClasses
      )}>
        {/* Topbar */}
        <Topbar />

        {/* محتوى الصفحة */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-background to-muted/20 transition-all">
          <div className="container mx-auto p-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>

      {/* Auth Modal (مستقل) */}
      <AuthModal />
    </div>
  );
};

export default Layout;
