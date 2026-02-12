import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import RuneIcon from '@/app/atoms/Icons/RuneIcon';
import { pages } from '@/app/constants/pages';
import { useGameContext } from '@/app/contexts/GameContext';
import { getCloudinaryImage } from '@/app/helpers/get-cloudinary-image';
import withScroller from '@/app/wrappers/withScroller';
import NavbarButton from './components/NavbarButton';
import RuneViewerButton from './components/RuneViewerButton';

const Header = withScroller(({ scrollTo }) => {
  const { isPlaying } = useGameContext();

  return (
    <header className="sticky top-0 z-40">
      <div
        id="header-nav"
        className={twMerge(
          'absolute my-8 px-4 w-full flex items-center gap-4 justify-between',
          isPlaying ? 'hidden' : '',
        )}
      >
        <div>
          <figure className="h-16 w-16">
            <Image
              className="rounded-full"
              src={getCloudinaryImage('avatar')}
              width={128}
              height={128}
              alt="Ale's Avatar"
              decoding="async"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="hidden lg:block leading-none text-2xl xl:text-3xl text-white drop-shadow-lg">
          <div className="w-0 h-0 opacity-0 lg:opacity-100 lg:w-auto lg:h-auto transition-all">
            Alejandro <span className="text-orange-500">Tidele</span>
          </div>
        </div>
        <nav className="hidden sm:flex py-1.5 rounded-full ml-auto text-xs uppercase pointer-events-auto bg-orange-400 text-white">
          <ul className="flex gap-2 h-full my-auto mx-3 align-middle items-center">
            {pages.map(({ name, id }) => (
              <li
                key={id}
                role="button"
                className="rounded-full text-xs tablet:text-sm lg:text-base xl:text-lg hover:bg-orange-300 hover:text-white cursor-pointer xs:px-2 md:px-4 py-1 tracking-wider"
                onClick={() => scrollTo(id)}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 pointer-events-auto mx-6 sm:mx-0">
          <RuneViewerButton
            id="rune-viewer-button"
            className="hidden sm:flex justify-center xs:px-3 lg:px-4 py-2.5 tracking-wider text-xs tablet:text-sm lg:text-base xl:text-lg uppercase bg-orange-400 text-white hover:bg-orange-300 hover:text-white"
          >
            Rune Viewer
          </RuneViewerButton>
        </div>
        <div className="sm:hidden flex gap-4">
          <RuneViewerButton
            id="rune-icon-button"
            aria-label="Open Rune viewer"
            className="w-16 h-16 px-0 bg-orange-400 text-white"
          >
            <RuneIcon />
          </RuneViewerButton>
          <NavbarButton />
        </div>
      </div>
    </header>
  );
});

export default Header;
