import Image from "next/image";

import { type FC } from "react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  shortDescription: string;
  blogImage: string;
  slug: string;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  blogImage,
  date,
  shortDescription,
  slug,
}) => {
  return (
    <div className="group hover:scale-105 duration-300 ease-in-out relative rounded-xl p-4">
      <Link className="rounded-xl" href={`/blog/${slug}`}>
        <p className="text-primary z-10 absolute duration-300 ease-linear -top-8 opacity-0 left-5 group-hover:top-8 group-hover:opacity-100">
          Read more
        </p>
        <div className="rounded-xl w-[18rem] h-[18rem] overflow-hidden">
          <Image
            alt={title}
            src={blogImage}
            width={320}
            height={320}
            className="w-full h-full rounded-xl duration-300 ease-in group-hover:scale-150"
          />
        </div>
        <div>
          <p className="my-2 text-gray-500 font-thin group-hover:text-primary duration-500 ease-linear">
            Posted on {date}
          </p>
          <h2 className="text-2xl font-semibold my-5 max-w-[18rem]">{title}</h2>
          <p className="font-light mb-5 max-w-[18rem]">{shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
