import { Router } from 'express';
import TodoModel from '../../models/Todo';
// initial of a route

const usersRouter = Router();

// ROUTES

usersRouter.post('/', async (req, res) => {
	const data = new Date();

	const str = '1/07/2021';
	// data.setDate(34);
	const [day, mounth, year] = str.split('/');
	data.setFullYear(
		year as unknown as number,
		(mounth as unknown as number) - 1,
		day as unknown as number,
	);

	const Todo = new TodoModel({
		name: 'Alvaro6',
		formatedDate: `${day}/${mounth}/${year}`,
		date: data,
		description: 'Álvaro5',
	});
	await Todo.save();
	return res.json({ message: Todo });
});

usersRouter.get('/all', async (req, res) => {
	const all = await TodoModel.find().sort('-date');

	return res.status(200).send({ message: all });
});

export default usersRouter;
