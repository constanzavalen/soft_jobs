import { Router } from 'express';
import { createNewUser } from '../../controllers/usersControllers.js';
import { validateParamsUSer } from '../../middlewares/validateParamsUser.js';

const userRoutes = Router();
userRoutes.post('/users', validateParamsUSer, createNewUser);

export default userRoutes;
