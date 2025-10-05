import express from "express";
import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.id) return getContactById(req, res);
    return getAllContacts(req, res);
});

router.get('/:id', getContactById);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;