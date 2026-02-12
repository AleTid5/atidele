import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Button from '@/app/atoms/Button';
import { useGameContext } from '@/app/contexts/GameContext';
import { useRuneContext } from '@/app/contexts/RuneContext';
import { getCloudinaryImage } from '@/app/helpers/get-cloudinary-image';
import withScroller from '@/app/wrappers/withScroller';
import './Banner.styles.scss';
import Rune from './components/Rune';

const Banner = withScroller(({ scrollTo, scrollToTop }) => {
  const { availableRunes } = useRuneContext();
  const { isPlaying, toggleIsPlaying } = useGameContext();

  const onPlayTeaser = () => {
    scrollToTop();
    toggleIsPlaying();
  };

  return (
    <div className="relative overflow-hidden bg-purple-950">
      <div className="z-20 w-[100px] h-[100px] absolute top-[30%] mt-[-50px] left-[50%]">
        {availableRunes.map((color) => (
          <Rune key={color} color={color} />
        ))}
      </div>
      <div className="relative z-10">
        <Image
          className="object-cover w-full h-full"
          alt="Main banner gif"
          src={getCloudinaryImage('main-background')}
          width={2000}
          height={667}
          priority
          unoptimized
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-b from-transparent to-purple-950" />
      </div>
      <div
        className={twMerge(
          'relative overflow-hidden lg:-mt-[200px] px-8 transition-all ease-in-out duration-700',
          isPlaying ? 'z-10 opacity-10 scale-90' : 'z-30',
        )}
      >
        <h1 className="text-center drop-shadow-xl opacity-90 text-yellow-300 text-5xl leading-none md:text-8xl">
          The Summoned
        </h1>
        <div className="mb-8">
          <div className="text-center font-bold text-2xl leading-none mb-2">
            <p className="text-orange-500 font-hand">2053 collected runes</p>
            <p className="text-white font-hand">Collect Runes Now!</p>
          </div>
          <div className="flex flex-col xs:flex-row justify-center gap-5 overflow-hidden text-white">
            <Button
              id="get-started-button"
              className="hover:opacity-100 bg-purple-500 duration-200"
              disabled={isPlaying}
              onClick={() => scrollTo('career-section')}
            >
              Get Started!
            </Button>
            <Button
              id="play-teaser-button"
              className="hover:opacity-100 bg-orange-400 duration-200"
              disabled={isPlaying}
              onClick={onPlayTeaser}
            >
              Play Teaser!
            </Button>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          'absolute w-full flex justify-center items-center transition-all ease-in-out duration-1000',
          isPlaying ? 'opacity-100 z-40 bottom-8' : 'opacity-0 -z-10 -bottom-8',
        )}
      >
        <Button
          id="stop-playing-button"
          aria-label="Stop playing teaser"
          className="hover:opacity-100 bg-orange-400"
          onClick={toggleIsPlaying}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </Button>
      </div>
    </div>
  );
});

export default Banner;
