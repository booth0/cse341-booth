import express from 'express';
import homeRoutes from './routes/home.js';
 
const app = express();
<<<<<<< HEAD
=======
// const name = 'Scarlet Booth';
const name = process.env.NAME || 'Scarlet Booth';
 
app.get('/', (req, res) => {
    res.send(`${name}`);
});
 
>>>>>>> a3c4e35de0154e58c264c58da71393d1ba39dd28
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes)
 
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});