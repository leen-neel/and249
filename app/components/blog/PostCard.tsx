"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/app/utils/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-gray-900/50 p-6 transition-all hover:bg-gray-900/80"
    >
      <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime} read</span>
      </div>
      <h2 className="mb-2 text-xl font-semibold text-white group-hover:text-teal-400">
        {post.title}
      </h2>
      <p className="mb-4 flex-grow text-gray-400">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
