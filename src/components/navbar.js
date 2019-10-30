import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/**
 * Navigation bar for the website.
 *
 * @param {*} param0
 */
const Navbar = ({ siteTitle }) => (
  <header className="p-3 pl-6 bg-gray-200">
    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
      <h3 className="text-4xl font-heading font-bold">
        <Link to="/" className="">
          {siteTitle}
        </Link>
      </h3>

      <button className="py-1 px-6 rounded font-bold border border-gray-500 bg-gray-100 mt-3 sm:mt-0">
        Sign Up
      </button>
    </div>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
