"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface Props {
  desc: string;
  image: string;
  name: string;
  url: string;
  tags: string[];
}

const PathwayCard: React.FC<Props> = ({
  image,
  desc,
  name,
  url,
  tags,
}: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col border-2 border-gray-600 max-w-md mx-4 gap-4 my-4 rounded-xl transition hover:border-red-700  delay-300">
      <div className="h-1/2 mb-8">
        <Link href={url}>
          <Image
            src={image}
            alt="pathway card"
            width={420}
            height={280}
            className="object-fill "
          />
        </Link>
      </div>

      <div className="flex flex-col items-start p-3 gap-4 h-1/2">
        <div className="text-[32px]">{name}</div>

        <div className="font-light break-normal ">{desc}</div>

        <div className=" self-center  ">
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push(url);
            }}
            className="py-3 px-12 text-medium  bg-blue-400 rounded-lg hover:bg-red-500 hover:text-white transition hover:scale-110 ease-in-out duration-300"
          >
            Start your lesson
          </button>
        </div>
      </div>
    </div>
  );
};

export default PathwayCard;
