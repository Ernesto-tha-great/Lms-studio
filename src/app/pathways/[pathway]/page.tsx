"use client";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import Footer from "@/components/Molecules/landingPage/Footer";
import NavBar from "@/components/Molecules/landingPage/NavBar";
import { pathways } from "../../../../constants";
import Img, { StaticImageData } from "next/image";
import { useRouter, useParams } from "next/navigation"; // Use next/router instead of next/navigation
import React, { useEffect, useState } from "react";
import LessonItem from "@/components/Organisms/pathways/LessonItem";
import { getAllData } from "@/utils/mdx";

interface Props {
  pathway: {
    key: string;
    name: string;
    url: string;
    image: StaticImageData;
    desc: string;
    tags: string[];
  };
  allLessons: {
    slug: string;
    title: string;
    lesson: string;
    readingTime: string;
    description: string;
    restriction: string;
    question: string;
    answer: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  }[];
}

const Page = ({ allLessons, pathway }: Props) => {
  const router = useRouter();
  const params = useParams();

  const slug = params.pathway as string;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        if (!slug) {
          router.push("/pathways");
          return;
        }

        // const lessons = await getAllPathways(slug);

        // // Sort the lessons by converting lesson to a number
        // lessons.sort((a, b) => Number(a.lesson) - Number(b.lesson));

        const item = pathways.find((data) => data.key === slug);

        if (item) {
          // Update state with the data
          setPathway(item);
        }
      } catch (err) {
        console.error(err);
        // Handle errors here
      } finally {
        setLoading(false);
      }
    };

    getData();
    // getAllData(slug, setAllLessons);
  }, [slug]);

  const [pathwayData, setPathway] = useState<Props["pathway"] | any>(null);
  const [allLessonsData, setAllLessons] = useState<Props["allLessons"] | any>(
    []
  );

  if (loading) {
    // You can add a loading spinner or message here
    return <div>Loading...</div>;
  }

  console.log(pathwayData);
  // console.log(allLessonsData);

  return (
    <div className="flex flex-col h-screen bg-white text-black">
      <NavBar />
      {pathwayData && (
        <>
          <section className="flex w-full items-center">
            <div className="flex items-center rounded-3xl gap-6 p-10 font-noto bg-gypsum flex-nowrap ">
              <div className="flex flex-col items-start gap-3 w-2/3 ">
                <h1 className="text-3xl font-bold">{pathwayData.name}</h1>
                <h4 className="text-base mt-2">{pathwayData.desc}</h4>

                <button
                  className="py-2 px-4 border-2 my-6 rounded-xl text-black"
                  onClick={() => {}}
                >
                  Start Pathway
                </button>
              </div>

              <div className="flex flex-col w-1/3">
                <Img
                  src={pathwayData.image}
                  className="rounded-2xl"
                  alt="Flutter Pathway - Celo Academy"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          <LessonItem />

          {allLessonsData.length > 0 && (
            <section>
              {/* {allLessonsData.map((lesson: any) => (
                <LessonItem />
              ))} */}
              <LessonItem />
            </section>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Page;

// export async function getAllPathways(pathwaySlug: string) {
//   const pathwayDir = path.join(process.cwd(), "src", "pathways", pathwaySlug);

//   try {
//     const lessons = fs.readdirSync(pathwayDir);

//     return lessons.reduce<any[]>((allLessons: string[], lessonSlug: string) => {
//       try {
//         // Get parsed data from MDX files in the pathway directory
//         const source = fs.readFileSync(
//           path.join(pathwayDir, lessonSlug),
//           "utf-8"
//         );
//         const { data } = matter(source);

//         const lessonData = {
//           ...data,
//           slug: lessonSlug.replace(".mdx", ""),
//           title: data.title,
//           lesson: data.lesson,
//           description: data.description,
//           restriction: data.restriction,
//           readingTime: readingTime(source).text,
//         };

//         return [...allLessons, lessonData];
//       } catch (err) {
//         console.error(`Error reading lesson ${lessonSlug}:`, err);
//         return allLessons; // Skip the lesson and continue with the rest
//       }
//     }, []);
//   } catch (err) {
//     console.error(`Error reading pathway directory ${pathwaySlug}:`, err);
//     return []; // Return an empty array in case of directory read error
//   }
// }
