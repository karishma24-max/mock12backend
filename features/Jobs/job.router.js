const express=require("express")
const server = express();
const Jobs=require("./job.modal.js")

server.post("/postjob", async (req, res) => {
    let { name, position,location,contract} = req.body;
  
    try {
    
        let job = new Jobs({
          name:name,
         position:position,
         location:location,
         contract:contract
        });
  
        const created_jobs = await job.save();
        res.send({"message":"job Created succesfully"});
      }
     catch (e) {
      res.status(404).send(e.message);
    }
  });

  server.get("/getjob", async (req, res) => {
    try {
      let jobs = await Jobs.find();
      res.send(post);
    } catch (e) {
      res.status(404).send(e.message);
    }
  });
  module.exports = server;