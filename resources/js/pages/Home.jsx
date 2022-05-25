import React, { Component, useEffect, useState } from "react";
import axios from 'axios';

class Home extends Component {

  constructor () {
    super()
    this.state = {
      siswas: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:8000/api/siswas').then(response => {
      this.setState({
        siswas: response.data
      })
    })
  }
  render() {
    return (
        <div className="page-wrapper">
        <div className="container-xl">
        <form action="test_filter.php" method="post">
        <div className="page-header d-print-none">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="page-title">Daftar Siswa</h2>
                    <div className="text-muted mt-1"></div>
                </div>
                {/* <!-- Page title actions --> */}
                  <div className="col-2">
                          <select id='searchByGender' name="valueToSearch" className="form-select d-inline-block w-9 me-3 text-muted">
                            <option value="">Tahun Masuk</option>
                            <option value="2025" >2025</option>
                            <option value="2024" >2024</option>
                            <option value="2023" >2023</option>
                            <option value="2021" >2021</option>
                            <option value="2020" >2020</option>
                            <option value="2019" >2019</option>
                            <option value="2018" >2018</option>
                            <option value="2017" >2017</option>
                          </select>
                  </div>
                  <div className="col-auto ms-auto d-print-none">
                    <div className="d-flex">
                        <input type="submit" name="search" value="Filter" className="form-control d-inline-block w-9 me-3" placeholder="Search user…" />
                    </div>
                  </div>
            </div>
        </div>
        <div className="page-body">
            <div className="row row-cards">
              <div className="col-12">
              <div className="card">
                <div className="table-responsive">
                  <ul className='list-group list-group-flush'>
                        {siswas.map(siswas => (
                          <Link
                            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                            to={`/${siswas.id}`}
                            key={siswas.id}
                          >
                            {siswas.nama}
                          </Link>
                        ))}
                  </ul>
                  {/* <table className="table table-vcenter card-table table-striped">
                  
                    <thead>
                      <tr>
                        <th>Nama</th>
                        <th>Nisn</th>
                        <th>Nis</th>
                        <th>Tahun Masuk</th>
                        <th className="w-1 text-center">Opsi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                            <div className="dropdown">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                  Show calendar
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </div>
                              </div>
                        <div className="d-flex">
                          <a href="" className="btn me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square me-2 text-muted" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                          Nilai
                            </a>

                          <a href="" className="btn me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer me-2 text-muted" viewBox="0 0 16 16">
                                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
                                </svg>
                          Print</a>
                          <a href="" className="btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash me-2 text-muted" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                          Hapus</a>
                        </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>
              </div>

          </div>
        </div>
        </form>
        </div>

</div>

    );
  }
}

export default Home;
