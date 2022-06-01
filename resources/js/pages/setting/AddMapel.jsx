import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';

class AddMapel extends React.Component {
    state = {
        nama_mapel: '',
        kelompok: '',
        kkm: '',
    }      

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    saveMapel = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addMapel", this.state);
        if(res.data.status === 200){
            window.location.href = '/setting';
        }
    }

    render() {
        return (
          <div className="page-body">
          <div class="container">
            <div class="row row-cards">
                <div class="col">
                    <form onSubmit={this.saveMapel} class="card mb-5">
                        <div class="card-header">
                            <h4 class="card-title text-center">Input Data Baru</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-md-12 col-xl-12">
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Nama Mata Pelajaran</span>
                                    <div>
                                        <input class="form-control" type="text" name="nama_mapel" placeholder="Masukkan Nama Lengkap" 
                                        value={this.state.nama_mapel} onChange={this.handleInput} required />
                                    </div>
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">KKM</span>
                                    <input class="form-control" type="text" name="kkm" placeholder="Masukkan Asal " 
                                    value={this.state.kkm} onChange={this.handleInput} required />
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Kelompok Mata Pelajaran</span>
                                    <input class="form-control" type="text" name="kelompok" placeholder="Masukkan Asal " 
                                    value={this.state.kelompok} onChange={this.handleInput} required />
                                </div>
                                <div class="form-group mb-3">
                                    <div class="col">
                                        <button class="btn btn-primary" type="submit">
                                            Buat Transkip
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default AddMapel;