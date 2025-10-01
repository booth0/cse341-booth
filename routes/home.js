import express from 'express';
import { getName } from '../controllers/index.js';

const router = express.Router();

router.get('/', getName);

export default router;