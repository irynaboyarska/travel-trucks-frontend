import { getCamperById, getCamperReviews } from '@/lib/api';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import ReviewItem from '@/components/ReviewItem/ReviewItem';
import BookingForm from '@/components/BookingForm/BookingForm';
import CamperFeatures from '@/components/CamperFeatures/CamperFeatures';
import { CiMap } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import css from './page.module.css';

type CamperDetailsPageProps = {
  params: Promise<{
    camperId: string;
  }>;
};

const CamperDetailsPage = async ({ params }: CamperDetailsPageProps) => {
  const { camperId } = await params;

  const camper = await getCamperById(camperId);
  const reviews = await getCamperReviews(camperId);

  return (
    <main className={css.main}>
      <div className={css.topSection}>
        <CamperGallery gallery={camper.gallery} />

        <section className={css.detailsSection}>
          <div className={css.infoBlock}>
            <h2 className={css.title}>{camper.name}</h2>
            <div className={css.metaGroup}>
              <p className={css.rating}>
                <FaStar className={css.ratingIcon} />
                {camper.rating} ({camper.totalReviews} Reviews)
              </p>
              <p className={css.location}>
                <CiMap size={16} />
                {camper.location}
              </p>
            </div>
            <p className={css.price}>€{camper.price}</p>
            <p className={css.description}>{camper.description}</p>
          </div>
          <CamperFeatures camper={camper} />
        </section>
      </div>

      <section className={css.reviewsAndBookingSection}>
        <div className={css.reviewsBlock}>
          <h2 className={css.reviewsTitle}>Reviews</h2>
          {reviews.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
        <BookingForm camperId={camperId} />
      </section>
    </main>
  );
};

export default CamperDetailsPage;
