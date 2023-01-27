const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vbw8r.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const serviceCollection = client.db(geniusCar).collection('services');
    }
    finally{

    }
}
run().catch(err=> console.error(error))

app.get('/',(req,res)=>{
    res.send('genius car server is running');
})
app.listen(port,()=>{
    console.log(`Genius Car Server running on ${port}`);
})