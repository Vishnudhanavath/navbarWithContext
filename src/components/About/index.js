import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutDmLogo = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const aboutDm = isDarkTheme ? 'aboutBg' : ''
      return (
        <div>
          <Navbar />
          <div className={`home-container ${aboutDm}`}>
            <img src={aboutDmLogo} alt="about" className="home-logo" />
            <h1>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
