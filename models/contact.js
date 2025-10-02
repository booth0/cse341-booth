import mongoose from "mongoose";
const { Schema, model } = mongoose;

const contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName:  { type: String, required: true },
    email:     { type: String, required: true },
    favoriteColor: { type: String },
    birthday: { type: Date }
}, { timestamps: true });

export default model('Contact', contactSchema);