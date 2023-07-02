import './index.css'

const NavBar = props => {
  const {count, timer, navItems} = props

  const {logoImage, timerImage} = navItems

  return (
    <li className="nav-bar">
      <img src={logoImage} alt="website logo" className="website-logo" />
      <div className="score-container">
        <p className="score-text">
          Score: <i className="score">{count}</i>
        </p>
        <div className="timer-container">
          <img src={timerImage} alt="timer" className="timer-img" />
          <p className="timer-text">{timer} sec</p>
        </div>
      </div>
    </li>
  )
}

export default NavBar
