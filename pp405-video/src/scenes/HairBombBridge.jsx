import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { theme } from '../theme';

const Feature = ({ icon, text, delay }) => (
  <AnimatedText delay={delay}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginBottom: 22,
    }}>
      <span style={{ fontSize: 34 }}>{icon}</span>
      <span style={{
        fontFamily: theme.fontBody,
        fontSize: 30,
        color: theme.offWhite,
        lineHeight: 1.3,
      }}>
        {text}
      </span>
    </div>
  </AnimatedText>
);

export const HairBombBridge = () => {
  const frame = useCurrentFrame();

  const glowOpacity = interpolate(
    frame % 90,
    [0, 45, 90],
    [0.4, 0.9, 0.4],
    { easing: Easing.inOut(Easing.sine) }
  );

  return (
    <SceneLayout bg="#0a0a0a">
      {/* Glow */}
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${theme.accent}${Math.round(glowOpacity * 40).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      <AnimatedText delay={0}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 30,
          color: theme.accent,
          letterSpacing: 3,
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: 16,
        }}>
          While PP405 finishes its trials...
        </div>
      </AnimatedText>

      <AnimatedText delay={0.3}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 86,
          fontWeight: 700,
          color: theme.white,
          textAlign: 'center',
          lineHeight: 1.0,
          marginBottom: 8,
        }}>
          UluRx
        </div>
      </AnimatedText>

      <AnimatedText delay={0.5}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 56,
          fontWeight: 700,
          color: theme.accent,
          textAlign: 'center',
          marginBottom: 50,
          letterSpacing: 2,
        }}>
          HAIR BOMB
        </div>
      </AnimatedText>

      <div style={{ width: '100%' }}>
        <Feature icon="💊" text="Prescription-grade Latanoprost — clinically proven" delay={0.8} />
        <Feature icon="🔬" text="Combined with Minoxidil & other targeted medications" delay={1.0} />
        <Feature icon="👨‍⚕️" text="Custom-compounded by board-certified dermatologists" delay={1.2} />
        <Feature icon="🏭" text="Compounded fresh in a licensed U.S. pharmacy" delay={1.4} />
        <Feature icon="📦" text="No fillers. No drug-store formulas. Made for your scalp." delay={1.6} />
      </div>

      <AnimatedText delay={2.0}>
        <div style={{
          background: theme.accent,
          borderRadius: 12,
          padding: '28px 40px',
          marginTop: 30,
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            fontFamily: theme.fontHeading,
            fontSize: 34,
            fontWeight: 700,
            color: theme.bg,
          }}>
            PP405 is the future. Hair Bomb is available right now.
          </div>
        </div>
      </AnimatedText>
    </SceneLayout>
  );
};
