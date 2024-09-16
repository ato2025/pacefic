import {  axiosServer } from "@/axios/config";
import { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method == "POST") {
    try {
      const { email, password } = req.body;

      axiosServer
        .post("/Account/Authenticate", { email, password })
        .then((response) => {
          if (response.status == 200) {
            const token = response.data.Token;
            
            return res
            .setHeader(
              "Set-Cookie",
              cookie.serialize("token", token, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                path: "/",
              })
            )
              .status(200)
              .json(response.data);
          }
        })
        .catch(err=>{
          return res.status(220).json({ message: err.data });
        })
    } catch (error) {
      // return res.status(220).json({ message: "error" });
    }
  }


};
export default handler;
