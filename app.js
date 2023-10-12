const express = require('express')
const cors = require('cors')
const { db } = require('./db/Db')
const {readdirSync}= require('fs')
require ('dotenv').config()


//middelwares
const app =express()
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+ route)))


const PORT = process.env.PORT
const server =()=>{
    db()
app.listen(PORT, ()=>{
    console.log('listening to port', PORT)
})
}
server()