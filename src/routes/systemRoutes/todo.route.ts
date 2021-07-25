import { Router } from 'express';
import TodoModel from '../../models/Todo';
// initial of a route

const usersRouter = Router();

// ROUTES

usersRouter.post('/', async (req, res) => {
	const Todo = new TodoModel({
		name: 'Alvaro',
		date: new Date(),
		description: 'Álvaro',
	});
	await Todo.save();
	return res.json({ message: 'user' });
});

export default usersRouter;
