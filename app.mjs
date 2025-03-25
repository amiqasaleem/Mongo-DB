import express from "express";
const app = express();
const port = 3000;
import connectDB from './db.js'
import userRoutes from './routes/userRoutes.js'

//body parser
app.use(express.json());

//Connect to database
connectDB();

//loading the routes
app.use('/api', userRoutes)

app.get('/',(req, res)=>{
    res.send('First practice of MongoDB')
})
app.listen(3000, ()=>{
    console.log(`Amiqa listening on port ${port}`);
})

