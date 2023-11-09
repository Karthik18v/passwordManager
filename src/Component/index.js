import './index.css'

const Password = props => {
  const {eachPassword, deleteThePassword, isChecked} = props
  const {website, username, password, id} = eachPassword
  console.log(isChecked)

  const onClickDelete = () => {
    deleteThePassword(id)
  }

  const securedpassword = isChecked ? (
    <p>{password}</p>
  ) : (
    <img
      className="starsLogo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  return (
    <li key={id}>
      <div className="password-list-item">
        <div className="website">
          <p className="first-letter">{website[0]}</p>
          <div className="user-details">
            <p className="paragraph">{website}</p>
            <p className="paragraph">{username}</p>
            <p className="paragraph">{securedpassword}</p>
          </div>
        </div>
        <button type="button" onClick={onClickDelete} className="delete-button">
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default Password
