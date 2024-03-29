import './AppFilter.css'

const AppFilter = ({ updateFilter, filter }) => {


  return (
    <div className='btn-group' >
      {btns.map(btn => (
        <button key={btn.name} className={`btn ${btn.name == filter ? 'btn-dark' : 'btn-outline-dark'}`} type='button' onClick={() => updateFilter(btn.name)}>
          {btn.label}
        </button>
      ))}
    </div>
  )
}

const btns = [
  { name: 'all', label: 'Barcha Kinolar' },
  { name: 'popular', label: 'Mashhur kinolar' },
  { name: 'mostWatched', label: "Eng ko'p ko'rilgan kinolar" },
]

export default AppFilter