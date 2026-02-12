import Image from 'next/image';
import type { FC } from 'react';
import { useMemo } from 'react';
import { getCloudinaryImage } from '@/app/helpers/get-cloudinary-image';

type Props = { color: string; size?: number; className?: string };

const RuneImage: FC<Props> = ({ color, className, size = 100 }) => {
  const runePicture = useMemo(
    () => getCloudinaryImage(`rune-${color}`),
    [color],
  );

  return (
    <Image
      className={className}
      alt={`Rune color: ${color}`}
      src={runePicture}
      width={size}
      height={size}
      decoding="async"
      loading="lazy"
    />
  );
};

export default RuneImage;
