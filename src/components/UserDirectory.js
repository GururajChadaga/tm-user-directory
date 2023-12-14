import UserCard from './UserCard';
import styles from './UserDirectory.module.css';
import { URLS } from '../utils/constants';
import { getUsersWithPosts } from '../utils/helpers';
import { useFetch } from '../utils/hooks/useFetch';

const UserDirectory = () => {
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useFetch(URLS.USERS);

  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
  } = useFetch(URLS.POSTS);

  const hasError = usersError || postsError;
  const isLoading = usersLoading || postsLoading;
  const usersWithPosts = getUsersWithPosts(users, posts);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Directory</h1>
      {usersWithPosts.length > 0 &&
        usersWithPosts.map((user) => (
          <UserCard key={user?.id} userData={user} />
        ))}
      {isLoading && <span>Loading...</span>}
      {hasError && <span>Error!</span>}
    </div>
  );
};

export default UserDirectory;
