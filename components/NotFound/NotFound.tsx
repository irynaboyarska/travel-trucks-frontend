import Image from 'next/image';
import { IoIosClose } from 'react-icons/io';

type NotFoundProps = {
  onShowAll: () => void;
};

const NotFound = ({ onShowAll }: NotFoundProps) => {
  return (
    <div>
      <Image src="/images/not-found.png" alt="No campers found" width={488} height={463} />
      <h2>No campers found</h2>
      <p>
        We couldn`t find any campers that match your filters. Try adjusting your search or clearing
        some filters.
      </p>
      <button type="button" onClick={onShowAll}>
        <IoIosClose size={12} />
        Clear filters
      </button>
      <button type="button" onClick={onShowAll}>
        View all campers
      </button>
    </div>
  );
};

export default NotFound;
