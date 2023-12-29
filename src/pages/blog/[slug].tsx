import { GetStaticPaths, GetStaticProps } from "next";
import { type FC } from "react";
import Image from "next/image";
import { marked } from "marked";
import { getAllPosts } from "../api/postFetch";

interface PostPageProps {
  blogFront: {
    title: string;
    date: string;
    shortDescription: string;
    blogImage: string;
  };
  content: string;
  slug: string;
}

const PostPage: FC<PostPageProps> = ({ blogFront, content, slug }) => {
  const { title, date, shortDescription, blogImage } = blogFront;

  return (
    <div className="w-screen bg-gray-50 px-padXMobile lg:px-padX  py-padYMobile pt-40 lg:pt-60 flex flex-col items-center justify-center gap-40">
      {/* Post header */}
      <div className="w-full flex-col lg:flex-row flex justify-between items-center">
        {/* Text header */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-gray-400 my-5">{date}</h3>
          <h1 className="text-4xl lg:text-6xl font-semibold ">{title}</h1>
          <p className="mt-10 mb-10 lg:mb-0">{shortDescription}</p>
        </div>
        {/* Header image */}
        <div className="">
          <Image
            src={blogImage}
            alt={title}
            width={480}
            height={480}
            className="w-[30rem] h-[30rem] rounded-xl"
          />
        </div>
      </div>
      {/* Post body */}
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: marked(content) }}
          className="text-justify font-base "
        ></div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts();

  // Generate paths for all posts
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {};
  const allPosts = getAllPosts();

  // Find the post with the matching slug
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const { blogFront, content } = post;

  return {
    props: {
      slug,
      blogFront,
      content,
    },
  };
};
export default PostPage;
