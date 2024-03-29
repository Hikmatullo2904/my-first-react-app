import './AppInfo.css'

const AppInfo = ({numberOfMovies, numberOfFavoriteMovies}) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha Kinolar soni: {numberOfMovies}</p>
      <p className='fs-4 text-uppercase'>Sevimli kinolar soni : {numberOfFavoriteMovies}</p>
    </div>
  )
}

export default AppInfo