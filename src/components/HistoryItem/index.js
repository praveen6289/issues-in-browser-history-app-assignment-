import './index.css'

const HistoryItem = props => {
  const {historyDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyDetails

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-container">
        <div className="history-details-container">
          <img src={logoUrl} alt={title} className="img" />
          <div className="history-details">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </div>
    </li>
  )
}
export default HistoryItem
