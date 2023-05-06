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