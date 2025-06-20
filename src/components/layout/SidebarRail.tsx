import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores/useAppStore';
import { SidebarNavGroup } from './modernSidebar/SidebarNavGroup';
import { sidebarConfig } from './modernSidebar/sidebarConfig';

/**
 * SidebarRail handles responsive sidebar behaviour.
 * Mobile (<xl): slide-in overlay.
 * Desktop (xl-2xl): mini icon rail.
 * Large (>=2xl): full sidebar with labels.
 */
export const SidebarRail: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, language } = useAppStore();
  const location = useLocation();
  const { t } = useTranslation();
  const isRTL = language === 'ar';

  const sidebarVariants: Variants = {
    open: {},
    closed: {}
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm block xl:hidden transition-all duration-200 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <motion.aside
        initial={false}
        variants={sidebarVariants}
        animate={sidebarOpen ? 'open' : 'closed'}
        className={cn(
          'fixed top-0 z-50 h-screen bg-sidebar border-sidebar-border shadow-xl flex flex-col',
          'transition-all duration-200 ease-in-out',
          isRTL ? 'right-0 border-l' : 'left-0 border-r',
          sidebarOpen ? 'w-full xl:w-sidebar-full' : 'w-sidebar-mini',
          'xl:translate-x-0',
          sidebarOpen ? '' : isRTL ? 'translate-x-full xl:translate-x-0' : '-translate-x-full xl:translate-x-0',
          'flex'
        )}
        role="navigation"
        aria-label={t('navigation.main')}
      >
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {sidebarConfig.groups.map(group => (
            <SidebarNavGroup
              key={group.label}
              group={group}
              isCollapsed={!sidebarOpen}
              currentPath={location.pathname}
              isRTL={isRTL}
            />
          ))}
        </div>
      </motion.aside>
    </>
  );
};

export default SidebarRail;
