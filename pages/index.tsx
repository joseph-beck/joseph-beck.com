import Link from 'next/link';
import Head from 'next/head';

import common from '@/styles/common.module.css';

import { GithubLogo } from '@/components/icons/github';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={common.main}>
      {Title()}
      
      <div className={`${common.group} ${common.lowerGroup}`}>
        {GithubLink()}
        {ProjectsLink()}
        {AboutLink()}
        {ContactLink()}
      </div>

      <div className={`${common.stars}`}></div>
      <div className={`${common.twinkling}`}></div> 
    </main>
  )
}

const Title = () => {
  return (
    <div className={`${common.group} ${common.title}`}>
      <Head>
        <title>Joseph Beck</title>
      </Head>
      <p className={`${inter.className} ${common.titleText}`}>
        Joseph Beck
      </p>
    </div>
  );
}

const GithubLink = () => {
  return (
    <a
      href="https://github.com/joseph-beck"
      className={`group ${common.box}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${common.boxTitleText}`}>
        Github{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none -mb-2">
          {GithubLogo()}
        </span>
      </h2>
      <p
        className={`${inter.className} ${common.boxText}`}
      >
        Link to my Github.
      </p>
    </a>
  );
}

const ProjectsLink = () => {
  return (
    <Link
      href="/projects"
      className={`group ${common.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${common.boxTitleText}`}>
        Projects{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${common.boxText}`}
      >
        Projects I have worked on.
      </p>
    </Link>
  );
}

const AboutLink = () => {
  return (
    <Link
      href="/about"
      className={`group ${common.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${common.boxTitleText}`}>
        About{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${common.boxText}`}
      >
        About me.
      </p>
    </Link>
  );
}

const ContactLink = () => {
  return (
    <Link
      href="/contact"
      className={`group ${common.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${common.boxTitleText}`}>
        Contact{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${common.boxText}`}
      >
        Ways to contact me.
      </p>
    </Link>
  );
}
