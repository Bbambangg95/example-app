import React, { Component, useEffect, useState } from "react";
import axios from "axios";

class Home extends Component {

  state = {
    jumlahSiswa: '',
  }

  jumlahSiswa = async () => {
    const res = await axios.get("/addSiswa");
    if (res.data.jumlahSiswa) {
      this.setState({
        jumlahSiswa: res.data.jumlahSiswa,
      });
    }
  }

  componentDidMount(){
    this.jumlahSiswa();
}
  render() {
    return (
        <div className="page-wrapper">
            Jumlah Siswa : 
            {this.state.jumlahSiswa}
        </div>
    );
  }
}

export default Home;
