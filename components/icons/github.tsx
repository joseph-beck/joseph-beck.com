import Image from 'next/image';

export const GithubLogo = () => {
  return (
    <Image
      src="/github.png"
      alt="Github logo"
      width={32}
      height={32}
    />
  );
}