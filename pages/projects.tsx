import styles from '@/styles/projects.module.css'
import Link from 'next/link';

export default function Projects() {
  return (
    <main className={styles.main}>

      <div className={``}>

      </div>

      <div className={`${styles.navBar}`}>
        <Link href="#busb-bot-section">BUSB Bot</Link>
        <Link href="#">...</Link>
      </div>
    </main>
  );
}