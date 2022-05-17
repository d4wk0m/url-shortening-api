import React, { useEffect, useRef, useState } from 'react'
import { useShortcode } from '../context/ShortcodeContext';
import hero from '../images/illustration-working.svg'
import LinkList from './LinkList';

function Hero() {
    const destinationRef = useRef()
    const { getUrl } = useShortcode(); 
    const [short, setShort] = useState([])
    const [inputError, setInputError] = useState('')

    async function getLink(e){
        if (isValidHttpUrl(destinationRef.current.value)){
            document.getElementById('form_input_container').classList.remove('error')
            setInputError('')
            e.preventDefault()
            let key = short.length + 1
            let newLink = {new: await getUrl(destinationRef.current.value), old: destinationRef.current.value, key: key};
            let a = [...short]
            a.push(newLink)
            setShort(a)
        }
        else if (destinationRef.current.value){
            setInputError('Wrong/Broken link')
            document.getElementById('form_input_container').classList.add('error')
            return
        }
        else{
            setInputError('Please add a link')
            document.getElementById('form_input_container').classList.add('error')
            return
        }
    }

    function isValidHttpUrl(s) {
        let url;
        try {
          url = new URL(s);
        } catch (e) { return false; }
        return /https?/.test(url.protocol);
      }

    function getStarted(){
        document.getElementById("link").focus();
    }

    return (
        <section className='hero-wrapper'>
            <div className="container-sm">
                <img src={hero} alt="" width={"100%"} />
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                <div className="button-wrapper"><button onClick={getStarted}>Get Started</button></div>
            </div>
            <div className="links container-sm">
                <div className='form' role="form">
                    <div id="form_input_container" className='relative'>
                        <input type="url" name="link" id="link" ref={destinationRef} placeholder='Shorten a link here...' required />
                        {inputError && <p>{inputError}</p>}
                    </div>
                    <button type="submit" onClick={ getLink }>Shorten It!</button>
                </div>    
                {short && <LinkList links={ short }/>}
                <div className="background"></div>
            </div>
        </section>
    )
}

export default Hero