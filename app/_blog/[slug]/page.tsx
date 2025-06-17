"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${params.slug}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [params.slug]);

  if (loading) {
    return (
      <main className="relative min-h-screen bg-black text-white">
        <div className="flex h-screen items-center justify-center">
          <div className="text-xl">Loading...</div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="relative min-h-screen bg-black text-white">
        <div className="flex h-screen items-center justify-center">
          <div className="text-xl">Post not found</div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="relative">
        <div className="absolute -top-40 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-[100px]" />
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-500/30 blur-[100px]" />
      </div>

      <article className="relative mx-auto max-w-4xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="mb-8 flex items-center gap-4 text-gray-400">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>

          {post.image && (
            <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </main>
  );
}
