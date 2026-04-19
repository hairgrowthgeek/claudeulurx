import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../theme';

export const CTA = () => {
  const frame = useCurrentFrame();

  const bounce = interpolate(
    frame % 60,
    [0, 30, 60],
    [0, -12, 0],
    { easing: Easing.inOut(Easing.sine) }
  );

  const glowSize = interpolate(
    frame % 90,
    [0, 45, 90],
    [1, 1.06, 1],
    { easing: Easing.inOut(Easing.sine) }
  );

  return (
    <SceneLayout bg="#050505">
      {/* Pulsing background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at center, ${theme.accent}18 0%, transparent 65%)`,
        transform: `scale(${glowSize})`,
      }} />

      <AnimatedText delay={0}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 32,
          color: theme.muted,
          textAlign: 'center',
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 30,
        }}>
          Don't wait for 2027
        </div>
      </AnimatedText>

      <AnimatedText delay={0.3}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 76,
          fontWeight: 700,
          color: theme.white,
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Get started with what's{' '}
          <span style={{ color: theme.accent }}>working today.</span>
        </div>
      </AnimatedText>

      <AnimatedText delay={0.8}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 36,
          color: theme.offWhite,
          textAlign: 'center',
          lineHeight: 1.4,
          marginBottom: 70,
        }}>
          Comment below and we'll show you exactly what's in UluRx Hair Bomb
          and whether it's right for you.
        </div>
      </AnimatedText>

      {/* CTA Button */}
      <AnimatedText delay={1.3}>
        <div style={{
          transform: `translateY(${bounce}px)`,
          background: theme.accent,
          borderRadius: 20,
          padding: '40px 70px',
          textAlign: 'center',
          marginBottom: 50,
        }}>
          <div style={{
            fontFamily: theme.fontBody,
            fontSize: 24,
            color: theme.bg,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Comment below
          </div>
          <div style={{
            fontFamily: theme.fontHeading,
            fontSize: 72,
            fontWeight: 700,
            color: theme.bg,
            letterSpacing: 4,
          }}>
            HAIR BOMB
          </div>
        </div>
      </AnimatedText>

      {/* Follow prompt */}
      <AnimatedText delay={2.0}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 28,
          color: theme.muted,
          textAlign: 'center',
        }}>
          And follow — we'll update you when PP405 hits Phase 3.
        </div>
      </AnimatedText>

      {/* UluRx wordmark */}
      <AnimatedText delay={2.5} style={{ position: 'absolute', bottom: 60 }}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 40,
          fontWeight: 700,
          color: theme.accent,
          letterSpacing: 4,
          textTransform: 'uppercase',
          opacity: 0.7,
        }}>
          UluRx
        </div>
      </AnimatedText>
    </SceneLayout>
  );
};
