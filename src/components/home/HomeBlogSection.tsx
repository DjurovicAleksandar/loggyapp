import header1 from "@/assets/images/home/header1.jpg";
import SectionLayout from "@/components/general/SectionLayout";
import HomeBlog from "./HomeBlog";
import { useEffect, useState } from "react";
import { Post, fetchLatestPosts } from "../utils/utilsFunctions";

const HomeBlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchLatestPosts(setPosts);
  }, []);

  return (
    <SectionLayout>
      <h2 className="text-4xl lg:text-6xl text-center font-bold mb-10">
        Latest articles
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4">
        {posts.map(({ title, shortDescription, blogImage, slug }, i) => {
          return (
            <HomeBlog
              key={i}
              href={slug}
              blogTitle={title}
              blogDescirption={shortDescription}
              imgSrc={blogImage}
              colWidth={i === 0}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default HomeBlogSection;
