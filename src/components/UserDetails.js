import { useNavigate, useParams } from 'react-router-dom';
import styles from './UserDetails.module.css';
import ProfilePage from './ProfilePage';
import { useContext } from 'react';
import { UserContext } from '../store/UserContext';
import CountryClock from './CountryClock';
import { ProfilePageLoader } from './Loaders';
import Error from './Error';

const UserDetails = () => {
  const { usersWithPosts, isLoading, hasError } = useContext(UserContext);
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
      {!isLoading && <ProfilePage userData={userData} />}
      {isLoading && <ProfilePageLoader />}
      {hasError && <Error />}
    </div>
  );
};

export default UserDetails;
