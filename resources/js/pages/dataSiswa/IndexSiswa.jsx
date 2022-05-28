import React from "react";
import {Outlet} from "react-router-dom";

class IndexSiswa extends React.Component {
    render() {
        return (
            <>
                <Outlet />
            </>
        )
    }
}

export default IndexSiswa;