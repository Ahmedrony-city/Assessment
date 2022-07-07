import React, { useState } from 'react'
import SignUpPad from './SignUpPad'
import SuccessPad from './SuccessPad'

const FormPad = () => {
    const [inputIsSubmit, setInputIsSubmit] = useState(false);

    const submitForm = () => {
        setInputIsSubmit(true);
    }

  return (
    <div>
        {!inputIsSubmit ? <SignUpPad submitForm={submitForm} /> : <SuccessPad />}       
    </div>
  )
}

export default FormPad