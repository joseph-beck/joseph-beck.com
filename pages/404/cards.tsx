import styles from './404.module.css'

import { inter  } from './inter';

const  Context = () => { }
export default Context

export const ErrorCard = () => {
  return (
    <a
      href='./'
      className={`group ${styles.box}`} 
      id="404"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${styles.boxTitleText}`}>
        Error 404
      </h2>

      <p 
        className={styles.boxText}>
        Page does not exist
      </p>
    </a>
  );
};