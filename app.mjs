import express from "express";
const app = express();
const port = 3000;
import connectDB from './db.js'

//body parser
app.use(express.json());

//Connect to database

connectDB();


app.get('/',(req, res)=>{
    res.send('First practice of MongoDB')
})
app.listen(3000, ()=>{
    console.log(`Amiqa listening on port ${port}`);
})

