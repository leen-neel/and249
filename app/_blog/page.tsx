"use client";

import { motion } from "framer-motion";
import PostCard from "../components/blog/PostCard";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <main className="relative min-h-screen bg-black text-white">
        <div className="flex h-screen items-center justify-center">
          <div className="text-xl">Loading...</div>
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

      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="text-lg text-gray-400">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PostCard post={post} />
              {post.id}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
