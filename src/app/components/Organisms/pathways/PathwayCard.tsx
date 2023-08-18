import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
}

const PathwayCard: React.FC<Props> = ({ image, title, description }: Props) => {
  return (
    <div className="flex flex-col border-4 border-gray-600 max-w-md mx-4 gap-4 my-4 rounded-xl transition hover:border-red-700 hover:scale-105 hover:translate-x-4 delay-300">
      <div className="h-1/2 mb-8">
        <Image
          src={image}
          alt="pathway card"
          width={420}
          height={280}
          className="object-fill "
        />
      </div>

      <div className="flex flex-col items-start p-3 gap-4 h-1/2">
        <div className="text-[32px]">{title}</div>

        <div className="font-light break-normal ">{description}</div>

        <div className=" self-center  ">
          <button className="py-3 px-12 text-medium  bg-blue-400 rounded-lg hover:bg-red-500 hover:text-white transition hover:scale-110 ease-in-out duration-300">
            Start your lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default PathwayCard;
