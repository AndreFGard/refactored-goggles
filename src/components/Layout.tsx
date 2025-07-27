import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#161023] justify-between font-['Spline_Sans','Noto_Sans',sans-serif]">
      <div className="flex-1">
        <div className="max-w-md mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}