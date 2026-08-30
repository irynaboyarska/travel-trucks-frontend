import { FaStar } from 'react-icons/fa';
import type { Review } from '@/types/review';
import css from './ReviewItem.module.css';

type ReviewItemProps = {
  review: Review;
};

const ReviewItem = ({ review }: ReviewItemProps) => {
  const avatarLetter = review.reviewer_name?.charAt(0).toUpperCase() || 'U';

  return (
    <div className={css.reviewCard}>
      <div className={css.header}>
        <div className={css.avatar}>{avatarLetter}</div>
        <div className={css.userInfo}>
          <p className={css.userName}>{review.reviewer_name}</p>
          <div className={css.starsList}>
            {[1, 2, 3, 4, 5].map(star => (
              <FaStar
                key={star}
                size={16}
                className={star <= review.reviewer_rating ? css.starActive : css.starInactive}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
