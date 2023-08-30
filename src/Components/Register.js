import React from "react";

export default function Register(props){
    return(
    <div className="container card p-4 mt-2 register-container">
        <form onSubmit={props.submit}>
            <h1 className="text-center">Registartion Form</h1>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" className="form-control" required placeholder="Enter Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="form-control" required placeholder="Enter Email"></input>
            </div>
            <div className="form-group"> 
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" className="form-control" required placeholder="Enter Password"></input>
            </div>
            {/* <div className="form-group"> 
                <label htmlFor="Cpassword">Confirm Password:</label>
                <input type="password" name="cpass" className="form-control" placeholder="Re-Enter Password"></input>
            </div> */}
            <div className="form-group">
                <button type="submit" className="btn btn-danger">Register</button>
            </div>
        </form>
    </div>
    );
}