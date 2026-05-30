import { useState } from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../invitationData';

const OPEN_SEQUENCE_MS = 2600;

export default function Envelope({ onOpenComplete }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleTriggerOpen = () => {
    if (isOpening) return;

    setIsOpening(true);
    window.setTimeout(onOpenComplete, OPEN_SEQUENCE_MS);
  };

  return (
    <motion.div
      className="envelope-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <motion.div
        className="envelope-scene"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: isOpening ? 1.02 : 1 }}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
      >
        <motion.div
          className="envelope-paper"
          initial={false}
          animate={isOpening ? 'revealed' : 'tucked'}
          variants={{
            tucked: {
              y: 78,
              scale: 0.84,
              opacity: 0,
              rotate: -1.5,
            },
            revealed: {
              y: -132,
              scale: 0.96,
              opacity: 1,
              rotate: 0,
              transition: {
                delay: 0.65,
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <div className="envelope-paper-frame" />
          <div className="envelope-paper-initials">
            {invitationData.brideInitials} & {invitationData.groomInitials}
          </div>
          <div className="envelope-paper-title">
            {invitationData.bride} & {invitationData.groom}
          </div>
          <div className="envelope-paper-subtitle">Nişan Davetiyesi</div>
          <div className="envelope-paper-date">{invitationData.eventDateText}</div>
        </motion.div>

        <motion.img
          className="envelope-image envelope-image-closed"
          src="/envelope-closed.png"
          alt=""
          draggable="false"
          animate={{ opacity: isOpening ? 0 : 1, scale: isOpening ? 1.015 : 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />

        <motion.img
          className="envelope-image envelope-image-open"
          src="/envelope-open.png"
          alt=""
          draggable="false"
          initial={false}
          animate={{ opacity: isOpening ? 1 : 0, scale: isOpening ? 1 : 0.995 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />

        <motion.button
          className="envelope-seal-button"
          type="button"
          aria-label="Zarfı aç"
          onClick={handleTriggerOpen}
          disabled={isOpening}
          animate={{ opacity: isOpening ? 0 : 1 }}
          transition={
            isOpening
              ? { duration: 0.35, ease: 'easeOut' }
              : { duration: 0.3, ease: 'easeOut' }
          }
        />
      </motion.div>
    </motion.div>
  );
}
