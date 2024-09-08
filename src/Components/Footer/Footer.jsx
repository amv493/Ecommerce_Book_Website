// Import Footer CSS.................................
import './Footer.css'

// Import Footer Data................................
import { FootersLinksData } from '../../Data/Data'

// Import Link From React Router.....................
import { Link } from 'react-router-dom'

// Import Copyright and Footer Socials................
import CopyRight from '../CopyRight/CopyRight'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/*..................About Params...................*/}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {
              FootersLinksData.Aboutus.map(({link, linkname}, index) => {
                return (
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
        {/*..................Discover Params...................*/}
        <div>
          <h4>Discover Us</h4>
          <ul className="discoverParams param-links">
            {
              FootersLinksData.Discover.map(({link, linkname}, index) => {
                return (
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
        {/*..................My Account Params...................*/}
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {
              FootersLinksData.Myaccount.map(({link, linkname}, index) => {
                return (
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
        {/*..................Help Params...................*/}
        <div>
          <h4>Help</h4>
          <ul className="Help-params param-links">
            {
              FootersLinksData.Help.map(({link, linkname}, index) => {
                return (
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <CopyRight />
    </footer>
  )
}
