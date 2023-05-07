import styles from './projects.module.css'
import Link from 'next/link';
import Head from 'next/head';

import { RustedAttractorsCard, BUSRBotCard, DordleBotCard, CordleBotCard, RestAPICard } from './cards';
import { inter } from './inter';

const Title = () => {
  return (
    <Head>
      <title>Projects</title>
    </Head>
  );
}

export default function Projects() {
  return (
    <main className={styles.main}>
      {Title()}
      
      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {RustedAttractorsCard()}
        {BUSRBotCard()}
        {DordleBotCard()}
        {CordleBotCard()}
        {RestAPICard()}
      </div>

      <div className={`${styles.navBar}`}>
        <Link className={`${inter.className} ${styles.navText} font-semibold`} href="/">Home</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#rusted-attractors">Rusted Attractors</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#busb-bot">BUSB Bot</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#cordle-bot">Hackaway v6</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#dordle-bot">Dordle Bot</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#rest-api">Rest API</Link>
      </div>
    </main>
  );
}


