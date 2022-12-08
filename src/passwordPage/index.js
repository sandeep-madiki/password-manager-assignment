import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import PasswordItem from '../passwordItem'
import HashedItem from '../hashedPassword'

class PasswordPage extends Component {
  state = {
    username: '',
    website: '',
    password: '',
    searchInput: '',
    passwordsList: [],
    filteredSearchRes: [],
    hide: true,
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  getPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  getSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  addNewPassword = event => {
    event.preventDefault()
    const {username, password, website, hide} = this.state
    const newPasswordItem = {
      id: v4(),
      website,
      username,
      password,
      hide,
    }
    this.setState(prev => ({
      passwordsList: [...prev.passwordsList, newPasswordItem],
      username: '',
      password: '',
      website: '',
    }))
  }

  OnToggleHide = () => {
    this.setState(prev => ({
      hide: !prev.hide,
    }))
  }

  deleteFunc = id => {
    const {passwordsList} = this.state
    const filteredRes = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: filteredRes,
    })
  }

  renderPasswords = () => {
    const {passwordsList, hide} = this.state
    if (passwordsList.length > 0) {
      if (hide) {
        return (
          <>
            {passwordsList.map(each => (
              <HashedItem
                details={each}
                key={each.id}
                deleteFunc={this.deleteFunc}
              />
            ))}
          </>
        )
      }
      return (
        <>
          {passwordsList.map(each => (
            <PasswordItem
              details={each}
              key={each.id}
              deleteFunc={this.deleteFunc}
            />
          ))}
        </>
      )
    }
    return (
      <div className="no-passwords-img-container">
        <img
          className="no-passwords"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p className="no-passwords-txt">No Passwords</p>
      </div>
    )
  }

  getSearchResults = () => {
    const {passwordsList, searchInput} = this.state
    const searchResults = passwordsList.filter(each =>
      each.username.includes(searchInput),
    )
    this.setState({
      filteredSearchRes: searchResults,
    })
  }

  render() {
    const {passwordsList, username, password, website} = this.state
    const passwords = this.renderPasswords()

    return (
      <div className="bg-linear">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="form-container">
          <form className="form-container-2" onSubmit={this.addNewPassword}>
            <h1 className="add-new-txt">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="ENTER WEBSITE"
                className="input"
                onChange={this.getWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
              <input
                type="text"
                placeholder="ENTER USERNAME"
                className="input"
                onChange={this.getUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />
              <input
                type="password"
                placeholder="ENTER PASSWORD"
                className="input"
                onChange={this.getPassword}
                value={password}
              />
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="form-side-img"
          />
        </div>
        <div className="passwords-container">
          <div className="search-container">
            <div className="passwords-count-container">
              <h1 className="your-passwords-txt">Your Passwords</h1>
              <p className="passwords-count">{passwordsList.length}</p>
            </div>
            <div className="search-icon-input">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="SEARCH"
                className="search-input"
                onChange={this.getSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              id="checkBox"
              onChange={this.OnToggleHide}
            />
            <label htmlFor="checkBox">Show Passwords</label>
          </div>
          <ul className="password-items">{passwords}</ul>
        </div>
      </div>
    )
  }
}

export default PasswordPage
