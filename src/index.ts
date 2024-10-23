import express from "express" 

import client from "prom-client"
import  {requestCount}  from "./monitoring/requestCount";

const app = express()


app.use(requestCount);

app.get("/user",async (req, res)=>{
    res.json({
        name : "Aman Gautam"
    })
})

app.post("/user", async(req, res)=>{
    res.json({
        name : " Aman Gautam Post"
    })
})

app.get("/metrics" , async (req, res)=>{
    const metrics  = await client.register.metrics();
    res.set('Content-Type' , client.register.contentType);
    res.end(metrics)
})

app.listen(3000, ()=>{
    console.log("Server is Live")
})