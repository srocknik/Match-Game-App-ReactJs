import './index.css'

const TabItem = props => {
  const {tabItems, getTheSelectedImagesList, defaultTab} = props

  const {displayText, tabId} = tabItems

  const onSelectImages = () => {
    getTheSelectedImagesList(tabId)
  }

  const selectedClass = defaultTab === tabId ? 'unique-Btn' : null

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${selectedClass}`}
        onClick={onSelectImages}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
