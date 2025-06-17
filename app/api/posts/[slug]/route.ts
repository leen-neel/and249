import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const postsDirectory = path.join(process.cwd(), "app/content");
    const files = fs.readdirSync(postsDirectory);

    const post = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContents);
        const slug = file.replace(/\.md$/, "");

        return {
          slug,
          ...data,
          content,
        };
      })
      .find((post) => post.slug === params.slug);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
