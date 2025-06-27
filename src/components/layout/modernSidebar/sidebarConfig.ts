
import {
  LayoutDashboard,
  Users,
  Shield,
  Settings,
  MapPin,
  CreditCard,
  User,
  UserCheck,
  School,
  Clock,
  GraduationCap,
  DollarSign,
  Waves,
  Calculator,
  Activity,
  FileBarChart
} from 'lucide-react';

export const sidebarConfig = {
  groups: [
    {
      id: 'dashboard',
      label: 'pages.dashboard',
      icon: LayoutDashboard,
      items: [
        {
          id: 'main-dashboard',
          label: 'pages.dashboard',
          icon: LayoutDashboard,
          href: '/dashboard',
          badge: null
        }
      ]
    },
    {
      id: 'activities',
      label: 'pages.activities',
      icon: Activity,
      items: [
        {
          id: 'swimming',
          label: 'pages.swimming',
          icon: Waves,
          href: '/swimming',
          badge: null
        },
        {
          id: 'football',
          label: 'pages.football',
          icon: GraduationCap,
          href: '/football',
          badge: null
        },
        {
          id: 'fields',
          label: 'pages.fields',
          icon: MapPin,
          href: '/fields',
          badge: null
        }
      ]
    },
    {
      id: 'people',
      label: 'sidebar.people',
      icon: Users,
      items: [
        { 
          id: 'clients',
          label: 'pages.clients',
          icon: Users, 
          href: '/clients',
          badge: null 
        },
        { 
          id: 'coaches',
          label: 'pages.coaches',
          icon: UserCheck, 
          href: '/coaches',
          badge: null 
        },
        { 
          id: 'players',
          label: 'pages.players',
          icon: User, 
          href: '/players',
          badge: null 
        }
      ]
    },
    {
      id: 'finance',
      label: 'sidebar.finance',
      icon: CreditCard,
      items: [
        { 
          id: 'accounting',
          label: 'pages.accounting',
          icon: Calculator, 
          href: '/accounting',
          badge: null 
        },
        { 
          id: 'collections',
          label: 'pages.collections',
          icon: CreditCard, 
          href: '/finance/collections',
          badge: null 
        },
        { 
          id: 'pricing',
          label: 'pages.pricing',
          icon: DollarSign, 
          href: '/finance/pricing',
          badge: null 
        }
      ]
    },
    {
      id: 'administration',
      label: 'sidebar.administration',
      icon: Shield,
      items: [
        {
          id: 'settings',
          label: 'pages.settings',
          icon: Settings,
          href: '/settings',
          badge: null
        },
        {
          id: 'roles',
          label: 'pages.roles',
          icon: Shield,
          href: '/roles',
          badge: null
        },
        {
          id: 'users',
          label: 'pages.users',
          icon: User,
          href: '/users',
          badge: null
        },
        {
          id: 'reports',
          label: 'pages.reports',
          icon: FileBarChart,
          href: '/reports',
          badge: null
        }
      ]
    }
  ]
};
