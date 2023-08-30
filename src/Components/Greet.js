import React from "react";

function Greet(props){
    return (
        <div className="container card p-3 mt-2 register-container">
            
            <h3>{props.name}</h3>
            <h1>Thank you for joining us.</h1>
            <h3>Verification sent to your {props.email}</h3>
        </div>
    );
}

export default Greet;