import {Router} from 'express';
import {routes as userRoutes} from 'routes/users';

export const routes = Router();
routes.use('/users', userRoutes);
