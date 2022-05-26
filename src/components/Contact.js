import React, { useState } from 'react';
import '../styles/styles.css';
import Form from "./Form"

export default function Contact() {
    return (
        <div className="parentWrapper">
            <div>
                <h2>Contact Me</h2>
                <ul className='contactLinks'>
                    <li><a href="https://github.com/thenoiseinspace">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/sgilbreath/">LinkedIn</a></li>
                </ul>
            </div>
            <Form />
        </div>
    )
};



    // export default Form;
    

// export default Contact;

////////////////////////////////////////////////////

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

////////////////////////////////////////////////////

