import styles from './PostCard.module.css';

const PostCard = ({ title, body }) => {
  return (
    <div className={styles.postCard} tabIndex={0}>
      <section className={styles.postTitle}>{title}</section>
      <section className={styles.postBody}>{body}</section>
    </div>
  );
};

export default PostCard;
