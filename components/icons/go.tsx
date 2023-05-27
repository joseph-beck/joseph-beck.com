import Image from 'next/image';

export const GoLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/go-logo.ico"
      alt="Go logo"
      width={64}
      height={64}
    />
  );
}