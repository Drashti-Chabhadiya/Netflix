import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../utils/auth/authOptions';

export default async function ProtectedLayout({ children, redirectTo = '/' }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/login${redirectTo}`);
    // redirect(`/api/auth/signin?callbackUrl=${redirectTo}`);
  }

  return <>{children}</>;
}
