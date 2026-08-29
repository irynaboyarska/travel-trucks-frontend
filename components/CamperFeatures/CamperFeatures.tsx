import type { Camper } from '@/types/camper';

type CamperFeaturesProps = {
  camper: Camper;
};

const CamperFeatures = ({ camper }: CamperFeaturesProps) => {
  const features = [camper.transmission, ...camper.amenities, camper.engine, camper.form];

  return (
    <section>
      <h2>Vehicle details</h2>
      <div>
        {features.map(feature => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
      <div>
        <div>
          <span>Form</span>
          <span>{camper.form}</span>
        </div>
        <div>
          <span>Length</span>
          <span>{camper.length}</span>
        </div>
        <div>
          <span>Width</span>
          <span>{camper.width}</span>
        </div>
        <div>
          <span>Height</span>
          <span>{camper.height}</span>
        </div>
        <div>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </div>
        <div>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </div>
      </div>
    </section>
  );
};

export default CamperFeatures;
