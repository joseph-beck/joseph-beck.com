import { Inter } from 'next/font/google'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';
import Head from 'next/head';

import { RustLogo } from '@/components/icons/rust';
import { BevyLogo } from '@/components/icons/bevy';
import { GoLogo } from '@/components/icons/go';
import { FirebaseLogo } from '@/components/icons/firebase';
import { MySqlLogo } from '@/components/icons/mysql';
import { NodeJsLogo } from '@/components/icons/node';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <main className={styles.main}>
      {Title()}
      
      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {RustedAttractors()}
        {BUSRBot()}
        {DordleBot()}
        {CordleBot()}
        {RestAPI()}
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

const DordleBot = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/hackaway-v6"
      className={`group ${styles.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        Hackaway v6 Dordle Bot
        <span className="flex items-center gap-3 my-2">
          {NodeJsLogo()}
          {FirebaseLogo()}
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
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        Cordle Bot
        <span className="flex items-center gap-3 my-0">
          {GoLogo()}
          {MySqlLogo()}
        </span>
      </h2>

      <p 
        className={styles.boxText}>
        An improved version of our Hackaway v6 project.
      </p>
    </a>
  );
}

const RestAPI = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/go-rest"
      className={`group ${styles.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        Rest API
        <span className="flex items-center gap-3 my-0">
          {GoLogo()}
          {FirebaseLogo()}
        </span>
      </h2>

      <p 
        className={styles.boxText}>
        Rest API written using Gin.
      </p>
    </a>
  );
}
