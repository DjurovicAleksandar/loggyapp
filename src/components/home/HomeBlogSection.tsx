import header1 from "@/assets/images/home/header1.jpg";
import SectionLayout from "@/components/general/SectionLayout";
import HomeBlog from "./HomeBlog";

const latestBlogArticles = [
  {
    blogTitle: "Blog post 1",
    blogDescirption:
      "Engineered by industry-leading software developers, our offerings span comprehensive services including Product Roadmapping for strategic planning, Website Development.",
    imgSrc: header1,
    href: "#",
  },
  {
    blogTitle: "Blog post 2",
    blogDescirption:
      "Engineered by industry-leading software developers, our offerings span comprehensive services including Product Roadmapping for strategic planning, Website Development.",
    imgSrc: header1,
    href: "#",
  },
  {
    blogTitle: "Blog post 3",
    blogDescirption:
      "Engineered by industry-leading software developers, our offerings span comprehensive services including Product Roadmapping for strategic planning, Website Development.",
    imgSrc: header1,
    href: "#",
  },
];

const HomeBlogSection = () => {
  return (
    <SectionLayout>
      <h2 className="text-4xl lg:text-6xl text-center font-bold mb-10">
        Latest articles
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4">
        {latestBlogArticles.map(
          ({ blogTitle, blogDescirption, imgSrc, href }, i) => {
            return (
              <HomeBlog
                key={i}
                href={href}
                blogTitle={blogTitle}
                blogDescirption={blogDescirption}
                imgSrc={imgSrc}
                colWidth={i === 0}
              />
            );
          }
        )}
      </div>
    </SectionLayout>
  );
};

export default HomeBlogSection;
