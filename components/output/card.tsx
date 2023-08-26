import Image from "next/image";
import React from "react";

interface Props {
  img?: string;
  alt?: string;
  title?: string;
  body?: string;
  icons?: string[];
};

export const BlankCard: React.FC<Props> = ({ title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export const ImageCard: React.FC<Props> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        {(img && alt) &&
        <Image
          src={img}
          alt={alt}
        />}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export const TopImageCard: React.FC<Props> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>{(img && alt) &&
        <Image
          src={img}
          alt={alt}
        />}
        </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export const BottomImageCard: React.FC<Props> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
      <figure>{(img && alt) &&
        <Image
          src={img}
          alt={alt}
        />}
      </figure>
    </div>
  );
};
