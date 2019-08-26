// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBElIzZCf8xVutODbNES8Ulbnsa3UN1iW4",
//     authDomain: "brookshirepmp.firebaseapp.com",
//     databaseURL: "https://brookshirepmp.firebaseio.com",
//     projectId: "brookshirepmp",
//     storageBucket: "",
//     messagingSenderId: "510835145695",
//     appId: "1:510835145695:web:6b23fdbd46929416"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBElIzZCf8xVutODbNES8Ulbnsa3UN1iW4',
    authDomain: "brookshirepmp.firebaseapp.com",
    projectId: "brookshirepmp"
  });
  
  var db = firebase.firestore();


// submit button event listener
document.getElementById('contactForm').addEventListener('submit', submitForm);

// get form input values
function getInputValues(id) {
    return document.getElementById(id).value;
}

// submit form
function submitForm(e) {
    // prevents form values from being returned to the html
    e.preventDefault();

        // create variables for all input values
        var name = getInputValues('name');
        var company = getInputValues('company');
        var email = getInputValues('email');
        var phone = getInputValues('phone');
        var message = getInputValues('message');

    // save message    
    saveMessage (name, company, email, phone, message);
}
    var messages = saveMessage;


// save messages to firebase
// function saveMessage(name, company, email, phone, message) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         name: name,
//         company: company,
//         email: email,
//         phone: phone,
//         message: message

//     })
// }
db.collection("messages").add({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});test.firestore.js