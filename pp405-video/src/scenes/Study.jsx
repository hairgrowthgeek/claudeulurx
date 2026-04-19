import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { StatCard } from '../components/StatCard';
import { Chip } from '../components/Chip';
import { theme } from '../theme';

export const Study = () => {
  return (
    <SceneLayout>
      <AnimatedText delay={0} style={{ marginBottom: 20, alignSelf: 'flex-start' }}>
        <Chip>The Study</Chip>
      </AnimatedText>

      <AnimatedText delay={0.2} style={{ marginBottom: 50, alignSelf: 'flex-start' }}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 66,
          fontWeight: 700,
          color: theme.white,
          lineHeight: 1.1,
        }}>
          Phase 2a Clinical Trial
          <br />
          <span style={{ color: theme.accent }}>The Real Numbers</span>
        </div>
      </AnimatedText>

      {/* Study design badges */}
      <AnimatedText delay={0.6} style={{ marginBottom: 40, alignSelf: 'flex-start' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {['Randomised', 'Double-Blind', 'Placebo-Controlled'].map((label) => (
            <span key={label} style={{
              background: '#1a1a1a',
              border: `1px solid ${theme.accent}`,
              color: theme.accent,
              fontFamily: theme.fontBody,
              fontSize: 24,
              fontWeight: 700,
              padding: '8px 20px',
              borderRadius: 30,
              letterSpacing: 1,
            }}>
              {label}
            </span>
          ))}
        </div>
      </AnimatedText>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: 24, width: '100%', marginBottom: 40 }}>
        <StatCard stat="78" label="Participants (men & women)" delay={0.8} />
        <StatCard stat="4 wks" label="Dosing period" delay={1.0} />
        <StatCard stat="12 wks" label="Total follow-up" delay={1.2} />
      </div>

      {/* Key result */}
      <AnimatedText delay={1.6} style={{ width: '100%', marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 24, width: '100%' }}>
          <StatCard stat="31%" label="of men saw >20% hair density increase at week 8" delay={1.6} highlight />
          <StatCard stat="0%" label="in the placebo group" delay={1.8} />
        </div>
      </AnimatedText>

      {/* New hair fact */}
      <AnimatedText delay={2.2}>
        <div style={{
          background: '#0d1f14',
          border: `2px solid ${theme.success}`,
          borderRadius: 12,
          padding: '24px 32px',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            fontFamily: theme.fontBody,
            fontSize: 30,
            color: theme.success,
            fontWeight: 700,
          }}>
            ✓ New hair grew in follicles that had previously produced nothing
          </div>
          <div style={{
            fontFamily: theme.fontBody,
            fontSize: 26,
            color: theme.muted,
            marginTop: 8,
          }}>
            True regeneration — not just preservation of existing hair
          </div>
        </div>
      </AnimatedText>
    </SceneLayout>
  );
};
