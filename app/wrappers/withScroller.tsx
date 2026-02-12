import type { ComponentType } from 'react';

type ExtendedProps = {
  scrollTo: (id: string) => void;
  scrollToTop: () => void;
};

const withScroller =
  <P extends object>(Component: ComponentType<P & ExtendedProps>) =>
  (props: P) => {
    const onScroll = (id: string) => {
      const { clientHeight = 50 } = document.getElementById('header-nav') ?? {};
      const { offsetLeft, offsetTop = 0 } = document.getElementById(id) ?? {};

      window.scrollTo({
        top: offsetTop - clientHeight,
        left: offsetLeft,
        behavior: 'smooth',
      });
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

    return (
      <Component {...props} scrollTo={onScroll} scrollToTop={scrollToTop} />
    );
  };

export default withScroller;
