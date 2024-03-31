import AppFilter from '../app-filter/AppFilter'
import AppInfo from '../app-info/AppInfo'
import SearchPanel from '../search-panel/SearchPanel'
import '../app/App.css'
import MovieList from '../movie-list/MovieList'
import MoviesAddForm from '../movies-add-form/MoviesAddForm'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'



const App = () => {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState('')
  const [term, setTerm] = useState('')

  const [loading, setLoading] = useState(true);

  const onDelete = id => {
    const newArr = data.filter(c => c.id !== id);
    setData(newArr);
  }

  const addMovie = movie => {
    const newMovie = { name: movie.name, views: movie.views, id: uuidv4(), favorite: false, like: false };
    const newArr = [...data, newMovie];
    setData(newArr);
  }


  const onToggleProps = (id, prop) => {
    setData(prevData =>
      prevData.map(movie =>
        movie.id === id ? { ...movie, [prop]: !movie[prop] } : movie
      )
    );
  };

  const searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(m => m.name.toLowerCase().startsWith(term.toLowerCase()));
  }

  const updateTermHandler = term => {
    setTerm(term)
  }


  const filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like);
      case 'mostWatched':
        return arr.filter(c => c.views > 800);
      case 'favorites': // Filter based on the 'favorite' property
        return arr.filter(c => c.favorite);
      default:
        return arr;
    }
  };
  

  const updateFilter = filter => {
    setFilter(filter);
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_end=10')
      .then(response => response.json())
      .then(json => {
        const newArr = json.map(item => ({
          name : item.title, 
          id : item.id, 
          views: item.id * 1000, 
          favorite: false, 
          like: false
        }));
        setData(newArr)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])




  return (
    <div className='app font-monospace'>
      <div className='content'>
        <AppInfo numberOfMovies={data.length} numberOfFavoriteMovies={data.filter(c => c.favorite).length} />
        <div className='search-panel'>
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter filter={filter} updateFilter={updateFilter} />
        </div>
        {loading && 'Loadin'}
        <MovieList data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
          onToggleProps={onToggleProps}
        />
        <MoviesAddForm addMovie={addMovie} />
      </div>
    </div>
  )


}

export default App