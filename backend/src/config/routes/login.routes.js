import {Router} from 'express';
import {loginUser} from '../../controllers/loginController.js';
import {validParameters} from '../../middlewares/validateParamsLogin.js';

const router = Router();

router.post('/login', validParameters, loginUser);

export default router;