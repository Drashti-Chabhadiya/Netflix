import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth/authOptions';

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <h1>Access Denied</h1>;
  }

  return <h1>Welcome {session.user.name}</h1>;
}
