import Image from 'next/image';

export const MySqlLogo = () => {
  return (
    <Image
      className="relative bg-blend-hard-light"
      src="/mysql-logo.ico"
      alt="MySQL logo"
      width={64}
      height={64}
    />
  );
}