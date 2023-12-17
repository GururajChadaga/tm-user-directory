import { getFormattedAddress } from '../utils/helpers';
import styles from './SummaryCard.module.css';

const SummaryCard = ({ userData }) => {
  const {
    name = '',
    username = '',
    email = '',
    phone = '',
    company = {},
    address = {},
  } = userData ?? {};

  return (
    <section className={styles.summaryContainer}>
      <section className={styles.summarySection}>
        <section className={styles.leftSubSection}>
          <p className={styles.summaryItem}>
            <b>{name}</b>
          </p>
        </section>
        <section className={styles.rightSubSection}>
          <p className={styles.summaryItem}>
            <i>{getFormattedAddress(address)}</i>
          </p>
        </section>
      </section>
      <section className={styles.summarySection}>
        <section className={styles.leftSubSection}>
          <p className={styles.summaryItem}>{username}</p>
          <p className={styles.summaryItem}>{company?.catchPhrase ?? ''}</p>
        </section>
        <section className={styles.rightSubSection}>
          <p className={styles.summaryItem}>{email}</p>
          <p className={styles.summaryItem}>{phone}</p>
        </section>
      </section>
    </section>
  );
};

export default SummaryCard;
