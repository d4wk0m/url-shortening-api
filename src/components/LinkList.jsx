import React from 'react'

function LinkList( { links } ) {
  function copyLink(link, e) {
    navigator.clipboard.writeText(link);
    document.querySelectorAll('.copy-active').forEach((item) => {
      item.classList.remove('copy-active')
      item.innerText = "Copy"
    })
    e.target.classList.add('copy-active')
    e.target.innerText = "Copied!"
    window.setTimeout(() => {
      e.target.classList.remove('copy-active')
      e.target.innerText = "Copy"
    }, 1000)
  }
  return (
    <div className="shortened-wrapper">
        {links.map(link => (
        <div className="link" key={link.key}>
            <h3>
                { link.new }
            </h3>
            <span className="line"></span>
            <h4>
              { link.old }
            </h4>
            <div className="button-container">
              <button onClick={(e) => copyLink(link.new, e)}>Copy</button>
            </div>
        </div>
      ))} 
    </div>
  )
}

export default LinkList