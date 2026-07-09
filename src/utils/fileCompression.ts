// src/utils/fileCompression.ts

import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File) => {
  // Agar file image nahi hai (jaise PDF), toh direct return karein
  if (!file.type.startsWith('image/')) {
    return file;
  }

  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
  };

  try {
    const compressedBlob = await imageCompression(file, options);
    return new File([compressedBlob], file.name, {
      type: file.type,
    });
  } catch (error) {
    console.error('Compression Error:', error);
    return file; // Agar fail hua, toh original file return karein
  }
};