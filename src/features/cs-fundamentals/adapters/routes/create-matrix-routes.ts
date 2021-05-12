import {Router} from 'express';
import { createMatrix } from '../controllers/create-matrix';

const router  = Router();

router.post('/', createMatrix);

router.get('/');

router.patch('/:id');

router.delete('/:id');

export default router;