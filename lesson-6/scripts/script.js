"use strict";

// CALLBACK HELL FUNCTION start //

// function numbers() {
//     setTimeout(() => {
//         for(let i = 0; i < 500; i++) {
//             console.log("numbers");
//         }
//     }, 1000)
// }

// function letters() {
//     setTimeout(() => {
//         for(let i = 0; i < 500; i++) {
//             console.log("letter");
//         }
//     }, 1200)
// }

// function renderData(callBack1, callBack2) {

//     setTimeout( () => {
//         callBack2()
//         setTimeout( () => {
//             callBack1()
//             setTimeout( () => {
//                 console.log("renderDate");
//             }, 3000)
//         }, 2000)
//     }, 1000)
// }
// renderData(numbers, letters)

// CALLBACK HELL FUNCTION end //


// PROMISE start //

// const sendData = () => {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             let promiseSuccess = [{
//                 id: 1,
//                 user: "Dilshodbek"
//             }]

//             if (promiseSuccess.length) {
//                 resolve(promiseSuccess)
//             } else {
//                 reject("404 NOT FOUND")
//             }
//         }, 2000)
//     })
// }
// sendData()
// .then((resolve) => console.log(resolve))
// .catch((error) => console.log(error))
// .finally(() => console.log("end"))

// PROMISE end //

// SYNCHRONIZE //

// function add() {
//     for (let i = 0; i < 1000; i++) {
//         console.log("add");
//     }
// }
// add()

// console.log("tayyor");

// ASYNCHRONIZE //

// // 1.
// async function add() {
//     let limit = await 1000;
//     for (let i = 0; i < limit; i++) {
//         console.log("add");
//     }
// }
// add()

// console.log("tayyor");

// // 2.
// async function add() {
//     return await "lorem ipsum dolar sit";
// }

// add().then((resolve) => console.log(resolve))

// console.log("tayyor");

// // 3.
// async function add() {
//     const text = await "lorem ipsum dolar sit";
//     console.log(text);
// }
// add()

// console.log("tayyor");

// // 4.
// async function add() {
//     try {
//         const text = await "something something"
//         console.log(text);
//         console.log("text 1");
//         console.log(asdfghtgbfdvss);
//     } catch (error) {
//         console.log(`error: ${error}`);
//     }
// }
// add()


// FETCH METHOD start //




// FETCH METHOD end //

// API = APLICATION PROGRAMMING INTERFACE //

function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((data) => data.json())
        .then((result) => renderData(result));
}
getData()

function renderData(data = []) {
    data.length && data.forEach((el) => {
        const card = createElement('div', 'card p-5 mx-auto w-50 shadow mb-3', el.title);
        $('.wrapper').appendChild(card);
    })
}