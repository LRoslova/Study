import React from "react";
import { Pie } from "react-chartjs-2";
import {useSelector} from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () =>{
    const rowData = useSelector(state=>state.rowData)

    let pieData=[];
    for (let i=0; i<rowData.datasets.length; i++){
        let tmp={
            namePie: rowData.datasets[i].label,
            data: {
                labels: rowData.labels,
                datasets: [
                    {
                        label: rowData.datasets[i].label,
                        data: rowData.datasets[i].data,
                        backgroundColor: [
                            "#FF7F50",
                            "#C0C0C0",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0",
                        ],
                        borderColor: "black",
                        borderWidth: 2,
                        tension: 0.5
                    },
                ]
            }

        }
        pieData.push(tmp);
    }

    const listItems = pieData.map((index) =>
        <li style={{width: "25%", display: "inline-block", textAlign: "center"}}>
            <p>{index.namePie}</p>
            <Pie data={index.data}/>
        </li>
    );

    return (
        <div style={{margin: 10}} >
            <ul>
                {listItems}
            </ul>
        </div>

    )
}

export default PieChart;
