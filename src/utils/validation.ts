import { detectSpacesRegex , passwordRegex, mobilenoRegex, emailRegex } from "./regex"

const validationStrings = {
    usernameRequired : 'Username is Required',
    passwordRequired : 'Password is Required',
    fullNameRequired : 'Name is Required',
    emailRequired : 'Email is Required',
    mobileNoRequired : 'Mobile no is Required',
    invalidUsername : 'Invalid Username',
    invalidpassword : 'Invalid Password',
    invalidMobileNo : 'Invalid Mobile Number',
    invalidEmail : 'Invalid Email'
}


export const emailRequired = (value:any) => value? undefined : validationStrings.emailRequired

export const passwordRequired = (value:any) => value? undefined : validationStrings.passwordRequired

export const mobileNoRequired = (value:any) => value? undefined : validationStrings.mobileNoRequired

export const usernameRequired = (value:any) => value? undefined : validationStrings.usernameRequired

export const fullnameRequired = (value:any) => value? undefined : validationStrings.fullNameRequired

export const removeSpaces = (term:any) => term.replace(detectSpacesRegex, '')

    
export const validateMobileno = (value:any) => 
    value && !value.match(mobilenoRegex)
    ? validationStrings.invalidMobileNo
    : undefined

export const validateEmail = (value:any) => 
    value && !value.match(emailRegex)
    ? validationStrings.invalidEmail
    : undefined

export const validatePassword = (value:any) => 
    value && !value.match(passwordRegex)
    ? validationStrings.invalidpassword
    : undefined