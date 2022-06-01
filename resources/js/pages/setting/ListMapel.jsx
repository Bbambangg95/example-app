import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { PlusLg } from "react-bootstrap-icons";
class ListMapel extends React.Component {
    state = {
        mapels: [],
        loading: true,
      }
    
      fetchAllMapels = async () => {
        const res = await axios.get("/addMapel");
        if (res.status === 200) {
          this.setState({
            mapels : res.data.mapels,
            loading: false,
          });
        }
      }
    
      componentDidMount(){
        this.fetchAllMapels();
    }
    
      deleteMapel = async (id) => {
        var con = window.confirm("Apakah anda yakin ingin menghapus data ini?");
        if (con) {
          await axios.delete(`/addMapel/${id}`);
          this.fetchAllMapels();
        }
      }

    render() {
        return (
          <>
          <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Mata Pelajaran</h2>    
                            <div class="text-muted mt-1"></div>
                        </div>
                        {/* <!-- Page title actions --> */}
                        <div class="col-auto ms-auto d-print-none">
                            <div class="d-flex">
                                <Link to={"addMapel"} class="btn btn-primary d-inline-block w-9 me-1"><PlusLg className="icon" />Tambah Pelajaran</Link>
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
                                <th>Mata Pelajaran</th>
                                <th>KKM</th>
                                <th class="w-1 text-center">Opsi</th>
                              </tr>
                            </thead>
                            <tbody>
                            {this.state.mapels.map(mapel =>  (
                              <tr key={mapel.id}>
                                <td>{mapel.nama_mapel}</td>
                                <td class="text-muted">{mapel.kkm}</td>
                                <td>
                                <div class="d-flex">
                                  <Link to={`/setting/${mapel.id}`}  class="btn me-2">Edit</Link>
                                  <button onClick={() => this.deleteMapel(mapel.id)}  className="btn btn-danger me-2">Hapus</button>
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
                </>
        )
    }
}

export default ListMapel;