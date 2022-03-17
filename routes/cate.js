import { Router } from 'express';
import { create, list, readone } from '../controllers/category';




import { checkAuth } from '../middlewares/checkAuth' 
const router = Router();
// fake data

// router.get('/products', checkAuth, list);
// router.get('/product/:id', checkAuth, read);
router.post('/category', checkAuth, create  );
router.get('/category', checkAuth, list  );
// router.get('/category:id', checkAuth, readone );
router.get("/category/:id", checkAuth, readone);
// router.post('/products', checkAuth,create );
// router.delete('/product/:id', checkAuth, dels);
// router.patch('/product/:id', checkAuth, update);

export default router;