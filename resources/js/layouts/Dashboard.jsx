import React, { Component} from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from './Footer';

class Dashboard extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Navbar />
                <Footer />
            </div>
        )
    }
}

export default Dashboard;
