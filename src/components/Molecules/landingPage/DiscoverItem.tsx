import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const DiscoverItem: React.FC<Props> = ({ title, image }: Props) => {
  return (
    <div className="flex flex-col p-6 my-6 mr-6 items-start gap-2 transition ease-in-out delay-150 hover:border-b-2 hover:border-red-300 hover:-translate-y-1  hover:scale-110  duration-300">
      <div>
        <Image
          src={image}
          alt="exhibition image"
          width={350}
          height={200}
          color="none"
          className="rounded-2xl  object-fill max-w-md  h-56"
        />
      </div>

      <div className="text-lg font-sans font-semibold">{title}</div>
    </div>
  );
};

export default DiscoverItem;
