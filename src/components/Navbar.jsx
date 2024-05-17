import React from "react"
import '../index.css'
import icon from "../assets/images/Fill 213.png"

function Navbar() {
    return (
        <nav>
            <img src={icon} alt="Earth icon" />
            <h2>My Travel Journal</h2>
        </nav>
    )
}

export default Navbar
