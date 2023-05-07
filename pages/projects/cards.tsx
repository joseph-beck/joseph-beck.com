import styles from './projects.module.css'

import { RustLogo } from '@/components/icons/rust';
import { BevyLogo } from '@/components/icons/bevy';
import { GoLogo } from '@/components/icons/go';
import { FirebaseLogo } from '@/components/icons/firebase';
import { MySqlLogo } from '@/components/icons/mysql';
import { NodeJsLogo } from '@/components/icons/node';

import { inter } from './inter';

export const RustedAttractorsCard = () => {
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
  
export const BUSRBotCard = () => {
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
        <span className="flex items-center gap-4 my-1">
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
  
export const DordleBotCard = () => {
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
  
export const CordleBotCard = () => {
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
  
export const RestAPICard = () => {
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