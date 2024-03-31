/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import './MoviesAddForm.css'


const MoviesAddForm = ({addMovie}) => {
  const [name, setName] = useState('');
  const [views, setViews] = useState('');

  const changeHandlerInput = e => {
    if(e.target.name == 'name') {
      setName(e.target.value)
    } else if(e.target.name == 'views') {
      setViews(e.target.value);
    }
  }

  const addMovieHandler = e => {
    e.preventDefault();
    if(name == '' || views == '') return;
    addMovie({name : name, views :views})
    setName('');
    setViews('');
  }

  return (
    <div className='movies-add-form'>
      <h1>Yangi Kino Qo'shish</h1>
      <form className='d-flex add-form' onSubmit={addMovieHandler}>
        <input type='text' className='form-control new-post-label' placeholder='Qnday kino?' name='name' value={name}  onChange={changeHandlerInput} />
        <input type='number' className='form-control new-post-label' placeholder="Nechchi marta ko'rilgan" name='views' value={views} onChange={changeHandlerInput}/>
        <button type="submit" className="btn btn-outline-dark" >
          Qo'shish
        </button>
      </form>
    </div>
  )

}


export default MoviesAddForm