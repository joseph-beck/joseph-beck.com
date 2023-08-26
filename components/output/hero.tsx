import Image from "next/image";
import React from "react";

interface Props {
  img?: string;
  alt?: string;
  title?: string;
  body?: string;
  icons?: string[];
  link_href?: string;
  link_text?: string;
};

export const ImageHero: React.FC<Props> = ({ img, alt, title, body, icons, link_href, link_text }): JSX.Element => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-1/2">
        {(img && alt) &&
        <Image
          src={img}
          width={250}
          height={250}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={alt}
          style={{objectFit: "contain"}}
        />}
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
          {icons && icons.map((iconClass, index) => (
            <div key={index}>
             <i className={iconClass}></i>
              <p></p>
            </div>
          ))}
          {(link_href && link_text) &&
          <a
            href={link_href}
            target="_blank"
            className="link"
          >
            {link_text}
          </a>}
        </div>
      </div>
    </div>
  );
};

export const BlankHero: React.FC<Props> = ({ title, body }): JSX.Element => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-1/2">
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{body}</p>
        </div>
      </div>
    </div>
  );
};