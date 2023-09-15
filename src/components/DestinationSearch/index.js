import {Component} from 'react'
import {DestinationItem} from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  changeEvent = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationList} = this.props
    const {searchInput} = this.state

    return (
      <div className="body">
        <h1>Destination Search</h1>
        <input type="text" onChange={this.changeEvent} className="search" />
        <ul className="cont">
          {searchInput === ''
            ? destinationList.map(element => (
                <DestinationItem item={element} key={element.id} />
              ))
            : destinationList
                .filter(element => element.name.includes(searchInput))
                .map(ele => <DestinationItem ele={ele} key={ele.id} />)}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
