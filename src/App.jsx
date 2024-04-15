import './App.css';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [todos, setTodos] = useState([
        { id: 1, name: 'Office-Task 1', description: 'This is the description for my first Task', status: '' },
        { id: 2, name: 'Office-Task 2', description: 'This is the description for my second Task', status: '' },
        { id: 3, name: 'Office-Task 3', description: 'This is the description for my third Task', status: '' }
    ]);
    const [filter, setFilter] = useState('all'); // status filter

    const addTodo = () => {
        if (newTaskName && newTaskDescription) {
            const newTodo = {
                id: Date.now(),
                name: newTaskName,
                description: newTaskDescription,
                status: 'not completed'
            };
            setTodos([...todos, newTodo]);
            setNewTaskName('');
            setNewTaskDescription('');
        }
    };

    return (
        <div className='container'>
            <h1 className='heading'>My Todo</h1>
            <div className='task'>
                <input className='input1'
                    type='text'
                    placeholder='Todo Name'
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
                <input className='input1'
                    type='text'
                    placeholder='Todo Description'
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                />
                <button className='tasks'onClick={addTodo}>Add Todo</button>
            </div>
            <TodoList todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
        </div>
    );
}

export default App;
