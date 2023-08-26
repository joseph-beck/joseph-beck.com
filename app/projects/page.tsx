import { NavigationBar } from '@/components/navigation/bar'
import { Footer } from '@/components/navigation/footer'
import { ImageHero } from '@/components/output/hero';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main>
      <NavigationBar/>

      <div>
        <ImageHero
          img='/cordle-logo.png'
          alt='cordle-logo'
          title='cordle'
          body='originally started out as our hackaway v6 project has been rewritten in go. a discord bot for playing competitive wordle. the project is currently in its alpha stages.'
          icons={['fa-brands fa-golang text-2xl']}
          link_href='https://github.com/orgs/cordle-bot/repositories'
          link_text='view cordle on github'
        />

        <ImageHero
          img='/obb-logo.png'
          alt='obb-logo'
          title='open bot brain'
          icons={['fa-solid fa-c']}
          body='an open source and hackable project to control robots. using a custom made board and firmware written in c using freertos to manage tasks.'
          link_href='https://github.com/OpenBotBrain'
          link_text='view obb on github'
        />

        <ImageHero
          img='/hangman-robot.png'
          alt='lejos-ev3'
          title='hangman robot'
          body='group project using ev3 and lejos to create robots. our group created a robot you can play hangman against. this project used a client written in ruby and a server written in java.'
          icons={['fa-solid fa-robot text-xl']}
          link_href='https://github.com/joseph-beck/hangman-robot'
          link_text='view the hangman robot on github'
        />

        <ImageHero
          img='/rusted-attractors.png'
          alt='rusted-attractors'
          title='rusted attractors'
          body='exploring a variety of chaotic attractors in rust whilst using bevy to generate 3d shapes.'
          icons={['fa-brands fa-rust text-xl']}
          link_href='https://github.com/joseph-beck/rusted-attractors'
          link_text='view rusted attractors on github'
        />
      </div>

      <Footer/>
    </main>
  );
}
