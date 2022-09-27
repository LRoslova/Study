import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import BootstrapTable from 'react-bootstrap-table-next';
import {useSelector} from "react-redux";


const Table = () =>{
    const rowData = useSelector(state=>state.rowData);
    let tableData=[]

    for(let i=0; i<rowData.labels.length; i++){
        let tmp = {
            year: rowData.labels[i]
        }
        for (let j=0; j<rowData.datasets.length; j++){
            tmp[`${rowData.datasets[j].label}`] = rowData.datasets[j].data[i];
        }
        tableData.push(tmp);
    }

    let columns=[
            {
                dataField: 'year',
                text: 'Year'
            }];
    for (let i=0; i<rowData.datasets.length; i++){
        columns.push({
            dataField: rowData.datasets[i].label,
            text: `${rowData.datasets[i].label}`
        })
    }

    return (
        <div style={{textAlign: "center"}}>
            <BootstrapTable striped bordered hover keyField='id' data={ tableData } columns={ columns } />
        </div>

    )
}

export default Table;
