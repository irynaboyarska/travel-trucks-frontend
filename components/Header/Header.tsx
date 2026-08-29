import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Link href="/" aria-label="Home">
        <Image src="/logo.svg" alt="TravelTrucks" width={136} height={16} loading="eager" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// додати класи для стилізації
