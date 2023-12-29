// pages/api/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const postsData = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""),
      title: data.title, // Assuming 'title' is in your Markdown front matter
      shortDescription: data.shortDescription,
      blogImage: data.blogImage,
    };
  });

  // Sorting postsData by some criteria (e.g., date) if needed
  // postsData.sort((a, b) => compareFunction(a, b));

  const latestPosts = postsData.slice(0, 3); // Get the latest 5 posts (or adjust as needed)

  res.status(200).json(latestPosts);
}
