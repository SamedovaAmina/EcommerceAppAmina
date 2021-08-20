'use strict';

if(checkSecurity(sessionStorage.user)){
    let user = JSON.parse(sessionStorage.user);
    getElementBySelector('h1').innerText += ` -  ${user.name} ${user.surname}`;
    getElementBySelector('.email').innerText += ` ${user.email}`;
    getElementBySelector('.age').innerText += ` ${user.age}`;
} else{
    document.location.href = 'main.html';
}

function checkSecurity(key) {
    let isValid = false;
    if(!key)
        return isValid;

    if(key){
        isValid = true;

    }
    
    return isValid;
}

function getElementBySelector(selector) {
    if(!selector)
        return null;
    return document.querySelector(selector);
}

getElementBySelector('#logOut').addEventListener('click', () =>{
    delete sessionStorage.user;
    document.location.href = 'main.html';
});