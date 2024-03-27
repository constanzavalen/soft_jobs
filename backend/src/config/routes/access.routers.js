import { Router } from 'express';
import { isLogin } from '../../middlewares/isLogin.js';
import { getAllUser } from '../../controllers/userAccessController.js';

const router = Router();

router.get('/userAccess', isLogin, getAllUser);

export default router;