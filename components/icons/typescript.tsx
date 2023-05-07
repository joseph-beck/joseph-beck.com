import Image from 'next/image';

export const TypescriptLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/typescript-logo.ico"
      alt="Typescript logo"
      width={36}
      height={36}
    />
  );
}