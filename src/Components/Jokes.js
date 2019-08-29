import React from 'react'
import Joke from './Joke'

function Jokes() {
    return(
        <div className="jokes">
            <h3 className="joketitle">Procrastinate a little before starting your todo's?</h3>
            <Joke/>
            <Joke/>
            <Joke/>
            <Joke/>
            <Joke/>
        </div>
    )
}

export default Jokes