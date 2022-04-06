const dbConect = require('./mongodb.js')
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data')

app.use(express.json());
app.get("/", async (req,res) => {
  let data = await dbConect()
    data = await data.find().toArray();
    res.send(data)
})

app.post("/", async (req, res) => {
  let data = await dbConect()
  data = await data.insertMany(req.body)
  if(data.acknowledged) {
    res.send('Data is Inserted')
  }
 
    
})

app.listen(port, () => {
  console.log(`server is running and Port is ${port}`);
});
