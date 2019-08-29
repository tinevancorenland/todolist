import React from 'react'

function Joke(props) {
    return(
        <div className="joke">
            <p className="question">{props.question}</p>
            <p className="answer">{props.answer}</p>
        </div>
    )
}

export default Joke