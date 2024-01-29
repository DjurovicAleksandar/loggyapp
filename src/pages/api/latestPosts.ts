import { getFirstPostPerCategory } from "@/components/utils/PostFetchFunctions";
import { NextApiRequest, NextApiResponse } from "next";

const postsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = getFirstPostPerCategory();

  res.status(200).json(posts);
};

export default postsHandler;
