import express from "express";

const app = express()
app.use(express.json())

app.get("/users")

app.listen(5001, () => console.log(
   "Server running on http://localhost:5001" 
));