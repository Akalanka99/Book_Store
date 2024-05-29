const express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('HELLO WORLD!')
})

//mongodp configeration

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:jJRpF4A1snnt0jkk@cluster0.kvpobt3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const bookcollection = client.db("bookInventory").collection("books");

    //insert a book to the db:post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookcollection.insertOne(data);
      res.send(result);
    });

    //get all book from the database
    app.get("/all-books", async (req, res) => {
      const books = bookcollection.find();
      const result = await books.toArray();
      res.send(result);
    });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})