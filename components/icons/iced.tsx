import Image from 'next/image';

export const IcedLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/iced-logo.ico"
      alt="Iced logo"
      width={36}
      height={36}
    />
  );
}