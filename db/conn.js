import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }

    // const uri = process.env.MONGO_URI;
    // if (!uri) throw new Error('MONGO_URI not set in environment');

    // try {
    //     await mongoose.connect(uri);
    //     console.log('MongoDB connected');
    // } catch (err) {
    //     console.error('MongoDB connection error:', err);
    //     throw err;
    // }
};

export default connectDB;