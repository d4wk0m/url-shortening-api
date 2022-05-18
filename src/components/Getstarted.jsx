import React from 'react'

function Getstarted() {
    function getStarted(){
        document.getElementById("link").focus({preventScroll:true});
        window.scrollTo(0, document.getElementsByClassName("links")[0].offsetTop)
    }
    return (
        <section className='container-full get-started'>
            <h2>Boost your links today</h2>
            <button onClick={getStarted}>Get Started</button>
        </section>
    )
}

export default Getstarted