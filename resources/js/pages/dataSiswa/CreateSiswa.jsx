import React, { Component} from "react";
import axios from 'axios';
import { Root } from "postcss";
import { Route } from "react-router-dom";

class CreateSiswa extends Component {
    state = {
        nama: '',
        asal: '',
        nisn: '',
        nis: '',
        tahun_masuk: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addSiswa", this.state);
        if(res.data.status === 200){
            window.location.href = '/siswa';
        }
    }

  render() {
    return (
        <div class="page-wrapper">
    <div class="page-body">
        <div class="container">
            <div class="row row-cards">
                <div class="col">
                    <form onSubmit={this.savePost} class="card mb-5">
                        <div class="card-header">
                            <h4 class="card-title text-center">Input Data Baru</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-md-12 col-xl-12">
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Nama Lengkap</span>
                                    <div>
                                        <input class="form-control" type="text" name="nama" placeholder="Masukkan Nama Lengkap" 
                                        value={this.state.nama} onChange={this.handleInput} required />
                                    </div>
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Asal</span>
                                    <input class="form-control" type="text" name="asal" placeholder="Masukkan Asal " 
                                    value={this.state.asal} onChange={this.handleInput} required />
                                </div>

                                <div class="form-group mb-3 ">
                                    <span class="form-label required">NISN (Nomor Induk Siswa Nasional)</span>
                                    <input class="form-control" type="number" name="nisn" placeholder="Masukkan NISN" 
                                    value={this.state.nisn} onChange={this.handleInput} required="number" />
                                </div>

                                <div class="form-group mb-3 ">
                                    <span class="form-label required">NIS</span>
                                    <input class="form-control" type="number" name="nis" placeholder="Masukkan NIS" 
                                    value={this.state.nis} onChange={this.handleInput} required="number" />
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Tahun Masuk</span>
                                    <select name="tahun_masuk" class="form-select" 
                                    value={this.state.tahun_masuk} onChange={this.handleInput} required>
                                        <option value="">Pilih Tahun</option>
                                        <option value="2020">2020</option>
                                    </select>
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
</div>
    );
  }
}

export default CreateSiswa;
