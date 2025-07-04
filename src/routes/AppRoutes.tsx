import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import Layout from '@/components/layout/Layout';
import Landing from '@/pages/Landing';
import LoginPage from '@/pages/Login';
import ResetPassword from '@/pages/ResetPassword';
import Dashboard from '@/pages/Dashboard';
import AdminDashboard from '@/pages/admin/Dashboard';
import Users from '@/pages/Users';
import Roles from '@/pages/Roles';
import Settings from '@/pages/Settings';
import Bookings from '@/pages/Bookings';
import Activities from '@/pages/Activities';
import Swimming from '@/pages/Swimming';
import Fields from '@/pages/Fields';
import Clients from '@/pages/Clients';
import SwimmingSchools from '@/pages/swimming/Schools';
import SwimmingPrivate from '@/pages/swimming/Private';
import SwimmingFreeTime from '@/pages/swimming/FreeTime';
import FootballAcademy from '@/pages/football/Academy';
import FootballSchools from '@/pages/football/Schools';
import FootballFields from '@/pages/football/Fields';
import CollectionsPage from '@/pages/finance/Collections';
import PricingPage from '@/pages/finance/Pricing';
import NotFound from '@/pages/NotFound';
import SwimmingDashboard from '@/modules/swimming/components/SwimmingDashboard';
import FootballDashboard from '@/modules/football/components/FootballDashboard';
import FieldsDashboard from '@/modules/fields/components/FieldsDashboard';
import AccountingDashboard from '@/modules/accounting/components/AccountingDashboard';

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Landing />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/reset-password" element={<ResetPassword />} />

    {/* Admin Routes */}
    <Route path="/admin/dashboard" element={
      <AuthLayout>
        <Layout><AdminDashboard /></Layout>
      </AuthLayout>
    } />

    {/* Protected Routes with Layout */}
    <Route path="/dashboard" element={
      <AuthLayout>
        <Layout><Dashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/bookings" element={
      <AuthLayout>
        <Layout><Bookings /></Layout>
      </AuthLayout>
    } />

    <Route path="/activities" element={
      <AuthLayout>
        <Layout><Activities /></Layout>
      </AuthLayout>
    } />

    <Route path="/activities/swimming" element={
      <AuthLayout>
        <Layout><Swimming /></Layout>
      </AuthLayout>
    } />

    <Route path="/activities/fields" element={
      <AuthLayout>
        <Layout><Fields /></Layout>
      </AuthLayout>
    } />

    {/* New Modular Routes */}
    <Route path="/swimming" element={
      <AuthLayout>
        <Layout><SwimmingDashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/football" element={
      <AuthLayout>
        <Layout><FootballDashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/fields" element={
      <AuthLayout>
        <Layout><FieldsDashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/accounting" element={
      <AuthLayout>
        <Layout><AccountingDashboard /></Layout>
      </AuthLayout>
    } />

    {/* Swimming Sub Routes */}
    <Route path="/swimming/schools" element={
      <AuthLayout>
        <Layout><SwimmingSchools /></Layout>
      </AuthLayout>
    } />
    <Route path="/swimming/private" element={
      <AuthLayout>
        <Layout><SwimmingPrivate /></Layout>
      </AuthLayout>
    } />
    <Route path="/swimming/free-time" element={
      <AuthLayout>
        <Layout><SwimmingFreeTime /></Layout>
      </AuthLayout>
    } />

    {/* Football Section */}
    <Route path="/football/academy" element={
      <AuthLayout>
        <Layout><FootballAcademy /></Layout>
      </AuthLayout>
    } />
    <Route path="/football/schools" element={
      <AuthLayout>
        <Layout><FootballSchools /></Layout>
      </AuthLayout>
    } />
    <Route path="/football/fields" element={
      <AuthLayout>
        <Layout><FootballFields /></Layout>
      </AuthLayout>
    } />

    <Route path="/clients" element={
      <AuthLayout requiredRole="manager">
        <Layout><Clients /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/clients" element={
      <AuthLayout requiredRole="admin">
        <Layout><Clients /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/field-activities" element={
      <AuthLayout requiredRole="admin">
        <Layout><Fields /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/swimming-activities" element={
      <AuthLayout requiredRole="admin">
        <Layout><Swimming /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/bookings/pending" element={
      <AuthLayout requiredRole="admin">
        <Layout><Bookings /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/bookings/confirmed" element={
      <AuthLayout requiredRole="admin">
        <Layout><Bookings /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/payments" element={
      <AuthLayout requiredRole="admin">
        <Layout><Dashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/admin/reports" element={
      <AuthLayout requiredRole="admin">
        <Layout><Dashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/payments" element={
      <AuthLayout>
        <Layout><Dashboard /></Layout>
      </AuthLayout>
    } />

    {/* Financial Affairs */}
    <Route path="/finance/collections" element={
      <AuthLayout>
        <Layout><CollectionsPage /></Layout>
      </AuthLayout>
    } />
    <Route path="/finance/pricing" element={
      <AuthLayout>
        <Layout><PricingPage /></Layout>
      </AuthLayout>
    } />

    <Route path="/users" element={
      <AuthLayout requiredRole="admin">
        <Layout><Users /></Layout>
      </AuthLayout>
    } />

    <Route path="/roles" element={
      <AuthLayout requiredRole="admin">
        <Layout><Roles /></Layout>
      </AuthLayout>
    } />

    <Route path="/reports" element={
      <AuthLayout requiredRole="manager">
        <Layout><Dashboard /></Layout>
      </AuthLayout>
    } />

    <Route path="/settings" element={
      <AuthLayout>
        <Layout><Settings /></Layout>
      </AuthLayout>
    } />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
