import Image from 'next/image';

export const RustLogo = () => {
  return (
    <Image 
      className="relative bg-blend-hard-light top-1.5 mb-1"
      src="/rust-logo.ico"
      alt="Rust logo"
      width={32}
      height={32}
    />
  );
}