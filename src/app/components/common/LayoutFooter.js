'use client';

import { usePathname } from 'next/navigation';
import SignInFooter from './SignInFooter';
import Footer from './Footer';

export default function LayoutFooter() {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/loginHelp') {
    return <SignInFooter />;
  }

  return <Footer />;
}
