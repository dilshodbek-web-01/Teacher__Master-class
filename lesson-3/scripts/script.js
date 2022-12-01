"use strict";

// EVENT DELEGATION FUNCTIONS start //

$('.wrapper').addEventListener('click', (e) => {

    // if (e.target.textContent === "box-6") {
    //     console.log(e.target.textContent);
    // }

    if (e.target.classList.contains("cards")) {
        console.log(e.target.textContent);
    }
})

const box = createElement('div', 'box cards p-5 m-1 bg-success text-white', 'box-6')

$('.wrapper').appendChild(box);

// EVENT DELEGATION FUNCTIONS end //


// ---------------- LOCALSTORAGE -------------- //

// setItem, getItem, removeItem, clear

localStorage.setItem('login', "login-12345");
localStorage.setItem('password', "adminadmin1111");

$('.btn-primary').addEventListener('click', () => {
    let userLogin=localStorage.getItem("login");
    let userPassword=localStorage.getItem('password');


    console.log(userLogin);
    $(".text-center").textContent=userLogin;
    $(".text-info").textContent=userPassword;

})

$(".btn-warning").addEventListener('click', () => {
    localStorage.removeItem('login');
})

$(".btn-secondary").addEventListener('click', () => {
    localStorage.removeItem('password');
})

$(".btn-danger").addEventListener('click', () => {
    localStorage.clear();
    $('.text-info').dataset.btn="ok"
})



