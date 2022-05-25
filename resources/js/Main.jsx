import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './layouts/Dashboard';


function Main() {
    return (
      <BrowserRouter>

    <Routes>
      <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
        <Route path="home" element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
        </BrowserRouter>


    );
}

export default Main;

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
