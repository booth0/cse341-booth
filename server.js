import express from 'express';
import homeRoutes from './routes';
 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes)
 
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});