import { GetStaticProps, GetStaticPaths } from "next";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPostsByCategory } from "../api/postFetch";

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
  return (
    <main className="w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX flex flex-wrap items-center justify-center gap-10">
      <h1 className="text-4xl font-bold">{category.toUpperCase()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({ blogFront, slug }) => (
          <div key={slug} className="p-4 border rounded-md">
            <Image
              src={blogFront.blogImage}
              alt={blogFront.title}
              width={320}
              height={320}
              className="rounded-xl w-[20rem] h-[20rem] mb-2"
            />
            <p className="text-gray-500 mb-4">{blogFront.date}</p>
            <h2 className="text-xl font-bold mb-2">{blogFront.title}</h2>
            <p className="mb-10 text-gray-500">{blogFront.shortDescription}</p>
            <Link
              style={{
                background: "#ea7210",
                padding: "10px",
                borderRadius: "12px",
                color: "white",
              }}
              href={`/blog/${slug}`}
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts();

  // Extract categories from all posts
  const categories = allPosts.map((post) =>
    post.blogFront.category.toLowerCase()
  );

  // Deduplicate and create paths for each category
  const uniqueCategories = Array.from(new Set<string>(categories));

  const paths = uniqueCategories.map((category) => ({
    params: { slug: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params ?? { slug: "" };

  const categorySlug = Array.isArray(slug) ? slug[0] : slug || "";

  const posts = getPostsByCategory(categorySlug);

  return {
    props: {
      posts,
      category: slug,
    },
  };
};

export default CategoriesPage;
