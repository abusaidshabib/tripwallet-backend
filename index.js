const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { query } = require('express');
require('dotenv').config();
// const jwt = require('jsonwebtoken');c
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vofojnw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
  try {
    const tourCollection = client.db('tripwallet').collection('alltours');


    app.get('/tours', async (req, res) => {
      let query = {};
      const userData = await carsCollection.find(query).toArray();
      res.send(userData);
    })



  }
  finally {

  }
}
run().catch(console.log);



app.get('/', async (req, res) => {
  res.send('tripwallet server is running')
})

app.listen(port, () => console.log(`tripwallet running on ${port}`))
