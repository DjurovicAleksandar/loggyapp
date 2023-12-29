import { StaticImageData } from "next/image";

export interface Post {
  slug: string;
  title: string;
  shortDescription: string;
  blogImage: StaticImageData;
}

export const fetchLatestPosts = async (setPosts: (posts: Post[]) => void) => {
  try {
    const response = await fetch("/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch latest posts");
    }
    const data: Post[] = await response.json();
    setPosts(data);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
  }
};
