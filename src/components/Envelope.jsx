import { useState } from 'react';
import HeroInvitationCard from './HeroInvitationCard';
import envelopeClosedImage from '../../images/zarfkapali.png';
import envelopeOpenImage from '../../images/zarfacik.png';

const OPEN_SEQUENCE_MS = 3600;

export default function Envelope({ onOpenComplete }) {
  const [isOpening, setIsOpening] = useState(false);
  const [stage, setStage] = useState('closed');

  const handleTriggerOpen = () => {
    if (isOpening) return;

    setIsOpening(true);
    setStage('opening');
    window.setTimeout(() => setStage('peeking'), 420);
    window.setTimeout(() => setStage('revealed'), 1700);
    window.setTimeout(() => setStage('leaving'), 2150);
    window.setTimeout(onOpenComplete, OPEN_SEQUENCE_MS);
  };

  return (
    <div className={`envelope-overlay stage-${stage}${isOpening ? ' is-opening' : ''}`}>
      <div className="envelope-scene">
        <div className="envelope-paper glass-card hero-card envelope-paper-card">
          <HeroInvitationCard className="envelope-paper-card" />
        </div>

        <div className="envelope-shell">
          <img
            className="envelope-image envelope-image-closed"
            src={envelopeClosedImage}
            alt=""
            draggable="false"
          />

          <img
            className="envelope-image envelope-image-open"
            src={envelopeOpenImage}
            alt=""
            draggable="false"
          />

          <button
            className="envelope-seal-button"
            type="button"
            aria-label="Zarfı aç"
            onClick={handleTriggerOpen}
            disabled={isOpening}
          />
        </div>
      </div>
    </div>
  );
}
