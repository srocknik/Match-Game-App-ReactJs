import './index.css'

const SelectImage = props => {
  const {ImageListItems, getMatched} = props

  const {id, thumbnailUrl} = ImageListItems

  const onSelectImage = () => {
    getMatched(id)
  }

  return (
    <li className="image-container">
      <button
        type="button"
        className="select-image-btn"
        onClick={onSelectImage}
      >
        <img src={thumbnailUrl} className="select-img" alt="thumbnail" />
      </button>
    </li>
  )
}

export default SelectImage
