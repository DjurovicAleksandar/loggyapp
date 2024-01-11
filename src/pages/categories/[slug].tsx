import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useState, type FC } from "react";
import { getLatestPosts, getPostsByCategory } from "../api/postFetch";
import BlogCard from "../blog/BlogCard";
import Button from "@/components/general/Button";
import Link from "next/link";

interface CategoriesProps {
  posts: {
    slug: string;
    blogFront: {
      title: string;
      date: string;
      shortDescription: string;
      blogImage: string;
      category: string;
    };
  }[];
  category: string;
}

const CategoriesPage: FC<CategoriesProps> = ({ posts, category }) => {
  const [postArr, setPostArr] = useState(posts);
  const [loadedCount, setLoadedCount] = useState(3);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchCategory = postArr[0].blogFront.category;

  const loadMorePosts = async () => {
    const sliceStart = loadedCount;
    const sliceEnd = sliceStart + 6;
    //sending query paramters via api call
    const additionalPosts = await fetch(
      `/api/posts?end=${sliceEnd}&start=${sliceStart}&category=${fetchCategory}`
    );

    const newPosts = await additionalPosts.json();

    if (newPosts.length === 0) {
      setErrorMessage(
        "You have reached the end of available posts. Please check other categories"
      );
      return;
    }

    setPostArr((prevPosts) => [...prevPosts, ...newPosts]);
    setLoadedCount(sliceEnd);
  };

  return (
    <main className="w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX">
      <h1 className="text-4xl lg:text-6xl mb-14 ">{category.toUpperCase()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postArr.map(({ blogFront, slug }) => {
          const { title, date, shortDescription, blogImage } = blogFront;
          return (
            <BlogCard
              key={slug}
              title={title}
              date={date}
              shortDescription={shortDescription}
              slug={slug}
              blogImage={blogImage}
            />
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={loadMorePosts}
          className="hover:scale-110 active:scale-90 duration-300 ease-linearborder-[1px] border-primary rounded-xl bg-primary text-white  font-bold p-4 "
        >
          Load more
        </button>
      </div>
      <p className="text-center mt-10 font-thin">
        {errorMessage.split(".")[0] + "."}{" "}
        <Link href="/blog" className="underline font-light curosr-pointer">
          {errorMessage.split(".")[1]}
        </Link>
      </p>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const latestPosts = getLatestPosts();

  const paths = Object.keys(latestPosts).map((category) => ({
    params: { slug: category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug }: any | string = params ?? { slug: "" };

  const posts = getPostsByCategory(slug, 0, 3);

  return {
    props: {
      posts,
      category: slug,
    },
  };
};

export default CategoriesPage;
