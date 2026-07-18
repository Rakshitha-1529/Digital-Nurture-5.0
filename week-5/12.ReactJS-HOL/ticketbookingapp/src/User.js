import React from "react";

function User(props) {

    return (
        <div>

            <h2>Welcome User</h2>

            <h3>Flight Details</h3>

            <p><b>Flight Name :</b> Air India</p>
            <p><b>Flight No :</b> AI202</p>
            <p><b>From :</b> Hyderabad</p>
            <p><b>To :</b> Delhi</p>

            <h3 style={{ color: "green" }}>
                Ticket Booking Available
            </h3>

            <button>
                Book Ticket
            </button>

            <br /><br />

            <button onClick={props.logout}>
                Logout
            </button>

        </div>
    );

}

export default User;