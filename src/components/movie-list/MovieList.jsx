import './MovieList.css'
import MovieListItem from '../movie-list-item/MovieListItem'

const MovieList = ({ data, onDelete, onToggleProps }) => {
  return (
    <ul className='movie-list'>
      {data.map(item => (
        <MovieListItem key={item.id}
          name={item.name}
          views={item.views}
          favorite={item.favorite}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggleProps={e => onToggleProps(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  )
}

export default MovieList