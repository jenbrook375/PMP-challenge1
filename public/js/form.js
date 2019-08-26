// submit button event listener
document.getElementById('contactForm').addEventListener('submit', submitForm);



function submitForm(e) {
    // prevents form values from being returned to the html
    e.preventDefault();

    // create variables for all input values
    var name = getInputValues('name');
    var company = getInputValues('company');
    var email = getInputValues('email');
    var phone = getInputValues('phone');
    var message = getInputValues('message');
    console.log(name);
}

// get form input values
function getInputValues(id) {
    return document.getElementById(id).value;
}