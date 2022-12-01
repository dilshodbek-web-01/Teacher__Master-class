"use strict";

// 1. Destructuring

// 1.1 let array = ['c++', "javascript", "java", 'php'];

// let [first, second, third] = ['c++', "javascript", "java", 'php'];

// console.log(first);
// console.log(second);
// console.log(third);

// 1.2 const person = {
//     isName: "Ismoil",
//     age: 20,
//     job: "Programmer",
//     hobbies: ['coding', 'sleeping', 'watching cartoons']
// }

// let {isName, hobbies} = person;

// console.log(isName);
// console.log(hobbies);

// 1.3 const person = {
//     isName: "Ismoil",
//     age: 20,
//     job: "Programmer",
//     hobbies: ['coding', 'sleeping', 'watching cartoons'],
//     programming: {
//         frondend: {
//             html: {
//                 isName: "HTML"
//             },
//             css: {
//                 isName: "CSS"
//             },
//             js: {
//                 isName: "JAVASCRIPT"
//             }
//         }
//     }
// }

// console.log(person.programming.frondend.html.isName);

// let { programming: { frondend: { html: { isName } } } } = person;

// console.log(isName);



//  2. Rest operator

// Rest arrayni ichidagi elementlarni guruhlab alohida qilib yig`ib beradi va (hardoim ohirida keladi).

// 2.1 let array = ['c++', "javascript", "java", 'php'];

// let [c, ...data] = array;

// console.log(array);
// console.log(data);


// 2.2 let [...all] = ['c++', "javascript", "java", 'php'];

// console.log(all);

// 2.3 let [first, ...all] = ['c++', "javascript", "java", 'php'];

// console.log(first);
// console.log(all);



// spread operator

// (nusxalab) yoyib (qo`yib) beradi, boshidan va oxiridan element qo`shsa bo`ladi (ixtiyoriy yerda keladi).

// let array = ['c++', "javascript", "java", 'php'];

// const newArray = ["go", ...array, ".NET"];

// console.log(newArray);



// 3. SHALLOW COPY (clone) 

// sayoz nusxalab olish (copy qilinganga element qo`shilsa originalga ham o`sha element qo`shiladi.)

// 3.1 let array = ['Uzbekistan', "Turkey", "Afganistan", "USA", "Poland"];

// let country = array;

// country.push("Canada")

// console.log("original:", array);
// console.log("copy:", country);


// 3.2 const room = {
//     isName: "Osmondagi bolalar",
//     branch: "Xadra",
//     type: "Large"
// }

// const newRoom = room;

// newRoom.color="orange";

// console.log("original:", room);
// console.log("copy:", newRoom);



// DEEP COPY (clone)

// chuqur copy qilish (copy qilinganga o`zgartirish kiritilsa originalga ta`sir qilmaydi.)

// 1. let array = ['Uzbekistan', "Turkey", "Afganistan", "USA", "Poland"];

// let country = [];

// for(let i = 0; i < array.length; i++) {
//     country.push(array[i]);
// }

// country.push("Canada")

// console.log("original:", array);
// console.log("copy:", country);


// 2. let array = ['Uzbekistan', "Turkey", "Afganistan", "USA", "Poland"];

// let country = [];

// array.forEach((e) => {
//     country.push(e)
// })

// country.push("Canada")

// console.log("original:", array);
// console.log("copy:", country);


// 3. let array = ['Uzbekistan', "Turkey", "Afganistan", "USA", "Poland"];

// let country = array.map((e) => {
//     return e
// })

// country.push("Canada")

// console.log("original:", array);
// console.log("copy:", country);



// const room = {
//     isName: "Osmondagi bolalar",
//     branch: "Xadra",
//     type: "Large"
// }

// // const newRoom = Object.assign( {}, room )  // deep copy v1

// // const newRoom = {...room, isName: "Tesla", isOpen: false}   // deep copy v2

// newRoom.color="orange";

// console.log("original:", room);
// console.log("copy:", newRoom);



// const room = {
//     isName: "Osmondagi bolalar",
//     branch: "Xadra",
//     type: "Large"
// }

// // const objectToJson = JSON.stringify(room);  // objectdan JSON formatga o`tish. versiya-3
// // const jsonToObject = JSON.parse(objectToJson);  // JSON formatdan objectga o`tish. versiya-3
// // jsonToObject.status="is active";
// // console.log("original", room);
// // console.log("copy", jsonToObject);

// const newRoom = JSON.parse(JSON.stringify(room)) // deep copy versiya-3 
// newRoom.status="is active";

// console.log("original", room);
// console.log("copy", newRoom);











