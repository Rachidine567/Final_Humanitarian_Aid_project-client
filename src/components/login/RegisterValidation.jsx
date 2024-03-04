function Validation(values) {
    let error = {}
    //const email_pattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/



    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }


    if(values.email === "") {
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Invalid email format"
    }else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    }else if (values.confirm_password !== values.password){
        error.confirm_password = "Confirm password does not match"
    }
  
   
    // Validate the "Remember me" checkbox
    if (typeof values.remember !== "boolean") {
        error.remember = "Remember me should be a boolean value"
    } else {
        error.remember = ""
    }

    return error;
}
export default Validation;