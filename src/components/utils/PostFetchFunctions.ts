import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface BlogFront {
  title: string;
  date: string;
  shortDescription: string;
  blogImage: string;
  category: string;
}

interface Post {
  slug: string;
  blogFront: BlogFront;
  content: string;
}

interface LatestPostsByCategory {
  [key: string]: Post[];
}

//

interface LoadMorePostsProps {
  loadedCount: number;
  fetchCategory: string;
  setErrorMessage: (errorMessage: string) => void;
  setPostArr: React.Dispatch<React.SetStateAction<any[]>>;
  setLoadedCount: React.Dispatch<React.SetStateAction<number>>;
}

//fetch all posts
export function getAllPosts(): Post[] {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const blogFront: BlogFront = {
      title: frontmatter.title || "",
      date: frontmatter.date || "",
      shortDescription: frontmatter.shortDescription || "",
      blogImage: frontmatter.blogImage || "",
      category: frontmatter.category || "",
    };

    return {
      slug,
      blogFront,
      content,
    };
  });

  return posts;
}

//fetch posts based on category slug
export function getPostsByCategory(
  category: string,
  sliceStart = 0,
  sliceEnd = 3
) {
  const allPosts = getAllPosts();

  return allPosts
    .filter((post) => post.blogFront.category.toLowerCase() === category)
    .slice(sliceStart, sliceEnd);
}

//fetch latest 3 posts by category
export function getLatestPosts() {
  const posts: Post[] = getAllPosts();
  const categories = ["Highlight", "Development", "UXUI"];
  const latestPostsByCategory: LatestPostsByCategory = {};

  categories.forEach((category) => {
    const postsInCategory = posts.filter(
      (post) => post.blogFront.category.toLowerCase() === category.toLowerCase()
    );
    const latestPosts = postsInCategory.slice(0, 3);
    latestPostsByCategory[category] = latestPosts;
  });

  return latestPostsByCategory;
}

export const loadMorePosts = async ({
  loadedCount,
  fetchCategory,
  setErrorMessage,
  setPostArr,
  setLoadedCount,
}: LoadMorePostsProps) => {
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
