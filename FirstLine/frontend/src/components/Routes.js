import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Home';
import LineChart from './LineChart';
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Table from "./Table";


export default function AppRoutes() {

    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/analitics/table" element={<Table/>}/>
            <Route path="/analitics/graph" element={<LineChart/>}/>
            <Route path="/analitics/bar" element={<BarChart/>}/>
            <Route path="/analitics/pie" element={<PieChart/>}/>
        </Routes>
    );
};