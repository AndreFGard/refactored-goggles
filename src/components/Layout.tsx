import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  // Pages that shouldn't show bottom navigation
  const hideNavigation = ['/login', '/signup', '/interests'].includes(location.pathname);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111811] justify-between font-sans">
      <div className="flex-1">
        <div className="max-w-md mx-auto">
          {children}
          {!hideNavigation && <BottomNavigation />}

        </div>
      </div>
    </div>
  );
}