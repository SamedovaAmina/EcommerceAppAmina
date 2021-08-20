'use strict';

class Validator{
    isEmailValid(email = ''){
        let isValid = false;
        if(email.includes('@') && email.includes('.')){
            isValid = true;
        }
        return isValid;
    }
    isPasswordValid(password = '', min = 4, max = 8){
        let isValid = false;
        if(password.length >= min && password.length < max){
            isValid = true;
        }
        return isValid;
    }
}
let validator = new Validator();
getElementBySelector('#login-btn').addEventListener('click', (e) =>{
    e.preventDefault();
    let  
        email = getElementBySelector('#email').value,
        password = getElementBySelector('#password').value;


        let isValid = validator.isEmailValid(email) || validator.isPasswordValid(password, 6, 15)  ? true : false;
        if(isValid ){
            
                let data = JSON.parse(localStorage.database);

                if(hasUser(email, password, data)){
                let user = getUser(email, password, data);
                sessionStorage.user = JSON.stringify(user);
                document.location.href = 'user.html';
                } else{
                    alert('Email or password is wrong!');
                }
            }
});

getElementBySelector('#email').addEventListener('change', (e) => {
    if(!validator.isEmailValid(e.target.value)){
        getElementBySelector('.email-valid').innerText = 'Email is not valid!';
    } else{
        getElementBySelector('.email-valid').innerText = '';
    }
});
getElementBySelector('#password').addEventListener('change', (e) => {
    if(!validator.isPasswordValid(e.target.value, 6, 15)){
        getElementBySelector('.password-valid').innerText = 'Password is not valid!';
    } else{
        getElementBySelector('.password-valid').innerText = '';
    }
});


function getElementBySelector(selector) {
    if(!selector)
        return null;
    return document.querySelector(selector);
}


function hasUser(email, password, data) {
    
    let hasUser = false;
    if(!email || !password || !data)
        return hasUser;
    for (let user of data) {
        if(user.email == email && user.password == password){
            hasUser = true;
            break;        
        }
    }
    
    
    return hasUser;
};
function getUser(email, password, data) {
    let user = null;
    if(!email || !password || !data)
        return user;
    for (let u of data) {
        if(u.email == email && u.password == password){
            user = u;
            break;        
        }
    }
    
    
    return user;
}