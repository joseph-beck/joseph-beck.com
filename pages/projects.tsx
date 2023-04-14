import { Inter } from 'next/font/google'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className={styles.main}>

      <div className={``}>
        {RustedAttractor()}
      </div>

      <div className={`${styles.navBar}`}>
        <Link className={`${inter.className} ${styles.navText}`} href="#top">---</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#rusted-attractors">Rusted Attractors</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#busb-bot">BUSB Bot</Link>
      </div>
    </main>
  );
}

const RustedAttractor = () => {
  return (
    <div>
      <h2>Rusted Attractors</h2>
      <p>

      </p>
    </div>
  );
}