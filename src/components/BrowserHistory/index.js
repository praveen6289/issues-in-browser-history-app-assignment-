import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const browserResults = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="search-bar-bg-container">
          <div className="search-bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-logo"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search history"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="content-bg-container">
          <ul className="list-container">
            {browserResults.map(eachHistory => (
              <HistoryItem historyDetails={eachHistory} key={eachHistory.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
