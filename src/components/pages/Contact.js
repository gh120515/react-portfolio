import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

export default function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setSubject(inputValue);
        }
      };

    const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    
    
    if (!name) {
      setErrorMessage('Please enter your name.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!validateEmail(email)) {
        setErrorMessage('Email is not entered or invalid.');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      }
    if (!subject) {
        setErrorMessage('Please enter your query.');
      return;
    }

    // If everything goes according to plan, we want to clear out the input & error message (if any) after a successful registration.
    setName('');
    setEmail('');
    setSubject('');
    setErrorMessage('');
  };
    
  return (
    <main>
        <section>
            <h1 class="fadein-f" id="contact">Contact</h1>
            <div class="container fadein-s">
            <form>
            
                <label for="name">Name</label>
                <input 
                    type="text" 
                    id="input-name" 
                    name="name" 
                    placeholder="Your name..."
                    value={name}
                    onChange={handleInputChange}
                ></input>

                <label for="email">Email</label>
                <input 
                    type="text" 
                    id="input-email" 
                    name="email" 
                    placeholder="Your email..."
                    value={email}
                    onChange={handleInputChange}
                ></input>

                <label for="email">Subject</label>
                <input 
                    type="text" 
                    id="input-subject" 
                    name="subject" 
                    placeholder="Write your query..."
                    style={{height: '200px'}}
                    value={subject}
                    onChange={handleInputChange}
                ></input>

                {/* <input type="submit" value="Submit"></input> */}
                <button type="button" className="submit-btn"value="Submit" onClick={handleFormSubmit}>
                    Submit
                </button>

                {errorMessage && (
                    <div>
                    <p className="error-text" style={{ color: 'red' }}>{errorMessage}</p>
                    </div>
                )}

            </form>
            </div>
        </section>
    </main>
  );
}
