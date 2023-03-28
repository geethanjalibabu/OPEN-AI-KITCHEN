import { NextApiRequest, NextApiResponse } from "next";
import process from "process";
type Data = {
    message:String,
    airesponse ?:any
}

export default async function handler(req:NextApiRequest,res:NextApiResponse<Data>) {
    if(req.method!="POST"){
        return res.status(405).send({message:"Only Post Request"})

    }
    const headers = {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${process.env.GET_API_KEY}`
    }
    const response= await fetch("https://api.openai.com/v1/completions",{
        method:"POST",
        headers,
        body:JSON.stringify({
            "model": "text-davinci-003",
            "prompt": `How to prepare ${req.body.dish}`,
            "max_tokens": 200,
            "temperature": 0.7
        })


        



    })
    const airesponse=await response.json()

    res.json({
        message:"Success",
        airesponse
    })
}