import { useEffect, useState } from 'react';
import styles from './CountryClock.module.css';
import { useFetch } from '../utils/hooks/useFetch';
import { URLS } from '../utils/constants';
import Clock from './Clock';

const CountryClock = () => {
  const [selectedTimezone, setSelectedTimezone] = useState();
  const [isClockPaused, setIsClockPaused] = useState(false);

  const { data: timezones, loading: timezonesLoading } = useFetch(
    URLS.TIMEZONES
  );

  useEffect(() => {
    if (timezones && timezones.length > 0 && !selectedTimezone) {
      setSelectedTimezone(timezones[0]);
    }
  }, [timezones, selectedTimezone]);

  const { data: timezoneData } = useFetch(
    selectedTimezone ? `${URLS.TIMEZONES}/${selectedTimezone}` : ''
  );

  const handleSelect = (event) => {
    setSelectedTimezone(event.target.value);
  };

  const handleClick = () => {
    setIsClockPaused(!isClockPaused);
  };

  return (
    <div className={styles.wrapper}>
      {timezonesLoading || !timezones || timezones?.length === 0 ? (
        <div className={styles.dropdownLoader} />
      ) : (
        <div className={styles.customDropdown}>
          <select
            className={styles.select}
            value={selectedTimezone || ''}
            onChange={handleSelect}
          >
            {timezones.map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={styles.clockContainer}>
        <Clock
          datetime={timezoneData?.datetime ?? ''}
          isClockPaused={isClockPaused}
        />
        <button className={styles.btn} onClick={handleClick}>{`${
          isClockPaused ? 'Start' : 'Pause'
        }`}</button>
      </div>
    </div>
  );
};

export default CountryClock;
