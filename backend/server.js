const express = require('express')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const url ='mongodb+srv://oluwabukunmioluotanmi:KP4oT55YgsqfxaS7@cluster0.hnzsuk0.mongodb.net/?retryWrites=true&w=majority&appName=cluster0'

app.use(express.json())
app.use(cors())

 app.use('/commentStore', require('./routes/commentStore.js'));



mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true } )

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running ${port}`))