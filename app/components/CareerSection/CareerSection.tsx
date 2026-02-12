import { useMemo } from 'react';
import { getAllJobs } from '@/app/api/jobs-api';
import { JobCard } from './components/JobCard';

const CareerSection = () => {
  const jobs = useMemo(() => getAllJobs(), []);

  return (
    <div id="career-section" className="w-full ">
      <div className="mx-auto">
        <div className="bg-purple-900/50">
          <div className="mx-auto px-6 md:px-12 py-4 font-lilita uppercase text-xl md:text-lg xl:text-xl text-purple-400">
            Career Odyssey
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-4 xl:gap-8 px-6 md:px-12 pb-6 md:pb-12">
            {jobs.map((career, index) => (
              <JobCard key={index} {...career} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
