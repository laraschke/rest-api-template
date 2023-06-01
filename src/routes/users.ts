import {Router} from 'express';
import {validateUserLogin} from 'middleware/validation/usersValidation';
import {loginUser} from 'controllers/users';

export const routes = Router();

routes.post('/login', validateUserLogin, loginUser);
