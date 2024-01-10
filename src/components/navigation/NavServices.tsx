import { useEffect, useState } from "react";
import NavServicesList from "./NavServicesList";
import Link from "next/link";
// import { Post, fetchLatestPosts } from "../utils/utilsFunctions";

const NavServices = () => {
  // const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   fetchLatestPosts(setPosts);
  // }, []);

  return (
    <div className=" absolute w-[700px]  bg-white z-10  left-1/2  -translate-x-1/2 shadow-md rounded-xl">
      <NavServicesList />
      <div className="bg-gray-50 px-padXMobile py-padYMobile">
        <h2 className="mb-4 font-bold">Recent Posts</h2>
        <div className="flex flex-col gap-2">
          {/* {posts.map(({ slug, title }, i) => {
            return (
              <a
                href={`/blog/${slug}`}
                key={i}
                className="text-md font-light hover:text-primary"
              >
                {title}
              </a>
            );
          })} */}

          <Link href="/blog" className="mt-4">
            View all posts →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavServices;
