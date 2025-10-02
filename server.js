import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // fail fast if cannot connect
    });
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running at http://127.0.0.1:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to MongoDB', err.message);
    process.exit(1); // stop app if DB connection fails
  }
};

startServer();
