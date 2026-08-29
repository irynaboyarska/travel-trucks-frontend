import { getCamperById, getCamperReviews } from '@/lib/api';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import ReviewItem from '@/components/ReviewItem/ReviewItem';
import BookingForm from '@/components/BookingForm/BookingForm';
import CamperFeatures from '@/components/CamperFeatures/CamperFeatures';

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
    <main>
      <CamperGallery gallery={camper.gallery} />
      <h2>{camper.name}</h2>
      <p>
        {camper.rating} ({camper.totalReviews} Reviews)
      </p>
      <p>{camper.location}</p>
      <p>€{camper.price}</p>
      <p>{camper.description}</p>
      <CamperFeatures camper={camper} />
      <section>
        <h2>Reviews</h2>
        {reviews.map(review => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </section>
      <BookingForm camperId={camperId} />
    </main>
  );
};

export default CamperDetailsPage;
