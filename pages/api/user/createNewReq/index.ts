import { axiosServer } from "@/axios/config";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req:NextApiRequest,res:NextApiResponse)=>{
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");


   if(req.method == 'POST'){
      const data = req.body
      const token =req.cookies.token
      const config = {
         headers: {
           Authorization: `Bearer ${token}` 
         }
       };
axiosServer.post('/api/RequestBL/Create',data,config)
.then(response=>{
   if(response.status == 200){
      return res.status(201).json({message:'request sent successfully'})
   }
})
.catch(err=>{
   return res.status(500).json({message:err.message})
})

}



}

export default handler