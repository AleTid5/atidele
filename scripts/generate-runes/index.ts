import { getAllRunes, writeRunes } from './file-handler';

const jobs = getAllRunes();

writeRunes(jobs);
