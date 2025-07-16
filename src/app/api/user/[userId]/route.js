import { connectToDatabase } from '@/app/lib/mongodb/mongodb';
import User from '@/app/utils/models/User';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const actualParams = await params;
  const { userId } = actualParams;

  try {
    await connectToDatabase();

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: 'user data fetch successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get user by ID error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
