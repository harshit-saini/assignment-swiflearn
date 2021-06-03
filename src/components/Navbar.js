import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  min-height: 80px;

  & li{
    margin-right: 30px;
    font-weight: bold;
  }

  & li:last-of-type{
    margin-right: 0;
  }

`

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container">

        <a class="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-flex align-items-center mt-3 mt-lg-0">
              <a className="nav-link" href="#">
                <div className="d-flex flex-column justifu-content-center">
                  <span className="fw-light small">Upcoming <i className="fas fa-circle small text-o"></i></span>
                  <span>Live Consultation</span>
                </div>
              </a>
            </li>
            <li className="nav-item d-flex align-items-end mt-3 mt-lg-0">
              <a className="nav-link" href="#">Buy Plans</a>
            </li>
            <li className="nav-item d-flex align-items-end mt-3 mt-lg-0">
              <a className="nav-link" href="#">View Plans</a>
            </li>
            <li className="nav-item d-flex align-items-center mt-3 mt-lg-0">
              <button className="rounded-pill btn btn-primary" href="#">Log In</button>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
