import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb/mongodb';
import { uploadImageToCloudinary } from '@/app/utils/cloudinary/cloudinary';
import User from '@/app/utils/models/User';
import { Buffer } from 'buffer';

export async function PUT(request) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    const userId = formData.get('userId');
    const name = formData.get('name');
    const email = formData.get('email');
    const imageFile = formData.get('image');

    if (!userId || !name || !email) {
      return NextResponse.json(
        { error: 'User ID, name, and email are required' },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    let imageUrl = user.image;

    if (imageFile && typeof imageFile === 'object' && imageFile.size > 0) {
      // Convert imageFile (File) to Buffer
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Upload buffer to Cloudinary
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
      { status: 200 }
    );
  } catch (error) {
    console.error('Profile update error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
