import UserCard from './UserCard';
import styles from './UserDirectory.module.css';
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';

const UserDirectory = () => {
  const { usersWithPosts, isLoading, hasError } = useContext(UserContext);

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
