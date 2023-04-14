import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      {Title()}

      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {GithubLink()}

        {ProjectsLink()}

        {AboutLink()}

        {ContactLink()}
      </div>
    </main>
  )
}

const Title = () => {
  return (
    <div className={`${styles.group} ${styles.title}`}>
      <Head>
        <title>Joseph Beck</title>
      </Head>
      <p className={`${inter.className} ${styles.titleText}`}>
        Joseph Beck
      </p>
    </div>
  );
}

const GithubLink = () => {
  return (
    <a
      href="https://github.com/joseph-beck"
      className={`group ${styles.box}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        Github{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none -mb-2">
          {GithubLogo()}
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        Details about Github and something like that.
      </p>
    </a>
  );
}

const GithubLogo = () => {
  return (
    <Image
      src="/github.png"
      alt="Github logo"
      width={32}
      height={32}
    />
  );
}

const ProjectsLink = () => {
  return (
    <Link
      href="/projects"
      className={`group ${styles.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        Projects{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        Projects details.
      </p>
    </Link>
  );
}

const AboutLink = () => {
  return (
    <Link
      href="/about"
      className={`group ${styles.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        About{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        About me details
      </p>
    </Link>
  );
}

const ContactLink = () => {
  return (
    <Link
      href="/contact"
      className={`group ${styles.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        Contact{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        Contact me details.
      </p>
    </Link>
  );
}
