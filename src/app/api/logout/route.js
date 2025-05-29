import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/utils/auth/authOptions';
import { connectToDatabase } from '@/app/lib/mongodb/mongodb';
import User from '@/app/utils/models/User';

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  await connectToDatabase();
  await User.updateOne(
    { email: session.user.email },
    { $set: { token: null } }
  );

  return NextResponse.json({ message: 'Token cleared' });
}
