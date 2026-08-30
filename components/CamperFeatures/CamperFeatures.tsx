import type { Camper } from '@/types/camper';
import css from './CamperFeatures.module.css';

type CamperFeaturesProps = {
  camper: Camper;
};

const CamperFeatures = ({ camper }: CamperFeaturesProps) => {
  const features = [
    camper.transmission,
    ...camper.amenities.slice(0, 3),
    camper.engine,
    camper.form,
  ];

  return (
    <section className={css.section}>
      <h2 className={css.title}>Vehicle details</h2>
      <div className={css.badgesList}>
        {features.map(feature => (
          <span className={css.badge} key={feature}>
            {feature}
          </span>
        ))}
      </div>
      <div className={css.detailsList}>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Form</span>
          <span className={css.detailValue}>{camper.form}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Length</span>
          <span className={css.detailValue}>{camper.length}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Width</span>
          <span className={css.detailValue}>{camper.width}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Height</span>
          <span className={css.detailValue}>{camper.height}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Tank</span>
          <span className={css.detailValue}>{camper.tank}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Consumption</span>
          <span className={css.detailValue}>{camper.consumption}</span>
        </div>
      </div>
    </section>
  );
};

export default CamperFeatures;
