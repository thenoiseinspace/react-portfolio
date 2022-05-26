import React, { useState } from 'react';
import '../styles/styles.css';


export default function Form () {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailSubmission, setEmailSubmission] = useState('');
    const [messageSubmission, setMessageSubmission] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = e.target;
    //   console.log(e.target)
  
      switch(name) {
        case "firstName":
            setFirstName(value)
          break;
        case "lastName":
            setLastName(value)
          break;
        case "emailSubmission":
            setEmailSubmission(value)
          break;
        case "messageSubmission":
            setMessageSubmission(value)
          break;
        default:
      }

    return null; 
    };

  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();


        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
        if (!pattern.test(emailSubmission)) {
            document.getElementById("errors").style="display: block"
      } else {
        document.getElementById("errors").style="display: none"
      }

    };
  
    return (
      <div>
        <p>
          Get in touch: 
        </p>
        <form className="form">
          <input
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <br></br>
          <input
            value={lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <br></br>
          <input
            value={emailSubmission}
            name="emailSubmission"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <br></br>
          <div id="errors">
            <p>Invalid email</p>
          </div>
          <input
            value={messageSubmission}
            name="messageSubmission"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
          <br></br>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  