const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())

 app.use('/commentStore', require('./routes/commentStore.js'))


const url = 'mongodb://127.0.0.1:27017/comment'
mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true } )

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running ${port}`))