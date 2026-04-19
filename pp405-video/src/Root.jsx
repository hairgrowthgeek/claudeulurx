import { Composition } from 'remotion';
import { PP405Video } from './PP405Video';

export const RemotionRoot = () => {
  return (
    <Composition
      id="PP405Video"
      component={PP405Video}
      durationInFrames={5700}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
