import './App.css'
import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Password from './Component/index'

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    isChecked: false,
    searchInput: '',
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {username, password, website} = this.state
    const newPassword = {
      username,
      password,
      website,
      id: uuid(),
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      username: '',
      password: '',
      website: '',
      isChecked: false,
    }))
  }

  deleteThePassword = id => {
    const {passwordList} = this.state
    const updatedList = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: updatedList})
  }

  noPassword = () => (
    <div className="noPassword-container">
      <img
        className="noPassword-image"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p>No Passwords</p>
    </div>
  )

  showPasswords = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSearchPassword = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  getSearchPassword = () => {
    const {passwordList, searchInput} = this.state
    return passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {website, username, password, isChecked} = this.state

    const searchResult = this.getSearchPassword()

    console.log(searchResult)

    const count = searchResult.length

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="image"
            alt="app logo"
          />
        </div>
        <div className="newPassword-container">
          <form onSubmit={this.addPassword}>
            <div className="add-password">
              <h1>Add New Password</h1>
              <div className="web-container">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  type="text"
                  className="input-field"
                  onChange={this.onWebsite}
                  placeholder="Enter Website"
                  value={website}
                />
              </div>
              <div className="web-container">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  type="text"
                  className="input-field"
                  onChange={this.onUsername}
                  placeholder="Enter Username"
                  value={username}
                />
              </div>
              <div className="web-container">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  type="password"
                  className="input-field"
                  onChange={this.onPassword}
                  placeholder="Enter Password"
                  value={password}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </div>
          </form>

          <div className="password-manage-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-image"
              alt="password manager"
            />
          </div>
        </div>
        <div className="password-container">
          <div className="nav-bar">
            <h1>Your Passwords</h1>
            <p>{count}</p>
            <div className="search-container">
              <img
                className="search-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input type="search" onChange={this.onSearchPassword} />
            </div>
          </div>
          <hr />
          <div className="show-passwords">
            <input type="checkbox" id="password" onClick={this.showPasswords} />
            <label htmlFor="password">Show passwords</label>
          </div>
          {count === 0 ? (
            this.noPassword()
          ) : (
            <div>
              <ul className="password-list">
                {searchResult.map(eachpassword => (
                  <Password
                    eachPassword={eachpassword}
                    key={eachpassword.id}
                    deleteThePassword={this.deleteThePassword}
                    isChecked={isChecked}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
