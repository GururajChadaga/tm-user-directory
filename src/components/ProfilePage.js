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
    <div className={styles.wrapper}>
      <h2>Profile Page</h2>
      <div className={styles.summaryContainer}>
        <span>{name}</span>
        <p>{getFormattedAddress(address)}</p>
        <span>
          {username} | {company?.catchPhrase ?? 'Default'}
        </span>
        <span>
          {email} | {phone}
        </span>
      </div>
      {posts.length > 0 && (
        <div className={styles.postsContainer}>
          {posts.map(({ id, title, body }) => (
            <PostCard key={id} title={title} body={body} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
