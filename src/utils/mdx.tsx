import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const pathwaysPath = path.join(process.cwd(), "pathways");

export async function getSlug(pathwaySlug: string) {
  const paths = sync(`${pathwaysPath}/${pathwaySlug}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the pathway
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}
export async function getPathwayFromSlug(pathwaySlug: string, slug: string) {
  const pathwayDir = path.join(pathwaysPath, pathwaySlug, `${slug}.mdx`);
  const source = fs.readFileSync(pathwayDir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      title: data.title,
      lesson: data.lession,
      description: data.description,
      publishedAt: data.publishedAt,
      restriction: data.restriction,
      readingTime: readingTime(source.toString()).text,
      ...data,
    },
  };
}

export const components = {
  h2: (props: JSX.IntrinsicAttributes) => <h2 className="" {...props} />,
  pre: (props: JSX.IntrinsicAttributes) => <pre data-line {...props} />,
  code: (props: JSX.IntrinsicAttributes) => <code data-line {...props} />,
};
