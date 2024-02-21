import SectionLayout from "@/components/general/SectionLayout";
import HomeBlog from "./HomeBlog";
import { type FC } from "react";
import BlogCard from "../navigation/BlogCard";

interface HomeBlogSectionProps {
  posts: {
    blogFront: {
      title: string;
      shortDescription: string;
      blogImage: string;
      date: string;
    };
    slug: string;
  }[];
}

const HomeBlogSection: FC<HomeBlogSectionProps> = ({ posts }) => {
  return (
    <SectionLayout>
      <h2 className="text-4xl lg:text-6xl text-left font-bold mb-20">
        Latest articles
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 justify-center">
        {posts.map(({ blogFront, slug }, i) => {
          const { title, shortDescription, blogImage, date } = blogFront;
          const slicedDescription: string =
            shortDescription.slice(0, 100) + "...";

          return (
            <BlogCard
              key={i}
              title={title}
              blogImage={blogImage}
              shortDescription={slicedDescription}
              slug={slug}
              date={date}
            />
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default HomeBlogSection;
