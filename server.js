import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/index.js';
// import swaggerUi from 'swagger-ui-express';
// import { readFileSync } from 'fs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// const swaggerDocument = JSON.parse(readFileSync('./swagger.json', 'utf8'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
// app.use('/api-docs', routes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // fail fast if cannot connect
    });
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running at http://127.0.0.1:${PORT}`);
      console.log(`Swagger docs available at http://127.0.0.1:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB', err.message);
    process.exit(1); // stop app if DB connection fails
  }
};

startServer();
