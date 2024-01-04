import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getAllPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: blogFront, content } = matter(markdownWithMeta);

    return {
      slug,
      blogFront,
      content,
    };
  });

  return posts;
}

export function getPostsByCategory(category: string) {
  const allPosts = getAllPosts();

  return allPosts.filter(
    (post) => post.blogFront.category.toLowerCase() === category
  );
}

export function getLatestPosts() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return latestPosts;
}

export function getFilteredPosts() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: blogFront, content } = matter(markdownWithMeta);

    return {
      slug,
      blogFront,
      content,
    };
  });

  const categoriesToShow = ["Highlight", "Development", "UXUI"];
  const filteredPosts: { [key: string]: any[] } = {
    Highlight: [],
    Development: [],
    UXUI: [],
  };

  // Categorize posts
  posts.forEach((post) => {
    const { category } = post.blogFront;

    if (categoriesToShow.includes(category)) {
      filteredPosts[category].push(post);
    }
  });

  // Limit each category to three posts
  const limitedPosts: { [key: string]: any[] } = {};
  categoriesToShow.forEach((category) => {
    limitedPosts[category] = filteredPosts[category].slice(0, 3);
  });

  return limitedPosts;
}
