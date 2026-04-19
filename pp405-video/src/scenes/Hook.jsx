import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../theme';

export const Hook = () => {
  const frame = useCurrentFrame();

  const pulseScale = interpolate(
    frame % 60,
    [0, 30, 60],
    [1, 1.04, 1],
    { easing: Easing.inOut(Easing.sin) }
  );

  return (
    <SceneLayout>
      {/* Background accent circle */}
      <div style={{
        position: 'absolute',
        width: 700,
        height: 700,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.accent}22 0%, transparent 70%)`,
        transform: `scale(${pulseScale})`,
        top: '50%',
        left: '50%',
        marginTop: -350,
        marginLeft: -350,
      }} />

      {/* UCLA / Source badge */}
      <AnimatedText delay={0} style={{ marginBottom: 40 }}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 26,
          color: theme.accent,
          letterSpacing: 3,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          Pelage Pharmaceuticals · UCLA
        </div>
      </AnimatedText>

      {/* Main headline */}
      <AnimatedText delay={0.3}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 90,
          fontWeight: 700,
          color: theme.white,
          lineHeight: 1.05,
          textAlign: 'center',
          marginBottom: 40,
        }}>
          Scientists just grew hair in{' '}
          <span style={{ color: theme.accent }}>completely bald spots.</span>
        </div>
      </AnimatedText>

      {/* Sub-text */}
      <AnimatedText delay={0.8}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 40,
          color: theme.offWhite,
          textAlign: 'center',
          lineHeight: 1.4,
          marginBottom: 60,
        }}>
          No injections. No surgery.
          <br />Just a once-daily topical gel.
        </div>
      </AnimatedText>

      {/* Question */}
      <AnimatedText delay={1.5}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 36,
          color: theme.muted,
          textAlign: 'center',
          fontStyle: 'italic',
        }}>
          Is this the real thing — or are we about to get our hopes crushed again?
        </div>
      </AnimatedText>

      {/* Scroll indicator */}
      <AnimatedText delay={2.5} style={{ position: 'absolute', bottom: 60 }}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 24,
          color: theme.accent,
          textAlign: 'center',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}>
          We did the research ↓
        </div>
      </AnimatedText>
    </SceneLayout>
  );
};
