import React, { Component, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function Siswa() {
    const [siswas, setSiswas] = useState([]);

    useEffect(()=> {
      fetchAllSiswas();
    },[]);

    const fetchAllSiswas = async () => {
      await axios.get(`/addSiswa`).then(({data})=>{
          setSiswas(data)
        })
      }
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
                          <div class="col-2">
                                  <select id='searchByGender' name="valueToSearch" class="form-select d-inline-block w-9 me-3 text-muted">
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
                              {siswas.map((siswa, index)=>(
                              <tr key={siswa.id}>
                                <td>{siswa.nama}</td>
                                <td class="text-muted">{siswa.nisn}</td>
                                <td class="text-muted">{siswa.nis}</td>
                                <td class="text-muted">{siswa.tahun_masuk}</td>
                                <td>
                                <div class="d-flex">
                                  
                                  <Link to={"/"} href="" class="btn me-2">
                                  Nilai
                                    </Link>

                                  <Link to={"/"} href="" class="btn me-2">
                                  Print</Link>
                                  <Link to={"/"} href="" class="btn">
                                  Hapus</Link>
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

 