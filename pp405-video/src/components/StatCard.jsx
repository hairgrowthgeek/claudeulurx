import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { theme } from '../theme';

export const StatCard = ({ stat, label, delay = 0, highlight = false }) => {
  const frame = useCurrentFrame();
  const delayFrames = delay * 30;

  const progress = interpolate(frame - delayFrames, [0, 25], [0, 1], {
    clamp: true,
    easing: Easing.out(Easing.back(1.2)),
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `scale(${interpolate(progress, [0, 1], [0.8, 1])})`,
        background: highlight ? theme.accent : theme.bgCard,
        border: `2px solid ${highlight ? theme.accent : '#333'}`,
        borderRadius: 16,
        padding: '36px 40px',
        textAlign: 'center',
        flex: 1,
      }}
    >
      <div
        style={{
          fontFamily: theme.fontHeading,
          fontSize: 80,
          fontWeight: 700,
          color: highlight ? theme.bg : theme.accent,
          lineHeight: 1,
        }}
      >
        {stat}
      </div>
      <div
        style={{
          fontFamily: theme.fontBody,
          fontSize: 28,
          color: highlight ? theme.bg : theme.offWhite,
          marginTop: 12,
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  );
};
