import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Detail from "../pages/Detail";


const AppRoutes:React.FC=()=>{

    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
            <Route path="/detail/:id" element={<Detail/>}></Route>
        </Routes>
    )

}

export default AppRoutes