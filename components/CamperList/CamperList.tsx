import type { Camper } from '@/types/camper';
import CamperItem from '../CamperItem/CamperItem';
import css from './CamperList.module.css';

type CamperListProps = {
  campers: Camper[];
};

const CamperList = ({ campers }: CamperListProps) => {
  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperItem camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
