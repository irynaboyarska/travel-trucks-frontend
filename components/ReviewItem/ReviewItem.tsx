import { FaStar } from 'react-icons/fa';
import type { Review } from '@/types/review';

type ReviewItemProps = {
  review: Review;
};

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <div>
      <p>{review.reviewer_name}</p>
      <div>
        {[1, 2, 3, 4, 5].map(star => (
          <FaStar
            key={star}
            size={16}
            aria-hidden="true"
            style={{
              opacity: star <= review.reviewer_rating ? 1 : 0.3,
            }}
          />
        ))}
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
