import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistoryItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-container">
        <div className="history-details-container">
          <img src={logoUrl} alt="domain logo" className="img" />
          <div className="history-details">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteHistoryItem}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
