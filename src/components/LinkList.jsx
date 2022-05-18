import React, { useEffect } from 'react'

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

  useEffect(() => {
    document.querySelectorAll('.button-copy').forEach((item) => {
      item.classList.remove('blocked')
    })
    document.querySelectorAll('.new-link').forEach((item) => {
      item.classList.remove('blocked-link')
    })
    for (let i = 0; i < links.length; i++){
      if (links[i].new === "Wrong/Blocked Url"){
        console.log('Bad')
        document.getElementById("button-"+(i+1)).classList.add('blocked')
        document.getElementById("new-link-"+(i+1)).classList.add('blocked-link')
      }
      console.log(links[i])
    }
  })

  return (
    <div className="shortened-wrapper">
        {links.map(link => (
        <div className="link" key={link.key}>
            <h3 className={"new-link"} id={"new-link-"+link.key}>
                { link.new }
            </h3>
            <span className="line"></span>
            <h4>
              { link.old }
            </h4>
            <div className="button-container">
              <button className='button-copy' id={"button-"+link.key} onClick={(e) => copyLink(link.new, e)}>Copy</button>
            </div>
        </div>
      ))} 
    </div>
  )
}

export default LinkList