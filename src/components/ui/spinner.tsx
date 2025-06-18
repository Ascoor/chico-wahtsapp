import React from 'react';

interface SpinnerProps {
  size?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'h-8 w-8', className = '' }) => (
  <div
    className={`animate-spin rounded-full border-4 border-blue-600 border-t-transparent ${size} ${className}`}
  />
);

export default Spinner;
