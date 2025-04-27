import express from 'express';
 
const app = express();
const name = process.env.NAME;
 
app.get('/', (req, res) => {
    res.send(`${name}`);
});
 
const PORT = 3000;
 
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});