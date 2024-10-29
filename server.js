import 'dotenv/config'
import express, { request, response } from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'


//App config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//initialize middlewares
app.use(express.json())
app.use(cors())

//API route
app.get('/', (request,response)=>response.send("API working"))

app.listen(PORT, ()=>console.log("Server running on port" +PORT))