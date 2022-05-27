import React, { Component, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { PlusLg } from "react-bootstrap-icons";
import { render } from "react-dom";

class Siswa extends Component {
  state = {
    siswas: [],
    loading: true,
  }

  fetchAllSiswas = async () => {
    const res = await axios.get("/addSiswa");
    if (res.status === 200) {
      this.setState({
        siswas: res.data.siswas,
        loading: false,
      });
    }
  }

  componentDidMount(){
    this.fetchAllSiswas();
}

  deleteSiswa = async (id) => {
    var con = window.confirm("Apakah anda yakin ingin menghapus data ini?");
    if (con) {
      await axios.delete(`/addSiswa/${id}`);
      this.fetchAllSiswas();
    }
  }
  render() {
    return (
      <div class="page-wrapper">
                <div class="container-xl">
                <form action="test_filter.php" method="post" >
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Daftar Siswa</h2>
                            <div class="text-muted mt-1"></div>
                        </div>
                        {/* <!-- Page title actions --> */}
                        <div class="col-auto ms-auto d-print-none">
                            <div class="d-flex">
                                <Link to={"/addSiswas"} class="btn btn-primary d-inline-block w-9 me-1"><PlusLg className="icon" />Tambah Siswa</Link>
                            </div>
                          </div>
                          <div class="col-2">
                                  <select id='searchByGender' name="valueToSearch" class="form-select d-inline-block w-9 me-3 text-muted">
                                    <option value="">Tahun Masuk</option>
                                    <option value="2025" >2025</option>
                                    <option value="2024" >2024</option>
                                  </select>
                          </div>
                          <div class="col-auto ms-auto d-print-none">
                            <div class="d-flex">
                                <input type="submit" name="search" value="Filter" class="form-control d-inline-block w-9 me-3" placeholder="Search user…" />
                            </div>
                          </div>
                          
                    </div>
                </div>
                <div class="page-body">
                    <div class="row row-cards">
                      <div class="col-12">
                      <div class="card">
                        <div class="table-responsive">
                          <table class="table table-vcenter card-table table-striped">
                            <thead>
                              <tr>
                                <th>Nama</th>
                                <th>Nisn</th>
                                <th>Nis</th>
                                <th>Tahun Masuk</th>
                                <th class="w-1 text-center">Opsi</th>
                              </tr>
                            </thead>
                            <tbody>
                            {this.state.siswas.map(siswas =>  (
                              <tr key={siswas.id}>
                                <td>{siswas.nama}</td>
                                <td class="text-muted">{siswas.nisn}</td>
                                <td class="text-muted">{siswas.nis}</td>
                                <td class="text-muted">{siswas.tahun_masuk}</td>
                                <td>
                                <div class="d-flex">
                                  <Link to={`/editSiswa/${siswas.id}`}  class="btn me-2">Edit</Link>
                                  <Link to={"/"}  class="btn me-2">Print</Link>
                                  <a class="btn" onClick={() => this.deleteSiswa(siswas.id)}>Hapus</a>
                                </div>
                                </td>
                              </tr>
                            ))}
                            </tbody>
                          </table>
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

export default Siswa;

 