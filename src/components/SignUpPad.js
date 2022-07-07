import React, { useEffect, useState } from 'react'
import Validation from './Validation';

const SignUpPad = ({submitForm}) => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitBtn = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
           submitForm(true); 
        }
    }, [errors]);

  return (
    <div className='container'>
        <div>
            <div className='title-container'>
                <h3> Input Your Email and Password </h3>
            </div>
            <form>
                <div className='input-container'>
                    <label> Email </label>
                    <input type="email" 
                    name="email" 
                    placeholder='Email' 
                    value={values.email} 
                    onChange={handleChange}></input>
                    {errors.email && <p className='err-text'>{errors.email}</p>}
                </div>

                <div className='input-container'>
                    <p className='pass-text'>Password required minimum 6 characters, 
                    atleast 1 uppercase character, 
                    atleast 1 lowercase character, 
                    atleast 1 number and 
                    atleast 1 special character. </p>
                    <label> Password </label>
                    <input type="password" 
                    name="password" 
                    placeholder='Password' 
                    value={values.password} 
                    onChange={handleChange}></input>
                    {errors.password && <p className='err-text'>{errors.password}</p>}
                </div>
                <div className='input-container'>
                    <button onClick={handleSubmitBtn}> Submit </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpPad