'use client';

import { usePathname } from 'next/navigation';
import LayoutFooter from './LayoutFooter';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === '/login' || pathname === '/loginHelp';
  const backgroundColor = isLoginPage ? 'rgb(22, 22, 22)' : 'black';

  return (
    <div
      style={{
        backgroundColor,
        color: 'white',
      }}
    >
      <main>{children}</main>
      <LayoutFooter />
    </div>
  );
}
