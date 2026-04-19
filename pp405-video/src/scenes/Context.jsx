import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { Chip } from '../components/Chip';
import { theme } from '../theme';

export const Context = () => {
  return (
    <SceneLayout>
      <AnimatedText delay={0} style={{ marginBottom: 30 }}>
        <Chip>The Treatment</Chip>
      </AnimatedText>

      <AnimatedText delay={0.3}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 100,
          fontWeight: 700,
          color: theme.white,
          textAlign: 'center',
          letterSpacing: -2,
          marginBottom: 20,
        }}>
          PP405
        </div>
      </AnimatedText>

      <AnimatedText delay={0.6}>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 34,
          color: theme.offWhite,
          textAlign: 'center',
          lineHeight: 1.5,
          marginBottom: 60,
        }}>
          Developed at{' '}
          <span style={{ color: theme.accent, fontWeight: 700 }}>UCLA</span>
          {' '}by{' '}
          <span style={{ color: theme.accent, fontWeight: 700 }}>Pelage Pharmaceuticals</span>
        </div>
      </AnimatedText>

      <AnimatedText delay={1.0}>
        <div style={{
          background: theme.bgCard,
          border: `1px solid #333`,
          borderRadius: 16,
          padding: '40px 50px',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: theme.fontBody,
            fontSize: 32,
            color: theme.offWhite,
            lineHeight: 1.6,
          }}>
            Most treatments try to{' '}
            <span style={{ color: theme.danger, fontWeight: 700 }}>slow down the loss.</span>
            <br />
            PP405 does something else entirely.
            <br />
            <span style={{ color: theme.success, fontWeight: 700 }}>It tries to wake the follicle back up.</span>
          </div>
        </div>
      </AnimatedText>
    </SceneLayout>
  );
};
