import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {Title()}

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-3">
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
    <div className="group rounded-lg border border-transparent px-5 py-4">
      <Head>
        <title>Joseph Beck</title>
      </Head>
      <p className={`${inter.className} text-4xl opacity-100 font-semibold`}>
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
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        Github{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none -mb-2">
          {GithubLogo()}
        </span>
      </h2>
      <p
        className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
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
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        Projects{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
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
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        About{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
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
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        Contact{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
      >
        Contact me details.
      </p>
    </Link>
  );
}
