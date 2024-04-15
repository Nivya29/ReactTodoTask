import PropTypes from 'prop-types';
import TodoTask from './TodoTask';
import Filter from './Filter';

const TodoList = ({ todos, setTodos, filter, setFilter }) => {
    const handleUpdate = (updatedTask) => {
        const updatedTodos = todos.map((todo) => (todo.id === updatedTask.id ? updatedTask : todo));
        setTodos(updatedTodos);
    };

    const handleDelete = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    };

    // Filter the todos based on the selected filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') {
            return true;
        }
        return todo.status === filter;
    });

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <div className="todo-container">
                {filteredTodos.map((task) => (
                    <TodoTask
                        key={task.id}
                        task={task}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
    setTodos: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default TodoList;
