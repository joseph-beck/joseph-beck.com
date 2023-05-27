import Image from 'next/image';

export const NextLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/next.svg"
      alt="Next logo"
      width={128}
      height={128}
    />
  );
}