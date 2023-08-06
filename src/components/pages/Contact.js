import React from 'react';
import { useState } from 'react';

export default function Contact() {
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);
    
        if (!value) {
          setInputError('All fields must be completed.');
        } else {
          setInputError(null);
        }
      }

    function handleSubmit(event) {
        event.preventDefault();
        if (!inputValue) {
        // submit form
        } else {
        setInputError('All fields must be completed.');
        }
    }
    
  return (
    <main>
        <section>
            <h1 class="fadein-f" id="contact">Contact</h1>
            <div class="container fadein-s">
            <form onSubmit={handleSubmit}>
            
                <label for="name">Name</label>
                <input 
                    type="text" 
                    id="input-name" 
                    name="name" 
                    placeholder="Your first name.."
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>

                <label for="email">Email</label>
                <input 
                    type="text" 
                    id="input-email" 
                    name="email" 
                    placeholder="Your email.."
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>

                <label for="email">Subject</label>
                <input 
                    type="text" 
                    id="input-subject" 
                    name="subject" 
                    placeholder="Write your query..."
                    style={{height: '200px'}}
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>

                {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
                {/* <input type="submit" value="Submit"></input> */}
                <button type="button" value="Submit">
                    Submit
                </button>
            
            </form>
            </div>
        </section>
    </main>
  );
}
