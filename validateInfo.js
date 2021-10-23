export default function validateInfo(values){
    let errors = {}

    //username
    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    //Email
    if (!values.email) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is Invalid"
    }

    //password
    if (!values.password) {
        errors.password = "Password required"
    } else if (values.password.length < 6) {
        errors.password = "Password must be atleast 6 characters or more!!"
    }

    if (!values.password2) {
        errors.password2 = "Password required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match"
    }

    return errors;
}