import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb/mongodb';
import { uploadImageToCloudinary } from '@/app/utils/cloudinary/cloudinary';
import User from '@/app/utils/models/User';
import { Buffer } from 'buffer';

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Replace * with specific domain in production
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function PUT(request) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    const userId = formData.get('userId');
    const name = formData.get('name');
    const email = formData.get('email');
    const imageFile = formData.get('image');

    if (!userId || !name || !email) {
      return new NextResponse(
        JSON.stringify({ error: 'User ID, name, and email are required' }),
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return new NextResponse(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    let imageUrl = user.image;

    if (imageFile && typeof imageFile === 'object' && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      imageUrl = await uploadImageToCloudinary(buffer);
    }

    user.name = name;
    user.email = email;
    user.image = imageUrl;
    await user.save();

    return new NextResponse(
      JSON.stringify({
        message: 'Profile updated successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      }),
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Replace * with your frontend URL for security
        },
      }
    );
  } catch (error) {
    console.error('Profile update error:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
