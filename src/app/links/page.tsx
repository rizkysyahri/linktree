import Image from "next/image";
import React from "react";
import data from "../../../data.json";

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-200 mb-3 max-w-3xl  "
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              src={image}
              alt={title}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex items-center justify-center font-semibold text-sm text-center w-full -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function page() {
  return (
    <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full "
        src="/assets/cfhProject.jpeg"
        alt={data.name}
        width={96}
        height={96}
      />
      <h1 className="font-bold text-xl mt-4 mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
