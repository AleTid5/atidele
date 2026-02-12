import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import type { Rune } from '@/app/types/api/runes';
import { INPUT_FOLDER, OUTPUT_FILE, OUTPUT_FOLDER } from './constants';

const postsDirectory = join(process.cwd(), INPUT_FOLDER);

const getRuneBySlug = (acc: object, rawSlug: string): Record<string, Rune> => {
  const slug = rawSlug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    ...acc,
    [slug]: data as Rune,
  };
};

export const getAllRunes = () =>
  fs.readdirSync(postsDirectory).reduce(getRuneBySlug, {});

export const writeRunes = (jobs: object) => {
  const outputFolder = join(process.cwd(), OUTPUT_FOLDER);

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  fs.writeFileSync(
    join(outputFolder, OUTPUT_FILE),
    JSON.stringify(jobs, null, 2),
  );
};
