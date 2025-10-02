import Contact from '../models/contact.js';
import mongoose from 'mongoose';

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().lean();
        res.status(200).json(contacts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getContactById = async (req, res) => {
    try {
        const id = req.query.id || req.params.id;
        if (!id) return res.status(400).json({ message: 'id query or path parameter required' });

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ message: 'Invalid id format' });
        }

        const contact = await Contact.findById(id).lean();
        if (!contact) return res.status(404).json({ message: 'Contact not found' });

        res.status(200).json(contact);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' })
    }
};