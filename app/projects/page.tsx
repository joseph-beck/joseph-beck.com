import { Divider } from '@/components/layout/divider';
import { NavigationBar } from '@/components/navigation/bar'
import { Footer } from '@/components/navigation/footer'
import { ImageHero } from '@/components/output/hero';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main>
      <NavigationBar />

      <div>
        <ImageHero
          img='/cordle-logo.png'
          alt='cordle-logo'
          title='cordle'
          body='originally started out as our hackaway v6 project has been rewritten in go. a discord bot for playing competitive wordle. the project is currently in its alpha stages.'
          icons={['fa-brands fa-golang text-2xl']}
          gh_href='https://github.com/j3-n/cordle-bot'
          gh_text='view cordle on github'
          web_href='https://github.com/orgs/j3-n/repositories'
          web_text='view more projects'
        />
        <Divider />

        <ImageHero
          img='/obb-logo.png'
          alt='obb-logo'
          title='open bot brain'
          icons={['fa-solid fa-c']}
          body='an open source and hackable project to control robots. using a custom made board and firmware written in c using freertos to manage tasks.'
          gh_href='https://github.com/OpenBotBrain'
          gh_text='view obb on github'
        />
        <Divider />

        <ImageHero
          img='/routey_logo.png'
          alt='routey-logo'
          title='routey'
          body='a simple http router with some basic html templating for basic web development written in golang.'
          icons={['fa-brands fa-golang text-2xl']}
          gh_href='https://github.com/joseph-beck/routey'
          gh_text='view routey on github'
        />
        <Divider />

        <ImageHero
          img='/tuner-logo.png'
          alt='tuner'
          title='tuner'
          body='our hack sussex project! a real-time quiz game using you and your friends favourite songs on spotify.'
          icons={['fa-brands fa-golang text-2xl', 'fa-brands fa-react text-xl']}
          gh_href='https://github.com/j3-n/tuner'
          gh_text='view the tuner on github'
          web_href='https://github.com/orgs/j3-n/repositories'
          web_text='view more projects'
        />

        <ImageHero
          img='/hackaway_logo.png'
          alt='hackaway-logo'
          title='royal hackaway website'
          body='working with other members of the committee to develop and deploy the royal hackaway v7 website.'
          icons={['fa-brands fa-react text-xl']}
          gh_href='https://github.com/rhul-compsoc/royal-hackaway-v7.com'
          gh_text='view the royal hackaway website on github'
          web_href='https://www.royalhackaway.com/'
          web_text='use the royal hackaway website here'
        />
        <Divider />

        <ImageHero
          img='/rusted-attractors.png'
          alt='rusted-attractors'
          title='rusted attractors'
          body='exploring a variety of chaotic attractors in rust whilst using bevy to generate 3d shapes.'
          icons={['fa-brands fa-rust text-xl']}
          gh_href='https://github.com/joseph-beck/rusted-attractors'
          gh_text='view rusted attractors on github'
        />
        <Divider />

        <ImageHero
          img='/spotify_logo.png'
          alt='spotify-logo'
          title='spotify wrapper'
          body='providing a variety of different spotify user statistics using the spotify api and svelte.'
          icons={['fa-brands fa-js text-xl']}
          gh_href='https://github.com/joseph-beck/spotify-wrapper'
          gh_text='view spotify wrapper on github'
          web_href='https://spotify-wrapper.vercel.app/'
          web_text='use spotify wrapper here'
        />
        <Divider />

        <ImageHero
          img='/hangman-robot.png'
          alt='lejos-ev3'
          title='hangman robot'
          body='group project using ev3 and lejos to create robots. our group created a robot you can play hangman against. this project used a client written in ruby and a server written in java.'
          icons={['fa-solid fa-robot text-xl']}
          gh_href='https://github.com/joseph-beck/hangman-robot'
          gh_text='view the hangman robot on github'
        />

        <Divider />
      </div>

      <Footer />
    </main>
  );
}
