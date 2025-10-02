import express from "express";
import { getAllContacts, getContactById } from "../controllers/index.js";
import { get } from "mongoose";

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.id) return getContactById(req, res);
    return getAllContacts(req, res);
});

router.get('/:id', getContactById);

export default router;