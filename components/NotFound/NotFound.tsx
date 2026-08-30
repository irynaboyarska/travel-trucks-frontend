import Image from 'next/image';
import { IoIosClose } from 'react-icons/io';
import css from './NotFound.module.css';

type NotFoundProps = {
  onShowAll: () => void;
};

const NotFound = ({ onShowAll }: NotFoundProps) => {
  return (
    <div className={css.container}>
      <Image
        className={css.image}
        src="/images/not-found.png"
        alt="No campers found"
        width={488}
        height={463}
      />
      <h2 className={css.image}>No campers found</h2>
      <p className={css.description}>
        We couldn`t find any campers that match your filters. Try adjusting your search or clearing
        some filters.
      </p>
      <div className={css.actions}>
        <button className={css.clearButton} type="button" onClick={onShowAll}>
          <IoIosClose size={24} />
          Clear filters
        </button>
        <button className={css.viewAllButton} type="button" onClick={onShowAll}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default NotFound;
