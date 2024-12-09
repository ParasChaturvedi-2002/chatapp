import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from "./config/connectDB.mjs"
import router from './routes/index.mjs'
import cookiesParser from 'cookie-parser'
import {app,server} from './socket/index.mjs'
dotenv.config()
// const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8080

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})

//api endpoints
app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("server running at " + PORT)
    })
})
