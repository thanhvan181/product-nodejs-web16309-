import { Router } from 'express';
import { create, dels, list, read, update } from '../controllers/post';
// import { create, dels, list, read, update } from '../controllers/product';

//diractoring

import { checkAuth } from '../middlewares/checkAuth' 
const router = Router();
router.get('/posts', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/posts', checkAuth, create );
router.delete('/product/:id', checkAuth, dels);
router.patch('/product/:id', checkAuth, update);

export default router;