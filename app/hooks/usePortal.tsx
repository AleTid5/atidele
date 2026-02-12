import type { ReactNode, ReactPortal } from 'react';
import { useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';

type UsePortalType = {
  ParentPortal: () => ReactNode;
  openPortal: (children: ReactNode) => ReactPortal;
};

const usePortal = (container: HTMLElement = document.body): UsePortalType => {
  const ref = useRef<HTMLDivElement>(null);

  return {
    ParentPortal: useMemo(() => () => <div ref={ref} />, []),
    openPortal: (children) =>
      ref.current
        ? createPortal(children, ref.current)
        : createPortal(children, container),
  };
};

export default usePortal;
