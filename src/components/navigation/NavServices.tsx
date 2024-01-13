import { useEffect, useState } from "react";
import NavServicesList from "./NavServicesList";
import Link from "next/link";
import { Post } from "../utils/PostFetchFunctions";

const NavServices = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await fetch(`/api/latestPosts`);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className=" absolute w-[700px]  bg-white z-10  left-1/2  -translate-x-1/2 shadow-md rounded-xl">
      <NavServicesList />
      <div className="bg-gray-50 px-padXMobile py-padYMobile">
        <h2 className="mb-4 font-bold">Recent Posts</h2>
        <div className="flex flex-col gap-2">
          {posts.map(({ slug, blogFront }, i) => {
            const { title } = blogFront;
            return (
              <Link
                href={`/blog/${slug}`}
                key={i}
                className="text-md font-light hover:text-primary"
              >
                {title}
              </Link>
            );
          })}

          <Link href="/blog" className="mt-4">
            View all posts →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavServices;
