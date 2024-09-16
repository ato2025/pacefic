import { axiosServer } from "@/axios/config";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method == "POST") {
    const data = req.body;
    const token = req.cookies.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };


    try {
      axiosServer
        .get(`/api/BLInfo/GetByBlNumber/${data.BlNumber}`)
        .then((response) => {
          if (response.status == 200) {
            return res.status(200).json(response.data);
          }
          if (response.status == 204) {
            return res.status(400).json(response.data);
          }
        });
    } catch (error:any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
};

export default handler;
