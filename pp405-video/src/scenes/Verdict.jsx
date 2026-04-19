import { useCurrentFrame, interpolate } from 'remotion';
import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { Chip } from '../components/Chip';
import { theme } from '../theme';

const CaveatRow = ({ icon, text, delay }) => (
  <AnimatedText delay={delay}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      marginBottom: 20,
    }}>
      <span style={{ fontSize: 32 }}>{icon}</span>
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

export const Verdict = () => {
  const frame = useCurrentFrame();

  const verdictOpacity = interpolate(frame, [60, 90], [0, 1], { clamp: true });
  const verdictScale = interpolate(frame, [60, 90], [0.9, 1], { clamp: true });

  return (
    <SceneLayout>
      <AnimatedText delay={0} style={{ marginBottom: 20, alignSelf: 'flex-start' }}>
        <Chip color={theme.accent}>Our Verdict</Chip>
      </AnimatedText>

      <AnimatedText delay={0.2} style={{ marginBottom: 40, alignSelf: 'flex-start' }}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 66,
          fontWeight: 700,
          color: theme.white,
          lineHeight: 1.1,
        }}>
          Breakthrough or{' '}
          <span style={{ color: theme.danger }}>Wishful Thinking?</span>
        </div>
      </AnimatedText>

      {/* Caveats */}
      <div style={{ width: '100%', marginBottom: 30 }}>
        <AnimatedText delay={0.5}>
          <div style={{
            fontFamily: theme.fontBody,
            fontSize: 28,
            color: theme.muted,
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>
            Be clear-eyed:
          </div>
        </AnimatedText>
        <CaveatRow icon="⚠️" text="78 people is a small sample size" delay={0.7} />
        <CaveatRow icon="⚠️" text="31% is a subgroup result — not all participants" delay={0.9} />
        <CaveatRow icon="⚠️" text="Only 4 weeks of dosing" delay={1.1} />
        <CaveatRow icon="⚠️" text="Phase 2 of a 3–4 phase process" delay={1.3} />
        <CaveatRow icon="🗓️" text="Phase 3 trials planned for 2026" delay={1.5} />
        <CaveatRow icon="🗓️" text="Earliest approval: 2027–2029" delay={1.7} />
      </div>

      {/* Verdict box */}
      <div style={{
        opacity: verdictOpacity,
        transform: `scale(${verdictScale})`,
        background: `linear-gradient(135deg, ${theme.accent}22, ${theme.accent}11)`,
        border: `2px solid ${theme.accent}`,
        borderRadius: 16,
        padding: '36px 40px',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 38,
          fontWeight: 700,
          color: theme.accent,
          marginBottom: 12,
        }}>
          The verdict:
        </div>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 32,
          color: theme.white,
          lineHeight: 1.5,
        }}>
          PP405 is the most scientifically interesting hair loss compound in years.
          The mechanism is novel. The safety is clean. The early results are real.
          <br /><br />
          <span style={{ color: theme.accent, fontWeight: 700 }}>
            This is not wishful thinking. It's early, promising, legitimate science.
          </span>
          <br />
          But it is <span style={{ color: theme.danger }}>years away</span> from your medicine cabinet.
        </div>
      </div>
    </SceneLayout>
  );
};
