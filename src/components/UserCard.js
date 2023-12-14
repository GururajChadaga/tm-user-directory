import { Link } from 'react-router-dom';
import styles from './UserCard.module.css';

const UserCard = ({ userData }) => {
  const { id = '', name = '', posts = [] } = userData;
  return (
    <Link className={styles.link} to={`/users/${id}`}>
      <div className={styles.wrapper}>
        <span className={styles.text}>{`Name: ${name}`}</span>
        <span className={styles.text}>{`Posts: ${posts?.length ?? 0}`}</span>
      </div>
    </Link>
  );
};

export default UserCard;
