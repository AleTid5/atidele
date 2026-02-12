import { Fragment, type ReactNode } from 'react';

export const chain = (...args: ReactNode[]) =>
  args.map((arg, index) => (
    <Fragment key={index}>
      <div>{arg}</div>
      {index < args.length - 1 && (
        <span className="mx-2 hidden xs:block">·</span>
      )}
    </Fragment>
  ));
