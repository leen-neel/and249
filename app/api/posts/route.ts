import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/content");

function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const isDraft =
      data.isDraft === true || data.isDraft === "true";

    return {
      id,
      content,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      readTime: data.readTime,
      image: data.image,
      tags: data.tags ?? [],
      isDraft: !!isDraft,
    };
  });

  const sorted = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

  // In production, hide drafts; in dev, show all
  if (process.env.NODE_ENV === "production") {
    return sorted.filter((post) => !post.isDraft);
  }
  return sorted;
}

export async function GET() {
  try {
    const posts = getSortedPostsData();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
