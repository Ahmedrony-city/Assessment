export default function Validation(values) {

    const errors = {}

    if(!values.email) {
        errors.email = "Email is Required"
    } 
    else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Please enter a valid Email"
    }

    
    if(!values.password) {
        errors.password = "Password is Required"
    } 
    else if(values.password.length < 6) {
        errors.password = "Password need atleast 6 characters"
    } 
    else if(!/^(?=.*[A-Z])/.test(values.password)) {
        errors.password = "Missing Uppercase Character"
    } 
    else if(!/^(?=.*[a-z])/.test(values.password)) {
        errors.password = "Missing Lowercase Character"
    } 
    else if(!/^(?=.*[0-9])/.test(values.password)) {
        errors.password = "Missing Number"
    } 
    else if(!/^(?=.*[!@#\$%\^&\*])/.test(values.password)) {
        errors.password = "Missing Special Character"
    }

    return errors;
}