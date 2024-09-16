// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type DAta = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DAta>,
) {
  res.status(200).json({ name: "John Doe" });
}
