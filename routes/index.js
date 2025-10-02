// routes/index.js
import express from 'express';
import homeRoutes from './home.js';
import contactsRoutes from './contacts.js';

const router = express.Router();

router.use('/', homeRoutes);
router.use('/contacts', contactsRoutes);

export default router;