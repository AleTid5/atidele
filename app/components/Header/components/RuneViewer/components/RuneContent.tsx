import type { FC } from 'react';
import { useMemo } from 'react';
import { match } from 'ts-pattern';
import { getRuneContent } from '@/app/api/runes-api';
import Badge from '@/app/atoms/Badge';

type Props = { rune: string };

const getColor = (runeColor: string) =>
  match(runeColor)
    .with('blue', () => 'from-blue-300 to-blue-700')
    .with('green', () => 'from-green-300 to-green-700')
    .with('orange', () => 'from-orange-300 to-orange-700')
    .with('purple', () => 'from-purple-300 to-purple-700')
    .with('yellow', () => 'from-yellow-300 to-yellow-700')
    .otherwise(() => {
      throw new Error('Unknown rune');
    });

const RuneContent: FC<Props> = ({ rune }) => {
  const runeContent = useMemo(() => getRuneContent(rune), [rune]);
  const textColor = useMemo(
    () => `bg-linear-to-r ${getColor(rune)} bg-clip-text text-transparent`,
    [rune],
  );

  if (!runeContent) {
    return null;
  }

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <h1
        className={`drop-shadow-xl opacity-90 ${textColor} text-3xl leading-none md:text-5xl`}
      >
        {runeContent.name}
      </h1>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 my-2">
        {runeContent.powers.map((power) => (
          <Badge key={power} color={rune}>
            {power}
          </Badge>
        ))}
      </div>
      <p className="text-neutral-500 text-xs italic font-semibold">
        {runeContent.origin}
      </p>
      <p className="text-xl mt-2 bg-linear-to-r from-neutral-300 to-neutral-400 bg-clip-text text-transparent">
        "{runeContent.description}"
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-8">
        <div>
          <h3 className={`${textColor} text-sm"`}>Temperament</h3>
          <p className="text-neutral-300 text-xs mt-1">
            {runeContent.temperament}
          </p>
        </div>
        <div>
          <h3 className={`${textColor} text-sm"`}>Symbol</h3>
          <p className="text-neutral-300 text-xs mt-1">{runeContent.symbol}</p>
        </div>
        <div>
          <h3 className={`${textColor} text-sm"`}>Activation</h3>
          <p className="text-neutral-300 text-xs mt-1">
            {runeContent.activation}
          </p>
        </div>
        <div>
          <h3 className={`${textColor} text-sm"`}>Drawbacks</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {runeContent.drawbacks.map((drawback) => (
              <Badge key={drawback} color={rune}>
                {drawback}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RuneContent;
