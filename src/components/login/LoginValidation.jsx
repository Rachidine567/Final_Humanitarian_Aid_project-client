function Validation(values) {
    let error = {}
    //const email_pattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

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
    else {
        error.password = ""
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