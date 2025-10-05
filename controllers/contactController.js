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


// POST create new contact
export const createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;
        if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ message: 'All fields are required'});
        }

        const newContact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
        const savedContact = await newContact.save();

        res.status(201).json({ id: savedContact._id });
    } catch (err) {
        res.status(500).json({ message: 'Server error'});
    }
};

// PUT update contact
export const updateContact = async (req, res) => {
    try {
        const updated = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) return res.status(404).json({ message: 'Contact not found' });

        res.sendStatus(204);
    } catch (err) {
        res.status(400).json({message: 'Invalid request' });
    }
};

// DELETE contact
export const deleteContact = async (req, res) => {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Contact not found' });

        res.sendStatus(204);
    } catch (err) {
        res.status(400).json({ message: 'Invalid ID format' });
    }
};