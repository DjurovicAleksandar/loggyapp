import { Inter } from "next/font/google";
import Image from "next/image";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { type FC } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface BlogProps {
  posts: [];
}

const blog: FC<BlogProps> = ({ posts }) => {
  return (
    <main
      className={`${inter.className} w-full py-[40%] md:py-[15%] px-padXMobile md:px-padX flex flex-wrap items-center justify-center gap-10`}
    >
      {posts.map(({ blogFront, slug }, i) => {
        const { title, date, shortDescription, blogImage } = blogFront;
        return (
          <div key={i}>
            <Image
              alt={title}
              src={blogImage}
              width={320}
              height={320}
              className="rounded-xl w-[20rem] h-[20rem]"
            />
            <div>
              <p className="my-2 text-gray-500 font-thin">Posted on {date}</p>
              <h2 className="text-2xl font-semibold my-5 max-w-[20rem]">
                {title}
              </h2>
              <p className="font-light mb-5 max-w-[20rem]">
                {shortDescription}
              </p>
              <Link
                style={{
                  background: "#ea7210",
                  padding: "10px",
                  borderRadius: "12px",
                  color: "white",
                }}
                href={`blog/${slug}`}
              >
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: blogFront } = matter(markdownWithMeta);

    return {
      slug,
      blogFront,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default blog;
