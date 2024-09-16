import { axiosServer } from "@/axios/config";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method == "GET") {
    const token = req.cookies.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axiosServer
      .get("/api/RequestBL/GetAllPendingAndProgress", config)
      .then((response) => {
        if (response.status == 200) {
          return res.status(200).json(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ message: err.message });
      });
  }
};

export default handler;
