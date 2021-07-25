import { Router } from 'express';
import todo from './systemRoutes/todo.route';

const router = Router();
router.use('/todo', todo);

export default router;
