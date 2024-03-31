import { useState } from 'react'
import './SearchPanel.css'


const SearchPanel = ({updateTermHandler}) => {
  const [term, setTerm] = useState('');
 
  const updateTermHandler2 = e => {
    const term = e.target.value;
    setTerm(term);
    updateTermHandler(term)
  }

  return (
    <input type="text"
      className="form-control search-panel"
      placeholder="Kinolarni qidirish"
      onChange={updateTermHandler2}
      value={term} />
  )

}

export default SearchPanel