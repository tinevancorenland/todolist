import React from 'react'
import Joke from './Joke'
import jokeData from './jokeData'

function Jokes() {

    console.log(jokeData);

    const JokeComponent = jokeData.map(joke =>
            <Joke key={joke.id} question={joke.question} answer={joke.answer} />)

    return(
        <div className="jokes">
            <h3 className="joketitle">Procrastinate a little before starting your todo's?</h3>
            {JokeComponent}
        </div>
    )
}

export default Jokes