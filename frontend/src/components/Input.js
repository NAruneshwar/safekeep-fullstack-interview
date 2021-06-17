import React, {Fragment, useState} from "react";
import { Link } from 'react-router-dom';


const InputUserDetails = () => {
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [no_of_hours, setno_of_hours] = useState("")


    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body = {first_name, last_name, no_of_hours}
            const response = await fetch("http://localhost:5000/",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = '/';
        }catch(err){
            console.error(err.message);
        }

    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">User Hours Management System</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type = "text" className="form-control" value={first_name} onChange={e=> setfirst_name(e.target.value)}/>
                <input type = "text" className="form-control" value={last_name} onChange={e=> setlast_name(e.target.value)}/>
                <input type = "text" className="form-control" value={no_of_hours} onChange={e=> setno_of_hours(e.target.value)}/>
                <button className="btn btn-success">Add User</button>
            </form>
        </Fragment>
    );
};

export default InputUserDetails;