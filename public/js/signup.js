const { response } = require("express");

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector().value.trim;
    const password = document.querySelector().value.trim;

    if (username && password) {
        const data = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            console.log('success');


        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler)