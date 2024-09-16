import { NextApiRequest, NextApiResponse } from "next"
import cookie from "cookie";

const handler = (req:NextApiRequest,res:NextApiResponse)=>{
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "GET");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");


if(req.method == 'GET'){
   res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        expires: new Date(0), 
        path: "/", 
      })
    );


    return res.status(200).json({ message: "Logged out successfully" });
}

}

export default handler