'use srict';


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
}
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
    class Person{
        constructor(name, surname, birthYear, email, password){
            this.name = name;
            this.surname = surname;
            this.birthYear = birthYear;
            this.email = email;
            this.password = password;
            this.age = this.getAge();          
        }
        getAge(){
            return new Date().getFullYear() - this.birthYear;
        }
    }

    let validator = new Validator();
    getElementBySelector('#register-btn').addEventListener('click', (e) =>{
        e.preventDefault();
        let  
        email = getElementBySelector('#email').value,
        password = getElementBySelector('#password').value,
        name = getElementBySelector('#name').value,
        surname = getElementBySelector('#surname').value,
        birthYear = getElementBySelector('#birthyear').value;

        let isValid = validator.isEmailValid(email) || validator.isPasswordValid(password, 6, 15)  ? true : false;
        if(isValid ){
            let data = localStorage.database ? JSON.parse(localStorage.database) : null;
        if (!userExists(email, data)) {
            let user = new Person(name, surname, birthYear, email, password);
            if(localStorage.database){
                
                data.push(user);
                localStorage.database = JSON.stringify(data);
            } else{
                let array = [];
                array.push(user);
                localStorage.database = JSON.stringify(array);
            }

            alert('You successfully registered!');
            } else{
                alert('User with this email already exists!');
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

function userExists(email, data) {
    let hasUser = false;
    if(!email || !data)
        return hasUser;

    
    
    for (let user of data) {
        if(user.email == email){
            hasUser = true;
            break;        
        }
    }
    
    
    return hasUser;
}