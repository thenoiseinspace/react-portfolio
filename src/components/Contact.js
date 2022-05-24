import React, { useState } from 'react';
import '../styles/styles.css';

const Contact = () => {
    return (
        <div className="parentWrapper">
            <div>
                <h2>Contact Me</h2>
                <ul>
                    <li><a href="https://github.com/thenoiseinspace">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/sgilbreath/">LinkedIn</a></li>
                </ul>
            </div>

        </div>
    )
};


function Form() {
      // Here we set two state variables for firstName and lastName using `useState`
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [emailSubmission, setEmailSubmission] = useState('');
      const [messageSubmission, setMessageSubmission] = useState('');
    
      const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'firstName' ? setFirstName(value) : setLastName(value);
      };
    
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
      };
    
      return (
        <div>
          <p>
            Hello {firstName} {lastName}
          </p>
          <form className="form">
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={emailSubmission}
              name="emailSubmission"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
            />
            <input
              value={messageSubmission}
              name="messageSubmission"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      );
    }
    
    export default Form;
    

// export default Contact;

////////////////////////////////////////////////////

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

////////////////////////////////////////////////////

