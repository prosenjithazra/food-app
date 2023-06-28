import React from 'react'
import {Link} from 'react-router-dom';
import logoImg from '../../images/logo.png'
import cartIcn from '../../images/cart.svg'

const Header = () => {
  return (
    <>
      <header className="main-head new-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/"><img src={logoImg} alt=""
              /></Link>
            <button
              className="navbar-toggler navbar-toggler-main"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
              <span className="stick"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <button
                className="navbar-toggler navbar-toggler-main"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                <span className="stick"></span>
              </button>
              <ul className="navbar-nav ms-auto">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/recipes">Recipes</Link></li>
                <li ><Link to="/explore">Explore</Link></li>
                <li><Link to="/followers">Followers</Link></li>
              </ul>
            </div>
            <div className="hdr-rgt">
              <Link className="cart">
                <img src={cartIcn} alt="" />
                <sub><span className="dot"></span></sub>
              </Link>
              <Link className="btn hdr-btn" to="/login">Log In</Link>
            </div>
          </nav>
        </div>

        <button
          className="navbar-toggler"
          id="navoverlay"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
      </header>
    </>
  )
}

export default Header