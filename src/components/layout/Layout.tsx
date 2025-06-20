
import React, { useEffect } from 'react';
import { useAppStore } from '@/stores/useAppStore';
import SidebarRail from './SidebarRail';
import Topbar from './Topbar';
import AuthModal from '@/components/auth/AuthModal';
import { cn } from '@/lib/utils';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, theme, sidebarOpen } = useAppStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.classList.add('antialiased');
  }, [theme, language]);

  const isRTL = language === 'ar';

  return (
    <div
      className={cn(
        'min-h-screen flex bg-background transition-all duration-200 ease-in-out',
        isRTL ? 'flex-row-reverse' : 'flex-row'
      )}
    >
      {/* Sidebar */}
      <SidebarRail />

      {/* Main Content Area */}
      <div
        className={cn(
          'flex flex-col flex-1 min-h-screen transition-all duration-200 ease-in-out',
          sidebarOpen ? '2xl:ml-sidebar-full' : '2xl:ml-sidebar-mini',
          isRTL && (sidebarOpen ? '2xl:ml-0 2xl:mr-sidebar-full' : '2xl:ml-0 2xl:mr-sidebar-mini')
        )}
      >
        {/* Topbar */}
        <Topbar />
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto p-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>

      {/* Auth Modal */}
      <AuthModal />
    </div>
  );
};

export default Layout;
