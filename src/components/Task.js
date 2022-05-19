import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const Task = ({ todo }) => {
	// const handleUpdateTodo = () => {
	// 	...todo,
			
	// }

	return (
		<div className='flex justify-between w-full'>
			<li className='text-xl list-none font-extralight w-4/5' key={todo.id}>
				{todo.task}
			</li>

			<div className='flex w-1/5 justify-between'>
				<input
					style={{ accentColor: 'green' }}
					className='w-5 h-5 mt-0.5 rounded-full'
					type='checkbox'
					name='completed'
					id='completed'
					checked={todo.completed}
					onChange={() => {
						console.log('checked');
					}}
				/>
				<AiFillEdit className='h-6 w-6 fill-current cursor-pointer bg-white text-blue-500' />
				<AiFillDelete className='h-6 w-6 fill-current cursor-pointer bg-white text-red-500' />
			</div>
		</div>
	);
};

export default Task;
