import { Series } from 'remotion';
import { Hook } from './scenes/Hook';
import { Context } from './scenes/Context';
import { Mechanism } from './scenes/Mechanism';
import { Study } from './scenes/Study';
import { Verdict } from './scenes/Verdict';
import { HairBombBridge } from './scenes/HairBombBridge';
import { CTA } from './scenes/CTA';

// Total: 5700 frames @ 30fps = 190 seconds (~3:10)
export const PP405Video = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={360}>  {/* 12s */}
        <Hook />
      </Series.Sequence>
      <Series.Sequence durationInFrames={450}>  {/* 15s */}
        <Context />
      </Series.Sequence>
      <Series.Sequence durationInFrames={1050}> {/* 35s */}
        <Mechanism />
      </Series.Sequence>
      <Series.Sequence durationInFrames={1200}> {/* 40s */}
        <Study />
      </Series.Sequence>
      <Series.Sequence durationInFrames={1140}> {/* 38s */}
        <Verdict />
      </Series.Sequence>
      <Series.Sequence durationInFrames={840}>  {/* 28s */}
        <HairBombBridge />
      </Series.Sequence>
      <Series.Sequence durationInFrames={660}>  {/* 22s */}
        <CTA />
      </Series.Sequence>
    </Series>
  );
};
