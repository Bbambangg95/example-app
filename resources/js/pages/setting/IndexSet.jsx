import React from 'react';
import {Link, Outlet} from 'react-router-dom'

class IndexSet extends React.Component {
    render() {
        return (
            <div class="page-wrapper">
                <div class="container-xl">
                <Outlet />
                </div>
            </div>
        )
    }
}

export default IndexSet;