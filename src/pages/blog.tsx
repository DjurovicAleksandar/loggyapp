import { type FC } from "react";
import Link from "next/link";

import BlogCard from "./blog/BlogCard";
import { getLatestPosts } from "@/components/utils/PostFetchFunctions";
import Head from "next/head";

const blog: FC<{ latestPosts: { [key: string]: any[] } }> = ({
  latestPosts,
}) => {
  return (
    <>
      <Head>
        <title>Loggy - Blog</title>
        <meta
          name="description"
          content="Connect with Loggy, the creative web development agency, and explore our blog featuring insights, updates, and expertise in headless ecommerce solutions. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta
          name="keywords"
          content="loggy, blog, creative agency, web development, headless ecommerce, portfolio, product roadmapping, support and maintenance, UX design, UI design, online presence, innovation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Loggy - Blog" />
        <meta
          property="og:description"
          content="Connect with Loggy, the creative web development agency, and explore our blog featuring insights, updates, and expertise in headless ecommerce solutions. We provide strategic planning and guidance for the development and enhancement of digital products."
        />
        <meta property="og:image" content="/socialImg" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={`w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX `}>
        {Object.entries(latestPosts).map(([category, posts]) => (
          <div className="w-full mb-10" key={category}>
            <div className="lg:flex items-start justify-between w-full mb-10">
              <h2 className="text-4xl font-bold mb-4 lg:mb-10">{category}</h2>
              <Link
                href={`categories/${category.toLowerCase()}`}
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                View all from {category.toLowerCase()}
              </Link>
            </div>
            <div className="flex w-full lg:w-4/5 mx-auto gap-10 overflow-hidden overflow-x-auto xl:overflow-visible">
              {posts
                .sort((a, b) => a.blogFront.date - b.blogFront.date)
                .map(({ blogFront, slug }) => (
                  <BlogCard
                    key={slug}
                    title={blogFront.title}
                    date={blogFront.date}
                    shortDescription={blogFront.shortDescription}
                    slug={slug}
                    blogImage={blogFront.blogImage}
                  />
                ))}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const latestPosts = getLatestPosts();

  return {
    props: {
      latestPosts,
    },
  };
}

export default blog;
