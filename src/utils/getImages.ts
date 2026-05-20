import fs from 'fs';
import path from 'path';

export function getImages(category: 'landscapes' | 'portraits'): string[] {
  const directoryPath = path.join(process.cwd(), 'public', category);
  try {
    const files = fs.readdirSync(directoryPath);
    return files
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .map((file) => `/${category}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${directoryPath}:`, error);
    return [];
  }
}
