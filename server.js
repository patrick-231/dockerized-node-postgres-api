import express from "express";
import pool from "./db.js";

const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;    

app.get("/", async (req, res) => {
    try {
     const data =   await pool.query ("SELECT * FROM schools");
            res.send(data.rows);
        
    } catch (err) {
        console.error(err.message);
    }
  
});

app.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        await pool.query ("INSERT INTO schools (name, email) VALUES ($1, $2)", [name, email]);
            res.send("Entry  added successfully")
        
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/create", async (req, res) =>{
try {
    await pool.query("CREATE TABLE schools (id SERIAL PRIMARY KEY, name VARCHAR(50), email VARCHAR(50))");
    res.status(201).send("Table created successfully");
    
} catch (error) {
    console.log(error.message);
}
})
app.delete("/:id", async (req, res) =>{
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM schools WHERE id = $1", [id]);
        res.send("Entry deleted successfully");
    } catch (error) {
        console.log(error.message);
    }
})

app.listen(port, () => {    
  console.log("Server is running on port 3000");
}); 