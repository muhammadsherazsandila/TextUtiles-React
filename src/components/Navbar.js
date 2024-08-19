import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar({tittle = 'TextUtiles'}) {
  return (
    <nav className="navbar bg-body-secondary">
    <div className="container-fluid">
    <h3 className="navbar-brand">{tittle}</h3>
      {/* props concept // fuctionName.propertyName is used in the middle of tag where you want to add propertyValue \\ */}
      <form className="d-flex" role="search">           
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
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
    tittle : PropTypes.string
} 