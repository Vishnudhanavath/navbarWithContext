import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notfoundDm = isDarkTheme ? 'notFoundbg' : ''
      console.log(isDarkTheme)
      return (
        <div>
          <Navbar />
          <div className={`home-container ${notfoundDm}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-logo"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
