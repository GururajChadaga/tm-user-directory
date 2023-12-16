import { getFormattedAddress } from '../utils/helpers';
import PostCard from './PostCard';
import styles from './ProfilePage.module.css';

const ProfilePage = ({ userData }) => {
  const {
    name = '',
    username = '',
    email = '',
    phone = '',
    company = {},
    address = {},
    posts = [],
  } = userData ?? {};

  return (
    <section className={styles.wrapper}>
      <h2>Profile Page</h2>
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
            <p className={styles.summaryItem}>
              {company?.catchPhrase ?? 'Default'}
            </p>
          </section>
          <section className={styles.rightSubSection}>
            <p className={styles.summaryItem}>{email}</p>
            <p className={styles.summaryItem}>{phone}</p>
          </section>
        </section>
      </section>
      {posts.length > 0 && (
        <section className={styles.postsContainer}>
          {posts.map(({ id, title, body }) => (
            <PostCard key={id} title={title} body={body} />
          ))}
        </section>
      )}
    </section>
  );
};

export default ProfilePage;
