import React from 'react';


function Greeting() {
    const name = 'Tine Vancorenland'
    const date = new Date()

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const hours = date.getHours()
    let timeOfDay

    if(hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div className="greeting">
            <h2>Good {timeOfDay}, {name}</h2>
            <p>It is {months[date.getMonth()]}, {date.getDate()} of {date.getFullYear()}: a fine day for learning. </p>
        </div>
    );
}

export default Greeting;
