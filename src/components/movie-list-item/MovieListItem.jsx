import './MovieListItem.css'


const MovieListItem = (props) => {

    const { name, views, onDelete, favorite, like, onToggleProps } = props;



    return (
        <li className={`list-group-item d-flex justify-content-between ${favorite && 'favorite'} ${like && 'like'}`}>
            <span className='list-group-item-label' onClick={onToggleProps} data-toggle='favorite'>{name}</span>
            <input type="number" className='list-group-item-input' defaultValue={views} />
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn-cookie btn-sm'>
                    <i className='fas fa-cookie' onClick={onToggleProps} data-toggle='like'></i>
                </button>
                <button className='btn-trash btn-sm' onClick={onDelete}>
                    <i className='fas fa-trash '></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    )
}

export default MovieListItem