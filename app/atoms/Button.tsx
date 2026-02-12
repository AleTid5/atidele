import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>;

const Button = ({ className, children, ...props }: ButtonProps) => (
  <button
    {...props}
    className={twMerge(
      'text-center px-5 p-3 text-xl tablet:text-3xl rounded-full opacity-90 flex justify-center items-center disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-default disabled:before:bg-blend-color-burn transition ease-linear duration-700',
      className,
    )}
  >
    {children}
  </button>
);

export default Button;
