import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
    return (
        <>
        
        <div className="status-filter">
        
        <div>
        <h3 className='headings'>My Todos</h3>
        </div>
            <div >
            <label htmlFor="status-filter">Status Filter : </label>
            <select className='filter-status'
                id="status-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
            </select>
            </div>
        </div>
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Filter;
