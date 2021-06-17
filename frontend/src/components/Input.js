import React, {Fragment} from "react";

const InputUserDetails = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-5">User Hours Management System</h1>
            <form className="d-flex mt-5">
                <input type = "text" className="form-control"/>
                <input type = "text" className="form-control"/>
                <input type = "text" className="form-control"/>
                <button className="btn btn-success">Add User</button>
            </form>
        </Fragment>
    );
    
};

export default InputUserDetails;