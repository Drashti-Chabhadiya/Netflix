'use client';

import { usePathname } from 'next/navigation';
import LayoutFooter from './LayoutFooter';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === '/login' || pathname === '/loginHelp';
  const isFAQPage = pathname === '/faq';

  const mainBackgroundColor = isLoginPage
    ? 'rgb(22, 22, 22)'
    : isFAQPage
      ? 'white'
      : 'black';

  const footerStyle = isFAQPage
    ? {
        color: 'white',
        background:
          'linear-gradient(10deg, rgba(229, 9, 20, 0) 58%, rgb(229, 9, 20) 128%), #000',
      }
    : {
        color: 'white',
        backgroundColor: isLoginPage ? 'rgb(22, 22, 22)' : 'black',
      };

  return (
    <div>
      <div
        style={{
          backgroundColor: mainBackgroundColor,
          color: isFAQPage ? 'black' : 'white',
        }}
      >
        <main>{children}</main>
      </div>
      <div style={footerStyle}>
        <LayoutFooter />
      </div>
    </div>
  );
}
