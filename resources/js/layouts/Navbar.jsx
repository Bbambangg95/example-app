import React, { Component } from "react";
import {Outlet, Link} from 'react-router-dom';
import {FiHome} from 'react-icons/fi';
class Navbar extends Component {
  render() {
    return (
        <>
        <div class="navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbar-menu">
          <div class="navbar navbar-light">
            <div class="container-xl">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="home" class="nav-link">
                    <span class="nav-link-icon d-md-none d-lg-inline-block"> <FiHome /> </span>
                    <span class="nav-link-title">
                      Home
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="siswa" class="nav-link" >
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" /><line x1="12" y1="12" x2="20" y2="7.5" /><line x1="12" y1="12" x2="12" y2="21" /><line x1="12" y1="12" x2="4" y2="7.5" /><line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>
                    </span>
                    <span class="nav-link-title">
                      Daftar Siswa
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="addSiswas" class="nav-link">
                    <span class="nav-link-icon d-md-none d-lg-inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 11 12 14 20 6" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                    </span>
                    <span class="nav-link-title">
                      Input Siswa Baru
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

    <div class="page-wrapper">
      <Outlet/>
      </div>
      </>
    );
  }
}

export default Navbar;
