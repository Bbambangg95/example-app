import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Siswa from './pages/dataSiswa/Siswa';
import CreateSiswa from './pages/dataSiswa/CreateSiswa';
import Dashboard from './layouts/Dashboard';
import Params from './pages/dataSiswa/Params';


function Main() {
    return (
      <BrowserRouter>

    <Routes>
      <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
        <Route path="home" element={<Home />}/>
        <Route path="siswa" element={<Siswa />}/>
        <Route path="addSiswas" element={<CreateSiswa />}/>
        <Route path='editSiswa/:id' element={<Params />} />
      </Route>
    </Routes>
        </BrowserRouter>


    );
}

export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
