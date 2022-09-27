import React from "react";
import { Line } from "react-chartjs-2";
import {useSelector} from "react-redux";



const LineChart = () =>{
    const rowData = useSelector(state=>state.rowData)

    return (
        <div style={{width: "90%", margin: "auto"}} >
            <Line  data={rowData} />
        </div>

    )
}

export default LineChart;
