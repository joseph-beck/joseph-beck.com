import React from "react";

interface CardProps {
  img?: string;
  alt?: string;
  title?: string;
  body?: string;
};

export const ImageHero: React.FC<CardProps> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt={alt} />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
        </div>
      </div>
    </div>
  );
};

export const BlankHero: React.FC<CardProps> = ({ title, body }): JSX.Element => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
        </div>
      </div>
    </div>
  );
};

export const BlankCard: React.FC<CardProps> = ({ title, body }): JSX.Element => {
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

export const ImageCard: React.FC<CardProps> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={img} alt={alt} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export const TopImageCard: React.FC<CardProps> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt={alt} /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export const BottomImageCard: React.FC<CardProps> = ({ img, alt, title, body }): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
      </div>
      <figure><img src={img} alt={alt} /></figure>
    </div>
  );
};
