import type { ComponentType } from 'react';

type ExtendedProps = { playSound: () => void };

const withAudioPlayer =
  <P extends object>(
    Component: ComponentType<P & ExtendedProps>,
    audioSrc: string,
  ) =>
  (props: P) => {
    const audio = new Audio(`/sounds/${audioSrc}`);

    return <Component {...props} playSound={() => audio.play()} />;
  };

export default withAudioPlayer;
