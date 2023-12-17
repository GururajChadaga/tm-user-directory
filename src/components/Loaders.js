import styles from './Loaders.module.css';
import profilePageStyles from './ProfilePage.module.css';

export const UserCardLoader = () => (
  <>
    <div className={styles.userCardLoader} />
    <div className={styles.userCardLoader} />
    <div className={styles.userCardLoader} />
    <div className={styles.userCardLoader} />
    <div className={styles.userCardLoader} />
    <div className={styles.userCardLoader} />
    <div className={styles.userCardLoader} />
  </>
);

export const DropDownLoader = () => <div className={styles.dropdownLoader} />;

export const ClockLoader = () => (
  <div className={styles.clockLoader}>
    <span>00:00:00</span>
  </div>
);

const SummaryCardLoader = () => <div className={styles.summaryCardLoader} />;

const PostCardLoader = () => <div className={styles.postCardLoader} />;

export const ProfilePageLoader = () => (
  <section className={profilePageStyles.wrapper}>
    <h2>Profile Page</h2>
    <SummaryCardLoader />
    <section className={profilePageStyles.postsContainer}>
      <PostCardLoader />
      <PostCardLoader />
      <PostCardLoader />
      <PostCardLoader />
      <PostCardLoader />
      <PostCardLoader />
    </section>
  </section>
);
