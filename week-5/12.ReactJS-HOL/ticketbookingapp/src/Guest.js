import React from "react";

function Guest(props) {

    return (
        <div>

            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

            <p><b>Flight Name :</b> Air India</p>
            <p><b>Flight No :</b> AI202</p>
            <p><b>From :</b> Hyderabad</p>
            <p><b>To :</b> Delhi</p>

            <h3 style={{ color: "red" }}>
                Please Login to Book Tickets
            </h3>

            <button onClick={props.login}>
                Login
            </button>

        </div>
    );

}

export default Guest;