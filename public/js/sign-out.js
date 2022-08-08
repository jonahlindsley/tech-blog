const { json } = require("express");

async function logOutforum(event){
event.preventDefault();

    const response = await fetch('/api/users/logout', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok){
        document.location.replace('/')
    }else{
        alert(response.statusText)
    }

}
document.querySelector('#logout').addEventListener('click', logOutforum)
