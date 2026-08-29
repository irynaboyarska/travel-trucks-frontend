'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link className={css.logo} href="/" aria-label="Home">
        <Image src="/logo.svg" alt="TravelTrucks" width={136} height={16} loading="eager" />
      </Link>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <Link className={`${css.link} ${pathname === '/' ? css.active : ''}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${css.link} ${pathname === '/catalog' ? css.active : ''}`}
              href="/catalog"
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
