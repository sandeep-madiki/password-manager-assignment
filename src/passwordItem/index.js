import './index.css'

const deleteIcon =
  'https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png'

const PasswordItem = props => {
  const {details, deleteFunc} = props
  const {id, username, website, password} = details
  const callDelete = () => {
    deleteFunc(id)
  }

  return (
    <li className="border-container">
      <div className="initial-container">{username.slice(0, 1)}</div>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <button type="button" className="delete-btn" onClick={callDelete}>
        <img
          className="delete-icon"
          src={deleteIcon}
          alt="delete"
          //   testid="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
