import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar({ tittle = 'TextUtiles' }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
            <li className="nav-item">
            </li>
            <li className="nav-item">
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}



// // .....one method to set default props
// Navbar.defaultProps = {
//     title:'Hello'
// }
// to set type of prop .... it is useful from facing bugs in code
Navbar.propTypes = {
  tittle: PropTypes.string
} 