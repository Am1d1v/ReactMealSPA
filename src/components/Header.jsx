import { Link } from "react-router-dom"

function Header() {

  return (
    <nav>
        <div className="nav-wrapper deep-purple lighten-3">
          <Link to="/" className="brand-logo">React Meal SPA</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Header