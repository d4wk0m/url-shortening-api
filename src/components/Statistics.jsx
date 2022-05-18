import React from 'react'
import recognition from '../images/icon-brand-recognition.svg'
import records from '../images/icon-detailed-records.svg'
import customizable from '../images/icon-fully-customizable.svg'

function Statistics() {
  return (
    <section className='statistics-wrapper'>
        <div className="container-sm">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="cards">
                <div className="card">
                    <div className="card-icon">
                        <img src={recognition} alt="" />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={records} alt="" />
                    </div>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={customizable} alt="" />
                    </div>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                    </p>
                </div>
                <span className='accent-line'></span>
            </div>
        </div>
    </section>
  )
}

export default Statistics