import express from 'express';
import contactsRoutes from './contacts.js';
import swaggerRoutes from './swagger.js';

const router = express.Router();

router.use('/', swaggerRoutes);
router.use('/contacts', contactsRoutes);

export default router;