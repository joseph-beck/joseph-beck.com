import styles from './404.module.css';
import Head from 'next/head';

import { ErrorCard } from './cards';

const Title = () => {
  return (
    <Head>
      <title>404</title>
    </Head>
  );
};

export default function e404() {
  return (
    <main className={`{styles.}`}>
      {Title()}

      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {ErrorCard()}
      </div>
    </main>
  );
}