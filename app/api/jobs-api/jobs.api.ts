import jobs from "@/app/data/jobs.json";
import type { Job } from "@/app/types/api/jobs";

export const getAllJobs = (): Job[] => {
  try {
    return jobs as unknown as Job[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
