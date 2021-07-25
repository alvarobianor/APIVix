const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		date: { type: Date, required: true },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);
const model = mongoose.model('Todo', TodoSchema);
export default model;
