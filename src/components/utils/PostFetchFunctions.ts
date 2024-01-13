import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface BlogFront {
  title: string;
  date: string;
  shortDescription: string;
  blogImage: string;
  category: string;
  writter: string;
  writterDescription: string;
  writterImage: string;
}

export interface Post {
  slug: string;
  blogFront: BlogFront;
  content: string;
}

interface LatestPostsByCategory {
  [key: string]: Post[];
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
      writter: frontmatter.writter || "",
      writterDescription: frontmatter.writterDescription || "",
      writterImage: frontmatter.writterImage || "",
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

//fetch latest posts from each category
export function getFirstPostPerCategory() {
  const posts = getLatestPosts();
  const latestPosts: Post[] = [];

  Object.entries(posts).forEach(([_, post]) => {
    if (post.length <= 0) return;
    const firstPost = post[0];
    latestPosts.push(firstPost);
  });

  return latestPosts;
}
