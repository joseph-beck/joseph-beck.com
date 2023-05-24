import Image from 'next/image';

export const NodeJsLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/nodejs-logo.ico"
      alt="JavaScript logo"
      width={48}
      height={48}
    />
  );
}