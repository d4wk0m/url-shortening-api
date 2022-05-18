import React, { useEffect, useRef, useState } from 'react'
import { useShortcode } from '../context/ShortcodeContext';
import hero from '../images/illustration-working.svg'
import LinkList from './LinkList';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Hero() {
    const destinationRef = useRef()
    const { getUrl } = useShortcode(); 
    const [short, setShort] = useState([])
    const [inputError, setInputError] = useState('')

    useEffect(() => {
        if (cookies.get('history')){
            setShort(cookies.get('history'))
        }
        console.log('wut')
    }, [])

    async function getLink(e){
        if (isValidHttpUrl(destinationRef.current.value)){
            document.getElementById('form_input_container').classList.remove('error')
            setInputError('')
            e.preventDefault()
            
            var key = 99;
            let newLink = {new: await getUrl(destinationRef.current.value), old: destinationRef.current.value, key: key};
            let a = [...short]
            if (short.length < 5){
                a.unshift(newLink)
                for (let i = 0; i < a.length; i++){
                    console.log(i)
                    a.at(i).key = i + 1
                    key = a.at(-1).key + 1
                }
                cookies.set('history', a, {
                    sameSite: 'lax',
                    secure: true
                })
                setShort(a)
            }
            else {
                a.unshift(newLink)
                a.pop()
                for (let i = 0; i < a.length; i++){
                    a.at(i).key = i + 1
                    key = a.at(-1).key + 1
                }
                cookies.set('history', a, {
                    sameSite:"lax",
                })
                setShort(a)
            }
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
        document.getElementById("link").focus({preventScroll:true});
        window.scrollTo(0, document.getElementsByClassName("links")[0].offsetTop)
    }

    useEffect(() => {
        // cookies.set('history', short)
        console.log(cookies.get('history'))
    }, [short])

    return (
        <section className='hero-wrapper'>
            <div className="container-sm container_hero">
                <div className="image-wrapper">
                    <img src={hero} alt="" width={"100%"} />
                </div>
                <div>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <div className="button-wrapper"><button onClick={getStarted}>Get Started</button></div>
                </div>
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