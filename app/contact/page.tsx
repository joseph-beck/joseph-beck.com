import { NavigationBar } from '@/components/navigation/bar'
import { Footer } from '@/components/navigation/footer'
import { LargeInputBox, SmallInputBox } from '@/components/input/input';

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <ContactForm />
      <Footer />
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
