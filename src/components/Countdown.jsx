import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!targetDate) return;

    const targetTime = new Date(targetDate).getTime();
    if (isNaN(targetTime) || targetTime <= Date.now()) return;

    const calculateTimeLeft = () => {
      const currentTime = Date.now();
      const difference = targetTime - currentTime;
      setNow(currentTime);
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    const firstTick = setTimeout(calculateTimeLeft, 0);
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearTimeout(firstTick);
      clearInterval(interval);
    };
  }, [targetDate]);

  const targetTime = targetDate ? new Date(targetDate).getTime() : NaN;
  const isActive = !isNaN(targetTime) && targetTime > now;

  if (!isActive || !timeLeft) {
    return (
      <div className="countdown-placeholder">
        Tarih & Saat Açıklandığında Sayaç Aktif Olacaktır
      </div>
    );
  }

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <div className="countdown-val">{formatNumber(timeLeft.days)}</div>
        <div className="countdown-label">Gün</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-val">{formatNumber(timeLeft.hours)}</div>
        <div className="countdown-label">Saat</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-val">{formatNumber(timeLeft.minutes)}</div>
        <div className="countdown-label">Dakika</div>
      </div>
      <div className="countdown-box">
        <div className="countdown-val">{formatNumber(timeLeft.seconds)}</div>
        <div className="countdown-label">Saniye</div>
      </div>
    </div>
  );
}
