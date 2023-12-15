import { useEffect, useState } from 'react';
import styles from './Clock.module.css';
import { getTimeFromTimestamp } from '../utils/helpers';

const Clock = ({ datetime, isClockPaused }) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeFromTimestamp(datetime));
  }, [datetime]);

  useEffect(() => {
    const updateClock = () => {
      if (!isClockPaused)
        setTime((prevTime) => {
          const totalSeconds =
            parseInt(prevTime?.hours ?? 0, 10) * 3600 +
            parseInt(prevTime?.minutes ?? 0, 10) * 60 +
            parseInt(prevTime?.seconds ?? 0, 10) +
            1;

          const newHours = Math.floor(totalSeconds / 3600) % 24;
          const newMinutes = Math.floor((totalSeconds % 3600) / 60);
          const newSeconds = totalSeconds % 60;

          return {
            hours: String(newHours).padStart(2, '0'),
            minutes: String(newMinutes).padStart(2, '0'),
            seconds: String(newSeconds).padStart(2, '0'),
          };
        });
    };

    if (time) updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, [isClockPaused]);

  return (
    <>
      {time && (
        <div className={styles.wrapper}>
          <span>{`${time.hours}:${time.minutes}:${time.seconds}`}</span>
        </div>
      )}
      {!time && (
        <div className={styles.clockLoader}>
          <span>00:00:00</span>
        </div>
      )}
    </>
  );
};

export default Clock;
