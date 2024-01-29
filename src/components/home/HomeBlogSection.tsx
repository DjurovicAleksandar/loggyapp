import SectionLayout from "@/components/general/SectionLayout";
import HomeBlog from "./HomeBlog";
import { type FC } from "react";

interface HomeBlogSectionProps {
  posts: [];
}

const HomeBlogSection: FC<HomeBlogSectionProps> = ({ posts }) => {
  return (
    <SectionLayout className="mt-[10rem]">
      <h2 className="text-4xl lg:text-6xl text-left font-bold mb-20">
        Latest articles
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4">
        {posts.map(({ blogFront, slug }, i) => {
          const { title, shortDescription, blogImage } = blogFront;

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
