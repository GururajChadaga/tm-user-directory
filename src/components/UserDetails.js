import { useNavigate, useParams } from 'react-router-dom';
import styles from './UserDetails.module.css';
import ProfilePage from './ProfilePage';
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import CountryClock from './CountryClock';

const UserDetails = () => {
  const { usersWithPosts } = useContext(UserContext);
  const { userId } = useParams();
  const userData = usersWithPosts.find((user) => user.id === +userId);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <button className={styles.btn} onClick={handleBackClick}>
          Back
        </button>
        <CountryClock />
      </div>
      <ProfilePage userData={userData} />
    </div>
  );
};

export default UserDetails;
