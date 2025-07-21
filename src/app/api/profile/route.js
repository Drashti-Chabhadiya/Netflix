import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb/mongodb';
import { uploadImageToCloudinary } from '@/app/utils/cloudinary/cloudinary';
import User from '@/app/utils/models/User';
import { Buffer } from 'buffer';

export async function PUT(request) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    console.log("formData:", formData);
    const userId = formData.get('userId');
    const name = formData.get('name');
    const email = formData.get('email');
    const imageFile = formData.get('image');
    console.log("userId:", userId, "name:", name, "email:", email, "imageFile:", imageFile);

    if (!userId || !name || !email) {
      return NextResponse.json(
        { error: 'User ID, name, and email are required' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const user = await User.findById(userId);

    console.log("user:**-*-*-*-*-*-404-*-*-*-*-*-*-", user);
    // if (!user) {
    //   return NextResponse.json(
    //     { error: 'User not found' },
    //     {
    //       status: 404,
    //       headers: {
    //         'Access-Control-Allow-Origin': '*',
    //       },
    //     }
    //   );
    // }

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

    return NextResponse.json(
      {
        message: 'Profile updated successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
