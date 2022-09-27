import React from "react";
import { Bar } from "react-chartjs-2";
import {useSelector} from "react-redux";

const BarChart = () =>{
    const rowData = useSelector(state=>state.rowData)

    return (
        <div style={{width: "90%", margin: "auto"}} >
            <Bar  data={rowData} />
        </div>

    )
}

export default BarChart;
