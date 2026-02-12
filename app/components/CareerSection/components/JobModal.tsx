import Image from 'next/image';
import type { FC } from 'react';
import Badge from '@/app/atoms/Badge';
import { useModalContext } from '@/app/contexts/ModalContext';
import { chain } from '@/app/helpers/chain';
import type { Job } from '@/app/types/api/jobs';
import Modal from '../../Modal';

const JobModal: FC<Job> = (career) => {
  const { open, onClose } = useModalContext();

  return (
    <Modal open={open} onClose={onClose}>
      <Image
        className="absolute left-0 w-full object-cover h-40 xs:h-32 md:h-36 filter brightness-50 blur-xs"
        alt={`${career.company} background`}
        src={career.backgroundSrc}
        width={600}
        height={120}
        decoding="async"
        loading="lazy"
      />
      <main className="flex-1 p-6 overflow-y-auto relative">
        <div className="flex items-end gap-2">
          <h1 className="drop-shadow-xl bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent text-3xl leading-none md:text-5xl text-nowrap">
            {career.company}
          </h1>
          <h3 className="drop-shadow-xl bg-linear-to-r from-slate-400 to-slate-500 bg-clip-text text-transparent text-sm leading-none md:text-xl text-nowrap">
            {career.position}
          </h3>
        </div>
        <div className="flex flex-col xs:flex-row text-xs italic text-slate-400 mt-0.5">
          {chain(
            career.location,
            career.startDate,
            career.endDate ?? 'Currently working here',
          )}
        </div>
        <div className="flex flex-nowrap gap-x-4 gap-y-1.5 mt-4 overflow-x-auto">
          {career.technologies.map((power) => (
            <Badge key={power} color="sky">
              {power}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between mt-8">
          <h2 className="drop-shadow-xl bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent text-2xl leading-none sm:text-3xl">
            {career.endDate ? 'What I did?' : "What I'm doing"}
          </h2>
          <a href={career.url} target="_blank">
            <Image
              className="rounded-full drop-shadow-4"
              alt={`${career.company} brand mark`}
              src={career.brandMark}
              width={32}
              height={32}
              decoding="async"
              loading="lazy"
            />
          </a>
        </div>
        <div
          className="flex flex-col gap-4 text-md mt-4 text-neutral-300"
          dangerouslySetInnerHTML={{ __html: career.content }}
        />
      </main>
    </Modal>
  );
};

export default JobModal;
