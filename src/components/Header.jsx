import React from 'react'

function Header() {

  return (
    <nav>
        <div className="nav-wrapper deep-purple lighten-3">
          <a href="/" className="brand-logo">React Meal SPA</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/Am1d1v">Repo</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header