import React from 'react'

function Getstarted() {
    function getStarted(){
        document.getElementById("link").focus();
    }
    return (
        <section className='container-full get-started'>
            <h2>Boost your links today</h2>
            <button onClick={getStarted}>Get Started</button>
        </section>
    )
}

export default Getstarted