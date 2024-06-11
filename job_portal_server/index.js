const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://krishnakarthikeyan:2005@cluster0.yqxwqji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Load MongoDB URI from environment variable

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;
let jobCollection;

const connectToMongoDB = async () => {
  try {
    await client.connect();
    db = client.db("MernJobPortal");
    jobCollection = db.collection("demomern");

    console.log("Connected to MongoDB!");

    // Routes are defined after successful MongoDB connection
    setupRoutes();
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    // Exit process if MongoDB connection fails
    process.exit(1);
  }
};

const setupRoutes = () => {
  app.use(express.json());

  // CORS setup
  const cors = require('cors');
  app.use(cors());

  app.post("/post-job", async (req, res) => {
    const body = req.body;
    body.createAt = new Date();
    try {
      const result = await jobCollection.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Cannot insert, try again!",
          status: false
        });
      }
    } catch (error) {
      console.error('Error inserting job:', error);
      return res.status(500).send({
        message: "Internal server error",
        status: false
      });
    }
  });

  app.get("/all-jobs", async (req, res) => {
    try {
      const jobs = await jobCollection.find({}).toArray();
      res.send(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).send({
        message: "Internal server error",
        status: false
      });
    }
  });

  app.get("/all-jobs/:id",async(req,res)=>{
    const id=req.params.id;
    const job=await jobCollection.findOne({
      _id:new ObjectId(id)
    })
    res.send(job)
  })
  app.get("/my-job/:email", async (req, res) => {
    try {
      const jobs = await jobCollection.find({ postedBy: req.params.email }).toArray();
      res.send(jobs);
    } catch (error) {
      console.error('Error fetching jobs for email:', error);
      res.status(500).send({
        message: "Internal server error",
        status: false
      });
    }
  });

  app.patch("/update-job/:id",async(req,res)=>{
    const id=req.params.id;
    const jobData=req.body;
    const filter={_id:new ObjectId(id)};
    const options={upsert:true};
    const updateDoc={ 
      $set:{
        ...jobData
      },
    };
    const result=await jobCollection.updateOne(filter,updateDoc,options);
    res.send(result)
  })
  app.delete("/job/:id",async(req,res)=>{
    const id=req.params.id;
    const filter={_id:new ObjectId(id)}
    const result=await jobCollection.deleteOne(filter);
    res.send(result)
  })

  app.get('/', (req, res) => {
    res.send('Hello Developer!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

connectToMongoDB();

// Ensure MongoDB client closes when Node.js process ends
process.on('SIGINT', async () => {
  await client.close();
  process.exit(0);
});
