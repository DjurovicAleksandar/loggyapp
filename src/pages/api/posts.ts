import { getPostsByCategory } from "@/components/utils/PostFetchFunctions";
import { NextApiRequest, NextApiResponse } from "next";

interface PostsQuery {
  start?: string;
  end?: string;
  category?: string;
}

const postsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  //gettin query parameter from url
  const { start, end, category }: PostsQuery = req.query;
  //queries from url are always a string, conversion is must
  const parsedStart = Number(start);
  const parsedEnd = Number(end);

  //checking if the object is received is a 100% number
  if (isNaN(parsedStart) || isNaN(parsedEnd)) {
    return res.status(400).json({ error: "Invalid start or end" });
  }

  const posts = getPostsByCategory(
    //checking if category exists
    category?.toLowerCase() || "",
    parsedStart,
    parsedEnd
  );

  res.status(200).json(posts);
};

export default postsHandler;
