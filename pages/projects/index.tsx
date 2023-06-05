import common from '@/styles/common.module.css';
import styles from '@/styles/projects.module.css'
import Link from 'next/link';
import Head from 'next/head';

import { RustedAttractorsCard, BUSRBotCard, DordleBotCard, CordleBotCard, RestAPICard, RoboticsProjectCard, LorenzAttractorCard, RainCard, ThisWebsiteCard } from './cards';
import { inter } from './inter';

const Title = () => {
  return (
    <Head>
      <title>Projects</title>
    </Head>
  );
};

export default function Projects() {
  return (
    <main className={common.main}>
      {Title()}
      
      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {RustedAttractorsCard()}
        {BUSRBotCard()}
        {DordleBotCard()}
        {CordleBotCard()}
        {RestAPICard()}
        {RoboticsProjectCard()}
        {LorenzAttractorCard()}
        {ThisWebsiteCard()}
        {RainCard()}
      </div>

      {/* <div className={`${common.stars}`}></div>
      <div className={`${common.twinkling}`}></div>  */}
    </main>
  );
}
