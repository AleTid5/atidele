export const getCloudinaryImage = (publicId: string): string => {
  const BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  return `${BASE_URL}/${publicId}`;
};
