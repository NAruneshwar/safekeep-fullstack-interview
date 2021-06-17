import React, {Fragment,useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Donut from "./Graphs";



const ListOfEntries = () => {

    const [entries, setEntries] = useState([]);
    const [graphData,setGraphData] = useState([]);
    const [graphHours,setGraphHours] = useState([]);
    const [graphNames,setGraphNames] = useState([]);

    
    // console.log(graphData)
    const getEntries = async () =>{
        try{
            const response = await fetch("http://localhost:5000/all")
            const jsonData = await response.json()
            // console.log(jsonData)
            setEntries(jsonData)
 
        } catch(err){
            console.error(err.message)
        }
    }

    const getGraphData = async () =>{
        try{
            const responseG = await fetch("http://localhost:5000/")
            const graphResponse = await responseG.json()
            // console.log(graphResponse)
            let hours = []
            let names = []
            for (let i = 0; i < graphResponse.length; i++){
                hours.push(parseInt(graphResponse[i].sum));
                names.push(graphResponse[i].first_name+" "+graphResponse[i].last_name);
            }
           
            // console.log(names)
            // console.log(hours)
            setGraphData(graphResponse)  
            setGraphHours(hours)
            setGraphNames(names)   
        }
        catch(err){
            console.error(err.message)
        }
    }
    useEffect(() => {
        getGraphData(); 
        getEntries();
    }, []);

    const deleteTimeEntry = async id => {
        try{
            const deleteTimeEntry = await fetch(`http://localhost:5000/${id}`,{
                method: "DELETE"
            });
            setEntries(entries.filter(entry => entry.id !== id));
            // console.log(deleteTimeEntry);
        }
        catch(err){
            console.error(err.message);
        }
    }


    return ( <Fragment>
        <table class="table mt-5 table-hover">
            <thead>
            <tr>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>No Of Hours</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {/* <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>Del BTN</td> */}
                {entries.map(entry =>(
                    <tr key = {entry.id}>
                        <td>{entry.id}</td>
                        <td>{entry.first_name}</td>
                        <td>{entry.last_name}</td>
                        <td>{entry.no_of_hours}</td>
                        <td><button className="btn btn-danger" onClick={()=>deleteTimeEntry(entry.id)}>Delete</button></td>
                    </tr>
                ))}
            
            </tbody>
        </table>
        {
            (graphData.length > 0 && graphHours.length > 0 && graphNames.length > 0) && <div align = "Center"><Donut params={graphData} hours = {graphHours} names = {graphNames}  /> </div>
        }
    </Fragment>
    
    );
    
};

export default ListOfEntries