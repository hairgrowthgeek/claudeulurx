import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { theme } from '../theme';

export const SceneLayout = ({ children, bg = theme.bg }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], { clamp: true });
  const fadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], { clamp: true });
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 60px',
        boxSizing: 'border-box',
        opacity,
      }}
    >
      {children}
    </div>
  );
};
