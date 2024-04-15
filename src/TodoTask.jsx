import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoTask = ({ task, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    const handleSaveEdit = () => {
        const updatedTask = {
            ...task,
            name,
            description,
            status,
        };
        onUpdate(updatedTask);
        setIsEditing(false);
    };

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        setStatus(newStatus);
        const updatedTask = {
            ...task,
            status: newStatus,
        };
        onUpdate(updatedTask);
    };
    const taskStyle = {
        backgroundColor: status === 'completed' ? 'rgb(76, 154, 76)' : 'rgba(224, 105, 105, 0.833)',
    };

    return (
        <div className="todo-card" >
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select 
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <option value="not completed">Not Completed</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={handleSaveEdit}>Save</button>
                </div>
            ) : (
                <div>
                    <p>Name: {task.name}</p>
                    <p>Description: {task.description}</p>
                    <div  >
                        <span>Status: </span>
                        <select className='status-handle' 
                            value={status}
                            onChange={handleStatusChange}
                            style={{ marginLeft: '8px',
                            ...taskStyle }}
                        >
                            <option value="not completed">Not Completed</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className='btn'>
                    <button className='btns-1' onClick={() => setIsEditing(true)}>Edit</button>
                    <button className='btns-2' onClick={() => onDelete(task.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

TodoTask.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoTask;
