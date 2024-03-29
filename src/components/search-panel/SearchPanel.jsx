import { Component } from 'react'
import './SearchPanel.css'

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }


  updateTermHandler = (e) => {
    const term = e.target.value;
    this.setState({ term: term })
    this.props.updateTermHandler(term)
  }
  render() {
    return (
      <input type="text"
        className="form-control search-panel"
        placeholder="Kinolarni qidirish"
        onChange={this.updateTermHandler}
        value={this.state.term} />
    )
  }
}

export default SearchPanel