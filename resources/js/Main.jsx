import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';

import IndexSiswa from './pages/dataSiswa/IndexSiswa'
import Siswa from './pages/dataSiswa/Siswa';
import CreateSiswa from './pages/dataSiswa/CreateSiswa';
import Params from './pages/dataSiswa/Params';

import EditNilai from './pages/dataNilai/EditNilai';

import IndexSet from './pages/setting/IndexSet';
import Dashboard from './layouts/Dashboard';


function Main() {
    return (
      <BrowserRouter>

    <Routes>
      <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
        <Route path="home" element={<Home />}/>
        <Route path="siswa" element={<IndexSiswa />}>
          <Route index element={<Siswa />}/>
          <Route path="editNilai" element={<EditNilai />} />
          <Route path=':id' element={<Params />} />
          <Route path="addSiswas" element={<CreateSiswa />}/>
        </Route>
        <Route path="setting" element={<IndexSet />}/>
      </Route>
    </Routes>
        </BrowserRouter>


    );
}

export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
