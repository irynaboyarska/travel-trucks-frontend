import Link from 'next/link';
import Image from 'next/image';
import type { Camper } from '@/types/camper';
import css from './CamperItem.module.css';
import { FaStar, FaCar } from 'react-icons/fa';
import { FaGasPump } from 'react-icons/fa6';
import { TbManualGearbox } from 'react-icons/tb';
import { CiMap } from 'react-icons/ci';

type CamperItemProps = {
  camper: Camper;
};

const CamperItem = ({ camper }: CamperItemProps) => {
  return (
    <div className={css.item}>
      <Image
        className={css.image}
        src={camper.coverImage}
        alt={camper.name}
        width={219}
        height={240}
      />
      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.name}>{camper.name}</h2>
          <p className={css.price}>€{camper.price}</p>
        </div>
        <div className={css.rating}>
          <div className={css.review}>
            <FaStar />
            <span>
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
          </div>
          <p className={css.location}>
            <CiMap />
            {camper.location}
          </p>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.features}>
          <span>
            <FaGasPump />
            {camper.engine}
          </span>
          <span>
            <TbManualGearbox />
            {camper.transmission}
          </span>
          <span>
            <FaCar />
            {camper.form}
          </span>
        </div>
        <Link className={css.button} href={`/catalog/${camper.id}`} target="_blank">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperItem;
