import { Inter } from 'next/font/google'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className={styles.main}>
      {Title()}
      
      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {RustedAttractors()}
        {BUSRBot()}
        {CordleBot()}
      </div>

      <div className={`${styles.navBar}`}>
        <Link className={`${inter.className} ${styles.navText}`} href="#rusted-attractors">Rusted Attractors</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#busb-bot">BUSB Bot</Link>
        <Link className={`${inter.className} ${styles.navText}`} href="#cordle-bot">Hackaway v6</Link>
      </div>
    </main>
  );
}

const Title = () => {
  return (
    <Head>
      <title>Projects</title>
    </Head>
  );
}

const RustedAttractors = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/rusted-attractors"
      className={`group ${styles.box}`} 
      id="rusted-attractors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        Rusted Attractors
        <span className="flex items-center gap-5">
          {RustLogo()}
          {BevyLogo()}
        </span>
      </h2>

      <p 
        className={styles.boxText}>
        Words about this attractors stuff
      </p>
    </a>
  );
}

const BUSRBot = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/busr-bot"
      className={`group ${styles.box}`} 
      id="rusted-attractors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        BUSR Statistics Bot
        <span className="flex items-center gap-4 -my-3">
          {GoLogo()}
          {MySqlLogo()}
        </span>
      </h2>

      <p 
        className={styles.boxText}>
        Words about this bot stuff
      </p>
    </a>
  );
}

const CordleBot = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/hackaway-v6"
      className={`group ${styles.box}`} 
      id="cordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        Hackaway v6 Cordle Bot
        <span className="flex items-center gap-3 my-1">
          {FirebaseLogo()}
          {NodeJsLogo()}
        </span>
      </h2>

      <p 
        className={styles.boxText}>
        Words about this bot stuff
      </p>
    </a>
  );
}

const RustLogo = () => {
  return (
    <Image 
      className="relative bg-blend-hard-light top-1.5 mb-1"
      src="/rust-logo.ico"
      alt="Rust logo"
      width={32}
      height={32}
    />
  );
}

const BevyLogo = () => {
  return (
    <Image 
      className="relative bg-blend-hard-light top-1.5 mb-1"
      src="/bevy-logo.ico"
      alt="Bevy logo"
      width={96}
      height={96}
    />
  );
}

const GoLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/go-logo.ico"
      alt="Go logo"
      width={64}
      height={64}
    />
  );
}

const MySqlLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light"
      src="/mysql-logo.ico"
      alt="MySQL logo"
      width={64}
      height={64}
    />
  );
}

const NodeJsLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/nodejs-logo.ico"
      alt="JavaScript logo"
      width={48}
      height={48}
    />
  );
}

const FirebaseLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/firebase-logo.ico"
      alt="Firebase logo"
      width={104}
      height={104}
    />
  );
}
