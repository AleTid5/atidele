import type { FC } from 'react';
import RuneImage from '@/app/atoms/RuneImage';
import { useRuneContext } from '@/app/contexts/RuneContext';

type Props = { rune: string; setSelectedRune: (rune: string) => void };

const RuneList: FC<Props> = ({ rune, setSelectedRune }) => {
  const { collectedRunes } = useRuneContext();

  return (
    <aside className="w-full xs:w-2/12 sm:2-1/12 overflow-y-hidden">
      <ul className="flex flex-row xs:flex-col mb-4 xs:mt-4 items-start justify-center">
        {collectedRunes.map((color) => (
          <li
            key={color}
            className="px-2 xs:p-4 cursor-pointer"
            onClick={() => setSelectedRune(color)}
          >
            <RuneImage
              color={color}
              className={rune !== color ? 'grayscale opacity-50' : ''}
              size={64}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RuneList;
