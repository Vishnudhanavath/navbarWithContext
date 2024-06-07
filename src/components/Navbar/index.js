import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log('isDarkTheme:', isDarkTheme) // Debug log
      const themeBg = isDarkTheme ? 'darkTheme' : 'heading-darkmode'
      const headingDm = isDarkTheme ? 'heading-darkmode' : ''
      const websiteLogo = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const onToggleThemeBtn = () => {
        console.log('Toggling theme') // Debug log
        toggleTheme()
      }
      const hdm = isDarkTheme ? 'heading-color' : ''
      return (
        <nav className={`nav-bg ${themeBg}`}>
          <div>
            <Link to="/">
              <img src={websiteLogo} className="website" alt="website logo" />
            </Link>
          </div>
          <ul className={`page-shifting ${headingDm}`}>
            <li className="list-item">
              <Link to="/" className={`heading ${hdm}`}>
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className={`heading ${hdm}`}>
                About
              </Link>
            </li>
          </ul>
          <div>
            <button
              type="button"
              data-testid="theme"
              className="theme-btn"
              onClick={onToggleThemeBtn}
            >
              <img src={theme} alt="theme" className="Theme-img" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
