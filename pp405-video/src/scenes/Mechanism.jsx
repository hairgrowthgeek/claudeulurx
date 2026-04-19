import { useCurrentFrame } from 'remotion';
import { SceneLayout } from '../components/SceneLayout';
import { AnimatedText } from '../components/AnimatedText';
import { Chip } from '../components/Chip';
import { theme } from '../theme';

const Step = ({ number, title, body, delay }) => (
  <AnimatedText delay={delay}>
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24,
      marginBottom: 36,
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: theme.accent,
        color: theme.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.fontHeading,
        fontSize: 28,
        fontWeight: 700,
        flexShrink: 0,
        marginTop: 4,
      }}>
        {number}
      </div>
      <div>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 34,
          fontWeight: 700,
          color: theme.white,
          marginBottom: 8,
        }}>
          {title}
        </div>
        <div style={{
          fontFamily: theme.fontBody,
          fontSize: 28,
          color: theme.muted,
          lineHeight: 1.4,
        }}>
          {body}
        </div>
      </div>
    </div>
  </AnimatedText>
);

export const Mechanism = () => {
  return (
    <SceneLayout>
      <AnimatedText delay={0} style={{ marginBottom: 20, alignSelf: 'flex-start' }}>
        <Chip>How It Works</Chip>
      </AnimatedText>

      <AnimatedText delay={0.2} style={{ marginBottom: 40, alignSelf: 'flex-start' }}>
        <div style={{
          fontFamily: theme.fontHeading,
          fontSize: 66,
          fontWeight: 700,
          color: theme.white,
          lineHeight: 1.1,
        }}>
          The Science,{' '}
          <span style={{ color: theme.accent }}>Simplified</span>
        </div>
      </AnimatedText>

      <Step
        number="1"
        delay={0.6}
        title="Follicles go dormant — not dead"
        body="In pattern hair loss, stem cells inside follicles switch off. They stop cycling. The follicle still exists."
      />
      <Step
        number="2"
        delay={1.2}
        title="PP405 blocks the MPC gatekeeper"
        body="The Mitochondrial Pyruvate Carrier controls energy flow inside the cell. PP405 inhibits it — causing pyruvate to build up."
      />
      <Step
        number="3"
        delay={1.8}
        title="Stem cells get a fuel signal"
        body="The pyruvate triggers glycolysis — cells generate more energy. That energy jumpstarts the dormant stem cells."
      />

      <AnimatedText delay={2.4}>
        <div style={{
          background: theme.accent,
          borderRadius: 12,
          padding: '28px 40px',
          marginTop: 10,
          textAlign: 'center',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            fontFamily: theme.fontHeading,
            fontSize: 36,
            fontWeight: 700,
            color: theme.bg,
          }}>
            It doesn't just feed your hair. It reboots the factory.
          </div>
        </div>
      </AnimatedText>
    </SceneLayout>
  );
};
