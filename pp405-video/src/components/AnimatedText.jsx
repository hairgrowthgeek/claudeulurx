import { useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion';

export const AnimatedText = ({ children, delay = 0, style = {}, direction = 'up' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delayFrames = delay * fps;

  const progress = interpolate(frame - delayFrames, [0, 20], [0, 1], {
    clamp: true,
    easing: Easing.out(Easing.cubic),
  });

  const yOffset = direction === 'up' ? interpolate(progress, [0, 1], [30, 0]) : 0;
  const opacity = progress;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${yOffset}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
