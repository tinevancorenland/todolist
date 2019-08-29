import React from 'react';


function Greeting() {
    const name = 'Tine Vancorenland'
    const date = new Date()

    return (
        <div>
            <p>Hello {name}</p>
            <p>It is {date.getDate()} to the {date.getMonth()} of {date.getFullYear()}, a fine day for learning. </p>
        </div>
    );
}

export default Greeting;
