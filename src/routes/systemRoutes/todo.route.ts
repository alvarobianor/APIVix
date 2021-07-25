import { Router } from 'express';
import TodoModel from '../../models/Todo';
// initial of a route

const usersRouter = Router();

// ROUTES

usersRouter.post('/', async (req, res) => {
	const { name, description, date } = req.body;

	if (!name || !description || !date) {
		return res.status(400).json({ message: 'Something is broken' });
	}

	const [day, mounth, year] = date.split('/');

	const todo = new TodoModel({
		name: name,
		date: `${day}/${mounth}/${year}`,
		description: description,
		status: 'CONCLUIDA',
	});
	await todo.save();
	return res.status(201).json({ TODO: todo });
});

usersRouter.get('/all', async (req, res) => {
	const { filter } = req.query;
	let all = {};
	if (
		filter === 'PENDENTE' ||
		filter === 'CONCLUIDA' ||
		filter === 'CANCELADA'
	) {
		all = await TodoModel.find({ status: filter }).sort('-createdAt');
	} else {
		all = await TodoModel.find().sort('-createdAt');
	}

	return res.status(200).send({ message: all });
});

usersRouter.put('/changeStatus', async (req, res) => {
	const { id, status } = req.body;

	if (!id || !status) {
		return res.status(400).json({ message: 'Something is broken' });
	}

	const todo = await TodoModel.findOne({ _id: id });

	todo.status = status;

	await todo.save();

	return res.status(201).json({ message: 'todo changed', TODO: todo });
});

export default usersRouter;
