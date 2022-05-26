import React, { Component} from "react";
import axios from 'axios';

class SiswaCreate extends Component {
    constructor (props) {
        super(props)
        this.state = {
          nama: '',
          asal: '',
          nisn: '',
          nis: '',
          tahun_masuk: '',
        }
      
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmitButton = this.onSubmitButton.bind(this);
      }
       
        onChangeValue(e) {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
      
        onSubmitButton(e) {
            e.preventDefault();
            axios.post('/api/siswaCreate', this.state).then(res => {
                console.log(res.data);
            })
        }
       
      componentDidMount () {
      }
  
  render() {
    return (
        <div class="page-wrapper">
    <div class="page-body">
        <div class="container">
            <div class="row row-cards">
                <div class="col">
                    <form onSubmit={this.onSubmitButton} class="card">
                        <div class="card-header">
                            <h4 class="card-title text-center">Input Data Baru</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-md-3 col-xl-12">
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Nama Lengkap</span>
                                    <div>
                                        <input class="form-control" type="text" name="nama" placeholder="Masukkan Nama Lengkap" onChange={this.onChangeValue} required />
                                    </div>
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Asal</span>
                                    <input class="form-control" type="text" name="asal" placeholder="Masukkan Asal " onChange={this.onChangeValue} required />
                                </div>

                                <div class="form-group mb-3 ">
                                    <span class="form-label required">NISN (Nomor Induk Siswa Nasional)</span>
                                    <input class="form-control" type="number" name="nisn" placeholder="Masukkan NISN" onChange={this.onChangeValue} required="number" />
                                </div>

                                <div class="form-group mb-3 ">
                                    <span class="form-label required">NIS</span>
                                    <input class="form-control" type="number" name="nis" placeholder="Masukkan NIS" onChange={this.onChangeValue} required="number" />
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Tahun Masuk</span>
                                    <select name="tahun_masuk" class="form-select" onChange={this.onChangeValue} required>
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

export default SiswaCreate;
