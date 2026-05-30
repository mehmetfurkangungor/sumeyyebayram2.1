import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroInvitationCard from './HeroInvitationCard';
import envelopeClosedImage from '../../images/zarfkapali.png';
import envelopeOpenImage from '../../images/zarfacik.png';

type EnvelopeIntroProps = {
  onOpenComplete: () => void;
};

const OPEN_SEQUENCE_MS = 3550;

export default function EnvelopeIntro({ onOpenComplete }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);
    window.setTimeout(onOpenComplete, OPEN_SEQUENCE_MS);
  };

  return (
    <motion.div
      className="envelope-intro-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpening ? 0 : 1 }}
      transition={{
        duration: isOpening ? 0.65 : 0.7,
        delay: isOpening ? 2.95 : 0,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        className="envelope-intro-scene"
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: isOpening ? -24 : 0,
          scale: isOpening ? 1.01 : 1,
        }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="envelope-intro-card glass-card hero-card envelope-paper-card"
          initial={false}
          animate={
            isOpening
              ? {
                  opacity: [0, 0, 1, 1],
                  y: [120, 120, 58, -214],
                  scale: [0.54, 0.54, 0.6, 0.84],
                  rotate: [-1.2, -1.2, -0.35, 0],
                }
              : {
                  opacity: 0,
                  y: 120,
                  scale: 0.54,
                  rotate: -1.2,
                }
          }
          transition={{
            duration: 2.25,
            times: [0, 0.2, 0.48, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <HeroInvitationCard className="envelope-paper-card" />
        </motion.div>

        <motion.div
          className="envelope-intro-shell"
          initial={false}
          animate={
            isOpening
              ? {
                  y: [0, 0, 36, 760],
                  opacity: [1, 1, 1, 0],
                }
              : { y: 0, opacity: 1 }
          }
          transition={{
            duration: 2.7,
            times: [0, 0.64, 0.76, 1],
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <motion.img
            className="envelope-intro-image envelope-intro-image-closed"
            src={envelopeClosedImage}
            alt=""
            draggable="false"
            initial={false}
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 1.012 : 1,
            }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          />

          <motion.img
            className="envelope-intro-image envelope-intro-image-open"
            src={envelopeOpenImage}
            alt=""
            draggable="false"
            initial={false}
            animate={{
              opacity: isOpening ? 1 : 0,
              scale: isOpening ? 1 : 0.992,
            }}
            transition={{ duration: 0.85, ease: 'easeInOut' }}
          />

          <motion.button
            className="envelope-intro-seal"
            type="button"
            aria-label="Zarfı aç"
            onClick={handleOpen}
            disabled={isOpening}
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 1.16 : [1, 1.035, 1],
            }}
            transition={
              isOpening
                ? { duration: 0.35, ease: 'easeOut' }
                : { duration: 1.9, repeat: Infinity, ease: 'easeInOut' }
            }
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
