import Image from 'next/image';

export const BevyLogo = () => {
  return (
    <Image 
      className="relative bg-blend-hard-light top-1.5 mb-1"
      src="/bevy-logo.ico"
      alt="Bevy logo"
      width={96}
      height={96}
    />
  );
}