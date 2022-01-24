import React, { useState } from "react"





function Feedback(){
    const [countHyvä, setCountHyvä] = useState(0);
    const [countNeu, setCountNeu] = useState(0);
    const [countHuo, setCountHuo] = useState(0);

    const allVote = countHyvä + countNeu + countHuo;
    const Keskiarvo = ((countHyvä - countHuo) / allVote).toFixed(1);
    const positiivisia = (countHyvä / allVote * 100).toFixed(1);

    return(
        <div>
                <h1>anna palautetta</h1>
                <button onClick={() => setCountHyvä(countHyvä+1)}>hyvä</button>
                <button onClick={() => setCountNeu(countNeu+1)}>neutraali</button>
                <button onClick={() => setCountHuo(countHuo+1)}>huono</button>
                
                <h1>statistiikka</h1>
                <h2>hyvä {countHyvä}</h2>
                <h2>neutraali {countNeu}</h2>
                <h2>huono {countHuo}</h2>
                <h2>keskiarvo {Keskiarvo}</h2>
                <h2>positiivisia {positiivisia}</h2>
        </div>
    )
}

export default Feedback