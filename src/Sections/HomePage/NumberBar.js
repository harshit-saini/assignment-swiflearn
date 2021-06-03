import React, { useRef, useEffect } from 'react'

import { classes } from "../../data/classes";



const NumberBar = () => {

  const classContainer = useRef();

  const handleClassClick = (event) => {

    if (!event.target.getAttribute("data-class")) return;

    [...classContainer.current.children].forEach(c => {
      c.classList.remove("active")
    })

    event.target.classList.add("active")



  }

  useEffect(() => {
    classContainer.current.firstElementChild.classList.add("active")

  }, [])

  return (
    <div className="number-bar">
      <div className="text-b" onClick={handleClassClick} ref={classContainer}>
        {
          classes.map(c => (
            <span data-class={c.class} key={c.class} >{c.class}</span>
          ))
        }
      </div>
    </div >
  )
}

export default NumberBar
