import { Router } from 'express';
import { signin, signup } from '../controllers/user';
// import { create, dels, list, read, update } from '../controllers/product';

//diractoring

import { checkAuth } from '../middlewares/checkAuth' 
const router = Router();
// fake data

// router.get('/products', checkAuth, list);
// router.get('/product/:id', checkAuth, read);
router.post('/singin', checkAuth, signin );
router.post('/signup', checkAuth,signup );
// router.post('/products', checkAuth,create );
// router.delete('/product/:id', checkAuth, dels);
// router.patch('/product/:id', checkAuth, update);

export default router;