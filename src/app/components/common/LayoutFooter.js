'use client';

import { usePathname } from 'next/navigation';
import SignInFooter from './SignInFooter';
import Footer from './Footer';
import FAQFooter from './FAQFooter';

export default function LayoutFooter() {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/loginHelp') {
    return <SignInFooter />;
  }
  if (pathname === '/faq') {
    return <FAQFooter />;
  }

  return <Footer />;
}
