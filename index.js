import express from "express"
import nftRoute from './routes/nftRoute.js'

const app=express();

app.use(nftRoute)

app.listen(8000,()=>{console.log("the server is on")});