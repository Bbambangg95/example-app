import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Siswa from './pages/Siswa';
import SiswaCreate from './pages/SiswaCreate';
import Dashboard from './layouts/Dashboard';


function Main() {
    return (
      <BrowserRouter>

    <Routes>
      <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
        <Route path="home" element={<Home />}/>
        <Route path="siswa" element={<Siswa />}/>
        <Route path="siswa/create" element={<SiswaCreate />}/>
      </Route>
    </Routes>
        </BrowserRouter>


    );
}

export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
