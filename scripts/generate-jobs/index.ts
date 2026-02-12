import { getAllJobs, writeJobs } from './file-handler';

const jobs = getAllJobs();

writeJobs(jobs);
