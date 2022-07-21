import axios from "axios";
import React from "react";

class EditNilai extends React.Component {
    state ={
        nilais: [],
    }

    fetchAllMapels = async () => {
      const id = this.props.id;
      const res = await axios.get(`/nilai/${id}`);
      if (res.status === 200) {
        this.setState({
          nilais : res.data.nilai,
        });
      }
    }
  
    componentDidMount(){
      this.fetchAllMapels();
  }
    render() {
        return (
            <div className="page-body">
                <div class="container">
                <div class="card card-md">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col-10">
                        <h3 class="h1">Data Transkip Nilai</h3>
                        <div class="markdown text-muted">
                          All icons come from the Tabler Icons set and are MIT-licensed. Visit
                          <a href="https://tabler-icons.io" target="_blank" rel="noopener">tabler-icons.io</a>,
                          download any of the 1978 icons in SVG, PNG or&nbsp;React and use them in your favourite design tools.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table class="table card-table table-vcenter text-center text-nowrap datatable mt-2">
                      <thead>
                        <tr>
                          <th class="w-1" rowSpan="3">No.</th>
                          <th rowSpan="3">Mata Pelajaran</th>
                          <th rowSpan="3">KKM</th>
                          <th colSpan="6" class="w-">CATATAN SEMESTER</th>
                          <th rowSpan="3">Rata-rata/Mata Pelajaran</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>KELAS X</th>
                            <th colSpan={2}>KELAS XI</th>
                            <th colSpan={2}>KELAS XII</th>
                        </tr>
                        <tr>
                            <th>Semester 1</th>
                            <th>Semester 2</th>
                            <th>Semester 3</th>
                            <th>Semester 4</th>
                            <th>Semester 5</th>
                            <th>Semester 6</th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <td className="text-start fw-bold" colSpan={12}>Kelompok A</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span class="text-muted">01</span></td>
                          <td>PAI</td>
                          <td>87</td>
                          <td>87</td>
                          <td>17</td>
                          <td>99</td>
                          <td>87</td>
                          <td>88</td>
                          <td>88</td>
                        </tr>
                      </tbody>
                      <thead className="mt-2">
                        <tr>
                          <td className="text-start fw-bold" colSpan={12}>Kelompok B</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span class="text-muted">01</span></td>
                          <td>Pendidikan Agama Islam</td>
                          <td>87</td>
                          <td>87</td>
                          <td>17</td>
                          <td>99</td>
                          <td>87</td>
                          <td>88</td>
                          <td>88</td>
                        </tr>
                        <tr>
                          <td><span class="text-muted">01</span></td>
                          <td>Pendidikan Agama Islam</td>
                          <td>87</td>
                          <td>87</td>
                          <td>17</td>
                          <td>99</td>
                          <td>87</td>
                          <td>88</td>
                          <td>88</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <td className="text-start fw-bold" colSpan={12}>Kelompok C</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span class="text-muted">01</span></td>
                          <td>Pendidikan Agama Islam</td>
                          <td>87</td>
                          <td>87</td>
                          <td>17</td>
                          <td>99</td>
                          <td>87</td>
                          <td>88</td>
                          <td>88</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default EditNilai;