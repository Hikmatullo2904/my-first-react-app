import AppFilter from '../app-filter/AppFilter'
import AppInfo from '../app-info/AppInfo'
import SearchPanel from '../search-panel/SearchPanel'
import '../app/App.css'
import MovieList from '../movie-list/MovieList'
import MoviesAddForm from '../movies-add-form/MoviesAddForm'
import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'





class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Lord of the Rings", views: 120000, favorite: true, like: false, id: 1 },
        { name: "Harry Potter", views: 300000, favorite: false, like: false, id: 2 },
        { name: "Gladiator", views: 100000, favorite: false, like: false, id: 3 },
        { name: "gustava", views: 210000, favorite: false, like: true, id: 4 },
        { name: "Umar", views: 1000000, favorite: true, like: true, id: 5 },
      ],
      term: '',
      filter  :'all',
    }
  }



  onDelete = id => {
    this.setState(({ data }) => ({ data: data.filter(c => c.id != id) }))
  }

  addMovie = movie => {
    const newMovie = { name: movie.name, views: movie.views, id: uuidv4(), favorite: false, like: false };
    // this.setState(({data}) => ({
    //   data : [...data, newMovie]
    // }))
    this.setState(function ({ prevState }) {
      return {
        data: [...prevState.data, newMovie]
      };
    });
  }



  onToggleProps = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(movie => {
        if (movie.id === id) {
          console.log(movie.like);
          console.log(prop + " " + movie.prop);
          return { ...movie, [prop]: !movie[prop] }
        }

        return movie
      }),
    }))
  }

  searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(m => m.name.toLowerCase().startsWith(term.toLowerCase()));
  }


  updateTermHandler = term => {
    this.setState({ term: term })
  }


  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'popular':
        return arr.filter(c => c.like);
      case 'mostWatched': 
        return arr.filter(c => c.views > 800)
      default :
       return arr;
        
    }
  }

  updateFilter = filter => {
    this.setState({ filter })
  }



  render() {
    const { data, term, filter } = this.state
    const numberOfMovies = data.length
    const numberOfFavoriteMovies = data.filter(c => c.favorite).length

    const availableMovies = this.filterHandler(this.searchHandler(data, term), filter);


    return (
      <div className='app font-monospace'>
        <div className='content'>
          <AppInfo numberOfMovies={numberOfMovies} numberOfFavoriteMovies={numberOfFavoriteMovies} />
          <div className='search-panel'>
            <SearchPanel updateTermHandler={this.updateTermHandler} />
            <AppFilter filter={filter} updateFilter={this.updateFilter}/>
          </div>
          <MovieList data={availableMovies}
            onDelete={this.onDelete}
            onToggleProps={this.onToggleProps}
          />
          <MoviesAddForm addMovie={this.addMovie} />
        </div>
      </div>
    )
  }
}

export default App