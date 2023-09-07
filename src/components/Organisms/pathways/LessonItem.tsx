import React from "react";
import Link from "next/link";
import { getAllData } from "@/utils/mdx";

interface Props {
  lesson: {
    slug: string;
    title: string;
    lesson: string;
    readingTime: string;
    description: string;
  };
  lessonNumber: string;
  slug: string;
  lastCompletedLesson: string;
}

const LessonItem: React.FC<Props> = ({
  lesson,
  slug,
  lastCompletedLesson,
  lessonNumber,
}: Props) => {
  const data = getAllData("week-one");
  console.log(data);
  return (
    // <Link href={`/pathways/${slug}/${lesson.slug}`}>
    <div className="flex items-center p-6 transition hover:bg-gypsum hover:cursor-pointer rounded-xl delay-150 duration-300 gap-3">
      <div>
        <StartIcon />
      </div>

      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-medium font-noto">Lesson</h2>
        <p className="text-sm font-medium font-noto">
          vrfgrgrgrfgrgergrgrgerge
        </p>
      </div>
    </div>
    // </Link>
  );
};

function StartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="green"
      className="w-7 h-7 mr-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
      />
    </svg>
  );
}

export default LessonItem;
