// Find 'speak to an expert' button
document.getElementById('expert').addEventListener('click', openContactForm);
console.log('works');

// opens new tab with contact form
function openContactForm(){
    window.open("public/form.html");
}

// find 'learn more' button
document.getElementById('learn').addEventListener('click', showMore);
console.log('learnmore');

// increases paragraph 'ui' height making ir readable
function showMore(){
    // document.getElementById('panel').style.visibility= 'visible';
    // document.getElementById('panel').style.height='150px';
    document.getElementById('panel').style.display="block";
}