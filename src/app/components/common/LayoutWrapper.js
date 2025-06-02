'use client';

import { usePathname } from 'next/navigation';
import LayoutFooter from './LayoutFooter';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === '/login' || pathname === '/loginHelp';
  const isFAQPage = pathname === '/faq';

  const style = {
    color: 'white',
    backgroundColor: isLoginPage ? 'rgb(22, 22, 22)' : 'black',
    ...(isFAQPage && {
      background:
        'linear-gradient(10deg, rgba(229, 9, 20, 0) 58%, rgb(229, 9, 20) 128%), #000',
    }),
  };

  return (
    <div style={style}>
      <main>{children}</main>
      <LayoutFooter />
    </div>
  );
}
