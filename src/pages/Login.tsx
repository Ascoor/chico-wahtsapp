import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthForms from '@/components/auth/AuthForms';
import { useAuth } from '@/context/AuthContext';

export default function Login() {
  const { isAuthenticated } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <AuthForms mode={mode} setMode={setMode} />
    </div>
  );
}
