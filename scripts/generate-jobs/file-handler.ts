import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { getCloudinaryImage } from '@/app/helpers/get-cloudinary-image';
import type { Job } from '@/app/types/api/jobs';
import { INPUT_FOLDER, OUTPUT_FILE, OUTPUT_FOLDER } from './constants';
import { getDateTime } from './helpers';

const postsDirectory = join(process.cwd(), INPUT_FOLDER);

type DatasourceJob = Job & { date: number };

const getJobBySlug = (slug: string): DatasourceJob => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const company = data.company.replaceAll(' ', '-');

  return {
    ...data,
    date: getDateTime(data.startDate),
    brandMark: getCloudinaryImage(`${company}-brand-mark`),
    backgroundSrc: getCloudinaryImage(company),
    content,
  } as DatasourceJob;
};

export const getAllJobs = () =>
  fs
    .readdirSync(postsDirectory)
    .map(getJobBySlug)
    .sort((j, j2) => j2.date - j.date);

export const writeJobs = (jobs: DatasourceJob[]) => {
  const outputFolder = join(process.cwd(), OUTPUT_FOLDER);

  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

  fs.writeFileSync(
    join(outputFolder, OUTPUT_FILE),
    JSON.stringify(jobs, null, 2),
  );
};
