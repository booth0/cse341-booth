import express from 'express';
import { getName } from '../controllers';

const router = express.Router();

router.get('/', getName);

export default router;