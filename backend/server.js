const express = require('express')
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors')
const url ='mongodb+srv://oluwabukunmioluotanmi:KP4oT55YgsqfxaS7@cluster0.hnzsuk0.mongodb.net/?retryWrites=true&w=majority&appName=cluster0'

app.use(express.json())
app.use(cors())

 app.use('/commentStore', require('./routes/commentStore.js'));

//  const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       // strict: true,
//       // deprecationErrors: true,
//       ssl: true,
//       sslVersion: 'TLSv1.2'
//     }
//   });

//   async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);


mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true } )

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running ${port}`))