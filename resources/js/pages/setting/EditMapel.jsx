import React from 'react';
import axios from 'axios';

class EditMapel extends React.Component {
    state ={
        nama_mapel: '',
        kelompok: '',
        kkm: ''
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    updateMapel = async (e) => {
        e.preventDefault();
        const id = this.props.id;
        const res = await axios.patch(`/addMapel/${id}`, this.state);
        if(res.data.status === 200){
            window.location.href = '/setting';
        }
    }

    async componentDidMount(){
        const id = this.props.id;
        console.log(id)
        const res = await axios.get(`/addMapel/${id}/edit`);
        this.setState({
            nama_mapel: res.data.mapel.nama_mapel,
            kkm: res.data.mapel.kkm,
            kelompok: res.data.mapel.kelompok,

        });
    }
    render() {
        return (
            <div class="page-wrapper">
    <div class="page-body">
        <div class="container">
            <div class="row row-cards">
                <div class="col">
                    <form onSubmit={this.updateMapel} class="card mb-5">
                        <div class="card-header">
                            <h4 class="card-title text-center">Edit Data Siswa</h4>
                        </div>
                        <div class="card-body">
                            <div class="col-md-12 col-xl-12">
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Mata Pelajaran</span>
                                    <div>
                                        <input class="form-control" type="text" name="nama_mapel" placeholder="Masukkan Mata Pelajaran" 
                                        value={this.state.nama_mapel} onChange={this.handleInput} required />
                                    </div>
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">KKM</span>
                                    <input class="form-control" type="text" name="kkm" placeholder="Masukkan Nilai KKM " 
                                    value={this.state.kkm} onChange={this.handleInput} required />
                                </div>
                                <div class="form-group mb-3 ">
                                    <span class="form-label required">Kelompok Mata Pelajaran</span>
                                    <input class="form-control" type="text" name="kelompok" placeholder="Masukkan Nilai KKM " 
                                    value={this.state.kelompok} onChange={this.handleInput} required />
                                </div>
                                <div class="form-group mb-3">
                                    <div class="col">
                                        <button class="btn btn-primary" type="submit">
                                            Simpan
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
        )
    }
}

export default EditMapel;