import { useEffect, useState } from "react";
import NavServicesList from "./NavServicesList";

const NavServices = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch latest posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className=" absolute w-[700px]  bg-white z-10 -bottom-[680px] left-1/2  -translate-x-1/2 shadow-md rounded-xl">
      <NavServicesList />
      <div className="bg-gray-50 px-padXMobile py-padYMobile">
        <h2 className="mb-4 font-bold">Recent Posts</h2>
        <div className="flex flex-col gap-2">
          {posts.map(({ slug, title }, i) => {
            return (
              <a
                href={`/blog/${slug}`}
                key={i}
                className="text-md font-light hover:text-primary"
              >
                {title}
              </a>
            );
          })}

          <a href="#" className="mt-4">
            {" "}
            View all posts →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavServices;
