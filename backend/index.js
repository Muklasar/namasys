const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const authRoute = require('./routes/auth')
const dataRoute = require('./routes/data')
const formRoute = require('./routes/form')

dotenv.config();

const uri = process.env.DB_CONNECT
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection
connection.once('open', ()=>{
  console.log("MongoDB database establish")
})

app.use(express.json())

app.use(cors(corsOptions))
app.use('/api/user', authRoute)
app.use('/api/data', dataRoute)
app.use('/api/form', formRoute)

app.listen(5000, () => console.log('Server running'))