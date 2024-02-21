import { GetStaticPaths, GetStaticProps } from "next";
import { type FC } from "react";
import Image from "next/image";
import { marked } from "marked";
import { getAllPosts } from "@/components/utils/PostFetchFunctions";

interface PostPageProps {
  blogFront: {
    title: string;
    date: string;
    shortDescription: string;
    blogImage: string;
    writter: string;
    writterDescription: string;
    writterImage: string;
  };
  content: string;
}

const PostPage: FC<PostPageProps> = ({ blogFront, content }) => {
  const {
    title,
    date,
    shortDescription,
    blogImage,
    writter,
    writterDescription,
    writterImage,
  } = blogFront;

  return (
    <div className=" bg-gray-50 px-padXMobile lg:px-padX  py-padYMobile pt-40 lg:pt-60 flex flex-col items-center justify-center gap-40 overflow-hidden">
      {/* Post header */}
      <div className="w-full flex-col lg:flex-row flex justify-between items-center gap-x-10">
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
      <div className="w-4/5 mx-auto">
        <div
          className="flex flex-col gap-5"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
        <div className="h-[1px] w-full bg-primary mt-10 mb-5"></div>
        <div className="mb-10">
          <p className="text-xl font-medium mb-5">Written by</p>
          <div className="flex items-start gap-5 ">
            <Image
              src={writterImage}
              alt={writter}
              width={100}
              height={100}
              className="w-[8rem] h-auto"
            />
            <div>
              <h2 className="font-medium">{writter}</h2>
              <p className="font-light w-4/5 text-lg">{writterDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

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

  const post = allPosts.find((post: any) => post.slug === slug);

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
