import React, {useState} from 'react';
//import { useState } from 'react/cjs/react.development'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/index.jpg" alt="spaceship" className="form-img"></img>
            </div>
            {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
        </div>
           
        </>
    );
};

export default Form;
