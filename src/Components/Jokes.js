import React from 'react'
import Joke from './Joke'

function Jokes() {

    return(
        <div className="jokes">
            <h3 className="joketitle">Procrastinate a little before starting your todo's?</h3>
            <Joke 
                question="Why do bees have sticky hair?" 
                answer="Because they use honeycombs."
            />
            <Joke 
                question="What do you call a dog with no legs?" 
                answer="It doesn't matter what you call him, he isn't coming. "
            />
            <Joke 
                question="What's blue and tastes like red paint?" 
                answer="Blue paint"
            />
            <Joke 
                question="What do you call a rooster staring at a pile of lettuce?" 
                answer="A chicken sees a salad"
            />
            <Joke 
                question="Thanks for reading this" 
                answer="nice ass"
            />
        </div>
    )
}

export default Jokes