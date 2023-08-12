import { NavigationBar } from '@/components/navigationBar'
import { Footer } from '@/components/footer'
import { LargeInputBox, SmallInputBox } from '@/components/input';

export default function Home() {
  return (
    <main>
      <NavigationBar/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}

const ContactForm = (): JSX.Element => {
  return (
    <div>
      <SmallInputBox
        placeholder='email'
      />
      <LargeInputBox
        placeholder='query'
      />
    </div>
  );
};
