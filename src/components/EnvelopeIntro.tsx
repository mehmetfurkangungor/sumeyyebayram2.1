import { useState } from 'react';
import { motion } from 'framer-motion';

type EnvelopeIntroProps = {
  onComplete?: () => void;
};

type IntroPhase = 'closed' | 'opening' | 'reveal' | 'complete';

export default function EnvelopeIntro({ onComplete }: EnvelopeIntroProps) {
  const [phase, setPhase] = useState<IntroPhase>('closed');
  const isOpening = phase !== 'closed';
  const isReveal = phase === 'reveal' || phase === 'complete';

  const handleSealClick = () => {
    if (isOpening) return;

    setPhase('opening');
    window.setTimeout(() => setPhase('reveal'), 1250);
    window.setTimeout(() => {
      setPhase('complete');
      onComplete?.();
    }, 2500);
  };

  return (
    <motion.div
      className="envelope-intro-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === 'complete' ? 0 : 1 }}
      transition={{ duration: phase === 'complete' ? 0.5 : 0.7, ease: 'easeInOut' }}
    >
      <div className="css-envelope-stage" aria-hidden={phase === 'complete'}>
        <motion.div
          className="css-envelope-paper"
          initial={false}
          animate={{
            opacity: isOpening ? 1 : 0,
            scale: isReveal ? 1 : 0.92,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="css-envelope-paper-content"
            initial={false}
            animate={{
              opacity: isReveal ? 1 : 0,
              y: isReveal ? 0 : 24,
            }}
            transition={{ duration: 0.85, delay: isReveal ? 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="css-envelope-monogram">S & B</div>
            <div className="css-envelope-rule" />
            <div className="css-envelope-copy">Davetiyemiz</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="css-envelope-flap css-envelope-flap-top"
          initial={false}
          animate={{
            y: isOpening ? '-100vh' : 0,
            rotateX: isOpening ? -65 : 0,
            opacity: phase === 'complete' ? 0 : 1,
          }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="css-envelope-flap css-envelope-flap-bottom"
          initial={false}
          animate={{
            y: isOpening ? '100vh' : 0,
            rotateX: isOpening ? 65 : 0,
            opacity: phase === 'complete' ? 0 : 1,
          }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="css-envelope-flap css-envelope-flap-left"
          initial={false}
          animate={{
            x: isOpening ? '-100vw' : 0,
            rotateY: isOpening ? -35 : 0,
            opacity: phase === 'complete' ? 0 : 1,
          }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="css-envelope-flap css-envelope-flap-right"
          initial={false}
          animate={{
            x: isOpening ? '100vw' : 0,
            rotateY: isOpening ? 35 : 0,
            opacity: phase === 'complete' ? 0 : 1,
          }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="css-envelope-seal-position">
          <motion.button
            className="css-envelope-seal"
            type="button"
            aria-label="Zarfı aç"
            onClick={handleSealClick}
            disabled={isOpening}
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 0.75 : [1, 1.035, 1],
            }}
            transition={
              isOpening
                ? { duration: 0.4, ease: 'easeOut' }
                : { duration: 1.9, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <span>SB</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
