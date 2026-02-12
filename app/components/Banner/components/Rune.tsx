import type { FC } from 'react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import RuneImage from '@/app/atoms/RuneImage';
import { useRuneContext } from '@/app/contexts/RuneContext';
import withAudioPlayer from '@/app/wrappers/withAudioPlayer';

type RuneProps = { color: string };

const Rune: FC<RuneProps> = withAudioPlayer(({ color, playSound }) => {
  const { collectRune } = useRuneContext();
  const [animation, setAnimation] = useState(false);
  const [hideRune, setHideRune] = useState(false);

  const onRuneClicked = () => {
    if (hideRune) return;
    playSound();
    setHideRune(true);
    collectRune(color);
  };

  return (
    <div
      className={twMerge(
        'transition-all ease-in duration-1000',
        animation ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
      )}
      onAnimationStart={() => setAnimation(true)}
    >
      <button
        id={`rune-color-${color}`}
        aria-label={`Rune color: ${color}`}
        className={twMerge(
          `w-1/2 md:w-2/3 lg:w-full transition-opacity ease-in duration-400 rune-${color}`,
          hideRune ? 'opacity-0 cursor-default' : '',
        )}
        onClick={onRuneClicked}
      >
        <RuneImage color={color} />
      </button>
    </div>
  );
}, 'rune-collected.mp3');

export default Rune;
