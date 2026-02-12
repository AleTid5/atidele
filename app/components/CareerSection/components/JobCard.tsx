import Image from 'next/image';
import type { FC } from 'react';
import { useModalContext } from '@/app/contexts/ModalContext';
import type { Job } from '@/app/types/api/jobs';
import withModal from '@/app/wrappers/withModal';
import JobModal from './JobModal';

export const JobCard: FC<Job> = withModal((career) => {
  const { setModal } = useModalContext();

  return (
    <>
      <div
        className="p-4 relative uppercase cursor-pointer grid sm:grid-cols-2 sm:grid-rows-2 gap-4 hover:brightness-50"
        role="button"
        onClick={() => setModal(true)}
      >
        <div className="absolute rounded-3xl xl:rounded-4xl inset-0 justify-center">
          <Image
            className="rounded-3xl xl:rounded-4xl w-full h-full object-cover"
            src={career.backgroundSrc}
            alt={`${career.company} background`}
            width={600}
            height={120}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="absolute rounded-3xl xl:rounded-4xl inset-0 bg-black opacity-50" />
        <h1 className="text-xl sm:text-lg lg:text-2xl xl:text-3xl shadow-2xl z-10 text-shadow-2">
          {career.company}
        </h1>
        <div className="grid align-middle justify-end w-full">
          <Image
            className="rounded-full drop-shadow-4"
            alt={`${career.company} brand mark`}
            src={career.brandMark}
            width={32}
            height={32}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
      <JobModal {...career} />
    </>
  );
});

export default JobCard;
