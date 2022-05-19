import { useState } from 'react'
import Task from './components/Task';

import './App.css';

const App = () => {
	const [todoList, setTodoList] = useState([{
		id: 1,
		task: 'Learn React',
		completed: true
	}]);

	const [newTodo, setNewTodo] = useState({

	});

	return (
		<div className='flex flex-col justify-center items-center h-screen gap-6'>
			<h1 className='text-3xl text-gray-500 font-thin'>TODO List</h1>
			<form className='p-12 w-1/3 rounded-lg shadow'>
				<div>
					<input
						// value={newTodo.task}
						// onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
						className='w-full rounded-lg shadow-inner p-4 outline-none text-center'
						type='text'
						name='todo'
						id='todo'
					/>
					<button
						className='w-full rounded-lg bg-gray-100 p-4 mt-4 hover:shadow active:shadow-inner'
						type='submit'
					>
						Add
					</button>
				</div>
			</form>
			<div className='p-12 w-1/3 rounded-lg shadow'>
				<ul>
					{todoList.map(todo => (
						<Task key={todo.id} todo={todo} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
