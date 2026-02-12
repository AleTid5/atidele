import Image from 'next/image';
import { getCloudinaryImage } from '../helpers/get-cloudinary-image';

const MainSection = () => {
  return (
    <main
      id="main-section"
      className="flex min-h-screen flex-col items-center justify-between px-6 md:px-12 pb-6 mb:px-12 pt-20 bg-purple-950"
    >
      <div className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-32 h-32 rounded-full overflow-hidden">
        <Image
          className="object-cover hover:scale-125 transition-transform duration-300"
          src={getCloudinaryImage('profile')}
          width={200}
          height={200}
          alt="Ale's Avatar"
          decoding="async"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default MainSection;
