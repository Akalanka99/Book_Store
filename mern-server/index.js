const express = require('express')
const app = express()
const port = process.env.port || 5000;
const cors = require('cors')
const { ObjectId } = require('mongodb');

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

    //update a book data : patch or update method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData
        }
      }
      //update
      const result = await bookcollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete a book from the database
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id:new ObjectId(id) };
      const result = await bookcollection.deleteOne(filter);
      res.send(result);
    });

    //find by category
    app.get("/all-book", async (req, res) => {
     let query = {};
     if(req.query?.category){
       query = {category:req.query.category}
     }
      const result = await bookcollection.find(query).toArray();
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