import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>This is the Contact page</h1>
            <Link to="/home">  HOME PAGE   </Link>
            <Link to="/about"> ABOUT PAGE   </Link>
        </div>
    )
}

export default Contact;