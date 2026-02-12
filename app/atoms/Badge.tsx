import type { FC, PropsWithChildren } from 'react';
import { match } from 'ts-pattern';

type Props = { color: string };

const getColor = (color: string) =>
  match(color)
    .with('blue', () => 'bg-blue-400/10 text-blue-500 ring-blue-400/20')
    .with('green', () => 'bg-green-400/10 text-green-500 ring-green-400/30')
    .with('orange', () => 'bg-orange-400/10 text-orange-500 ring-orange-400/30')
    .with('purple', () => 'bg-purple-400/10 text-purple-500 ring-purple-400/30')
    .with('yellow', () => 'bg-yellow-400/10 text-yellow-500 ring-yellow-400/30')
    .with('sky', () => 'bg-sky-400/10 text-sky-500 ring-sky-400/30')
    .otherwise(() => {
      throw new Error('Unhandled color');
    });

const Badge: FC<PropsWithChildren<Props>> = ({ children, color }) => (
  <span
    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getColor(color)}`}
  >
    {children}
  </span>
);

export default Badge;
