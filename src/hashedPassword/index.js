import './index.css'

const deleteIcon =
  'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'
const starImg =
  'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'

const HashedItem = props => {
  const {details, deleteFunc} = props
  const {id, username, website} = details
  const callDelete = () => {
    deleteFunc(id)
  }

  return (
    <li className="border-container">
      <div className="initial-container">{username.slice(0, 1)}</div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <img className="stars-img" src={starImg} alt="stars" />
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={callDelete}
        // testid="delete"
      >
        <img className="delete-icon" src={deleteIcon} alt="delete" />
      </button>
    </li>
  )
}

export default HashedItem
