import styles from './PostCard.module.css';

const PostCard = ({ title, body }) => {
  return (
    <div className={styles.postCard} tabIndex={0}>
      <span>{title}</span>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
