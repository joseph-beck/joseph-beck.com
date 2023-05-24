import Image from 'next/image';

export const FirebaseLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light top-2 mb-2"
      src="/firebase-logo.ico"
      alt="Firebase logo"
      width={104}
      height={104}
    />
  );
}