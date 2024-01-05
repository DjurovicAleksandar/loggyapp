import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { type FC } from "react";
import { getLatestPosts, getPostsByCategory } from "../api/postFetch";
import BlogCard from "../blog/BlogCard";

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
    <main className="w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX">
      <h1 className="text-4xl lg:text-6xl mb-14 ">{category.toUpperCase()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(({ blogFront, slug }) => {
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
    </main>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const latestPosts = getLatestPosts();

//   const paths = Object.keys(latestPosts).map((category) => ({
//     params: { slug: category.toLowerCase() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug }: any | string = params ?? { slug: "" };

//   const posts = getPostsByCategory(slug);

//   return {
//     props: {
//       posts,
//       category: slug,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps<CategoriesProps> = async ({
  params,
}) => {
  const { slug } = params || { slug: "" }; // Ensure params exist before accessing

  const posts = getPostsByCategory(slug as string, 0, 6); // Ensure slug is treated as a string

  return {
    props: {
      posts,
      category: slug as string, // Ensure category is treated as a string
    },
  };
};

export default CategoriesPage;
