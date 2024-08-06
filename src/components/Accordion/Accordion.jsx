import "./Accordion.css"
import React, { useEffect, useRef, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function Accordion({ title, color, borderColor, details }) {

    const accordionContainer = useRef(null)

    const [isItOpen, setIsItOpen] = useState(false)

    useEffect(() => {
        if (isItOpen) {
            accordionContainer.current.classList.remove("not-active")
        } else {
            accordionContainer.current.classList.add('not-active')
        }
    }, [isItOpen])

    return (
        <div ref={accordionContainer} className="accordion-container not-active" style={{ '--accordion-bg-color': color, "--accordion-border-color": borderColor }}>
            <div className="header-part">
                <h2>{title}</h2>
                {!isItOpen ? <FaPlus onClick={() => setIsItOpen(true)} style={{ '--accordion-border-color': borderColor }} className="icon" /> : <FaMinus onClick={() => setIsItOpen(false)} style={{ '--accordion-border-color': borderColor }} className="icon" />}
            </div>
            <div className="moving-part">
                <h6>{details}</h6>
            </div>
        </div>
    )
}

export default Accordion