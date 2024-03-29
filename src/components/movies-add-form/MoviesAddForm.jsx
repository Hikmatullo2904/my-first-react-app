import { Component } from 'react'
import './MoviesAddForm.css'

class MoviesAddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      views : ''
    }
  }


  changeHandlerInput = e => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  addMovieHandler = e => {
    e.preventDefault();
    this.props.addMovie({name : this.state.name, views : this.state.views})
    this.setState({
      name : '',
      views : '',
    })
  }

  render() {
    const {name, views} = this.state
    return (
      <div className='movies-add-form'>
        <h1>Yangi Kino Qo'shish</h1>
        <form className='d-flex add-form' onSubmit={this.addMovieHandler}>
          <input type='text' className='form-control new-post-label' placeholder='Qnday kino?' name='name' value={name}  onChange={this.changeHandlerInput} />
          <input type='number' className='form-control new-post-label' placeholder="Nechchi marta ko'rilgan" name='views' value={views} onChange={this.changeHandlerInput}/>
          <button type="submit" className="btn btn-outline-dark" >
            Qo'shish
          </button>
        </form>
      </div>
    )
  }
}


// const MoviesAddForm = () => {
//   return (
//     <div className='movies-add-form'>
//       <h1>Yangi Kino Qo'shish</h1>
//       <form className='d-flex add-form'>
//         <input type='text' className='form-control new-post-label' placeholder='Qnday kino?'/>
//         <input type='number' className='form-control new-post-label' placeholder="Nechchi marta ko'rilgan"/>
//         <button type="submit" className="btn btn-outline-dark">
//           Qo'shish
//         </button>
//       </form>
//     </div>
//   )
// }

export default MoviesAddForm