import { connectToDatabase } from '@/app/lib/mongodb/mongodb';
import User from '@/app/utils/models/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXT_JWT_SECRET || 'secret_key_for_dev';

export async function POST(request) {
  try {
    await connectToDatabase();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    let user = await User.findOne({ email });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

      user = new User({ email, password: hashedPassword, token });
      await user.save();

      return NextResponse.json(
        {
          message: 'User registered and logged in',
          token,
          email: user.email,
          id: user._id,
        },
        { status: 201 }
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    user.token = token;
    await user.save();

    return NextResponse.json(
      {
        message: 'Login successful',
        token,
        email: user.email,
        id: user._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
