import { Router } from 'express';
import todo from './systemRoutes/todo.route';
import adminR from './systemRoutes/admin.route';

const router = Router();
router.use('/admin', adminR);
router.use('/todo', todo);
// router.use("/", (req, res) => res.json({ message: "root" }));

export default router;
