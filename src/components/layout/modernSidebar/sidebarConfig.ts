
import {
  LayoutDashboard,
  Calendar,
  Users,
  Waves,
  MapPin,
  Wallet,
  LineChart,
  Settings,
  Shield,
  UserCheck
} from 'lucide-react';
import { SidebarConfig } from './types';

export const sidebarConfig: SidebarConfig = {
  groups: [
    {
      label: 'sidebar.general',
      items: [
        {
          href: '/',
          label: 'navigation.dashboard',
          icon: LayoutDashboard
        },
        {
          href: '/bookings',
          label: 'navigation.bookings',
          icon: Calendar,
          badge: '12'
        }
      ]
    },
    {
      label: 'sidebar.activities',
      items: [
        {
          href: '/activities/swimming',
          label: 'navigation.swimming',
          icon: Waves
        },
        {
          href: '/activities/fields',
          label: 'navigation.fields',
          icon: MapPin
        }
      ]
    },
    {
      label: 'sidebar.management',
      items: [
        {
          href: '/clients',
          label: 'navigation.clients',
          icon: Users
        },
        {
          href: '/payments',
          label: 'navigation.payments',
          icon: Wallet
        },
        {
          href: '/reports',
          label: 'navigation.reports',
          icon: LineChart
        }
      ]
    },
    {
      label: 'sidebar.system',
      items: [
        {
          href: '/users',
          label: 'navigation.users',
          icon: UserCheck
        },
        {
          href: '/roles',
          label: 'navigation.roles',
          icon: Shield
        },
        {
          href: '/settings',
          label: 'navigation.settings',
          icon: Settings
        }
      ]
    }
  ]
};
