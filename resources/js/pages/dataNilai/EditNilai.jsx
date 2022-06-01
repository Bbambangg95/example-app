import axios from "axios";
import React from "react";

class EditNilai extends React.Component {
    state ={
        mapels: [],
        mapelsB: []
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    updateNilai = async (e) => {
        e.preventDefault();
        const id = this.props.id;
        const res = await axios.patch(`/editNilai/${id}`, this.state);
        if(res.data.status === 200){
            window.location.href = '/siswa';
        }
    }

    async componentDidMount(){
        const id = this.props.id;
        const listMapel = await axios.get(`/addMapel`);
        this.setState({
            mapels: listMapel.data.mapels,
            mapelsB: listMapel.data.mapelsB
        });
    }
    render() {
        return (
            <div className="page-body">
                <div class="container">
                <table>
                    {this.state.mapels.map(mapel => (
                        <tr>{mapel.nama_mapel}
                            <td>{mapel.kkm}</td>
                            <td>{mapel.kode_mapel}</td>
                        </tr>
                        
                    ))}

                </table>
                </div>
            </div>
        );
    }
}

export default EditNilai;