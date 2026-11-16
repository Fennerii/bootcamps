//Event to the form
document.getElementById(`signUpForm`).addEventListener(`submit`, function(e){
    e.preventDefault()

    
    //createUser
    const user = {
        firstName: e.target.elements[`fname`].value,
        lastName: e.target.elements[`lname`].value,
        password: e.target.elements[`pswd`].value,
        confirmPassword: e.target.elements[`pswdconfirm`],
        phoneNumber: e.target.elements[`pnum`].value,
        email: e.target.elements[`email`].value,

    }
    console.log(user);
});
