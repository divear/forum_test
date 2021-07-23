const express = require("express");
const app = express()
const cors = require("cors")
const pool = require("./db")



//middleware
app.use(cors());
app.use(express.json())


//ROUTES//

//create

app.post("/posts", async(req, res)=>{
    try {
        const respo = req.body
        console.log(respo);
        const newposts = await pool.query("INSERT INTO posts (body, username) VALUES($1, $2) RETURNING *",
         [respo[0].body, respo[1].username]);
        console.log(newposts);
        res.json(newposts.rows[0])
    } catch (error) {
        console.log(error);
    }
})

//get all

app.get("/posts", async (req, res) => {
    try {
      const allposts = await pool.query("SELECT * FROM posts");
      res.json(allposts.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  

//get one

app.get("/posts/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const posts = await pool.query("SELECT * FROM posts WHERE post_id = $1", [id])
        
        res.json(posts.rows[0])
    } catch (error) {
        console.log(error);
    }
})

//update 

app.put("/posts/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const respo = req.body
        console.log(respo);

        const updateposts = await pool.query("UPDATE posts SET body = $1 WHERE post_id = $2", [respo.body, id]);

        res.json("posts was updated")
    } catch (error) {
        console.log(error);
    }
})

//delete

app.delete("/posts/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const deleteposts = await pool.query("DELETE FROM posts WHERE post_id = $1", [id]);
        res.json("posts was deleted!")
    } catch (error) {
        console.log(error);
    }
})

const port = process.env.port || 4001

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})