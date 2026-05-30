import { motion } from 'framer-motion';
import { Calendar, ChevronDown, MapPin } from 'lucide-react';
import { invitationData } from '../invitationData';

export default function HeroInvitationCard({ className = '', showScrollCue = true }) {
  return (
    <>
      <div className="gold-frame" />
      <div className="gold-frame-corner corner-tl" />
      <div className="gold-frame-corner corner-tr" />
      <div className="gold-frame-corner corner-bl" />
      <div className="gold-frame-corner corner-br" />

      <div className={`hero-initials ${className ? `${className}__initials` : ''}`}>
        {invitationData.brideInitials} & {invitationData.groomInitials}
      </div>

      <div className="hero-divider" />

      <h1 className="hero-names">
        {invitationData.bride} & {invitationData.groom}
      </h1>

      <h3 className="hero-tagline">Nişanımıza Davetlisiniz</h3>

      <p className="body-text hero-quote">
        "Bu özel günümüzde mutluluğumuza ortak olmanızdan onur duyarız."
      </p>

      <div className="hero-info-grid">
        <div className="info-item">
          <Calendar size={18} className="info-icon" />
          <span>{invitationData.eventDateText}</span>
        </div>
        <div className="info-item">
          <MapPin size={18} className="info-icon" />
          <span>{invitationData.location.address}</span>
        </div>
      </div>

      {showScrollCue && (
        <motion.div
          className="hero-scroll-cue"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      )}
    </>
  );
}
