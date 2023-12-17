import PostCard from './PostCard';
import styles from './ProfilePage.module.css';
import SummaryCard from './SummaryCard';

const ProfilePage = ({ userData }) => {
  const { posts = [] } = userData ?? {};

  return (
    <section className={styles.wrapper}>
      <h2>Profile Page</h2>
      <SummaryCard userData={userData} />
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
