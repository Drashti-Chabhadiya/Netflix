import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_CLOUDINARY_API_SECRET,
});

export const uploadImageToCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'user_profiles',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );

    stream.end(buffer);
  });
};
