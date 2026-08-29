import css from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className={css.hero}>
        <h1>Campers of your dreams</h1>
        <h2>You can find everything you want in our catalog</h2>
        <Link href="/catalog">View now</Link>
      </section>
    </main>
  );
}
