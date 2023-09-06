import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}

const ExhibitionCard: React.FC<Props> = ({
  title,
  description,
  image,
}: Props) => {
  return (
    <div className="flex flex-col border-2  rounded-xl mt-12 max-w-xl gap-20 ">
      <div className="flex flex-col items-start p-3 gap-6">
        <div className="text-[28px] font-bold">{title}</div>

        <div className="text-lg font-light text-gray-500">{description}</div>
      </div>

      <div>
        <Image
          src={image}
          alt="exhibition image"
          width={1200}
          height={40}
          color="none"
          className="rounded-b-xl object-fill"
        />
      </div>
    </div>
  );
};

export default ExhibitionCard;
