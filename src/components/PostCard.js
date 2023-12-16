import { useState } from 'react';
import Modal from './Modal';
import styles from './PostCard.module.css';

const PostCardContent = ({ title, body }) => (
  <>
    <section className={styles.postTitle}>{title}</section>
    <section className={styles.postBody}>{body}</section>
  </>
);

const PostCard = ({ title, body }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePostKeyUp = (event) => {
    if (event.key === 'Enter') setIsModalOpen(true);
  };

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={styles.postCard}
        tabIndex={0}
        onClick={handlePostClick}
        onKeyUp={handlePostKeyUp}
      >
        <PostCardContent title={title} body={body} />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className={styles.postModal} tabIndex={0}>
          <PostCardContent title={title} body={body} />
        </div>
      </Modal>
    </>
  );
};

export default PostCard;
