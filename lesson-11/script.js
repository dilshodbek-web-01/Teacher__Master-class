"use strict";

// const lang = ['javaScript', 'java', 'php', 'pyhton', 'ruby', 'c++'];

// console.log(lang);

// for(let i = 0; i < lang.length; i++) {
//     console.log(lang[i]);
//     console.log(i);
// }

// lang.forEach((elements, index, Array) => {
//     if(index%2==0){
//         console.log(elements);
//     }
// })

// lang.forEach((el, index, Array) => {
//     const div = document.createElement('div');                                                                    
//     div.classList.add('cards', 'p-3', 'shadow', 'm-5');
//     div.innerHTML = `<p class="some"> something </p>`;
//     $('.wrapper').append(div)
// })

pokemons.forEach((e) => {
    const card = createElement('div', 'card bg-warning shadow m-2', `

    <img src="${e.img}" alt="rasm" class="card-img">
    <div class="card-body">
        <h4 class="card-title card-name">
            ${e.name}
        </h4>
        <ul class="card-list">
            <li>list-1</li>
            <li>list-2</li>
            <li>list-3</li>
            <li>list-4</li>
        </ul>
    </div>

    `)
    $('.wrapper').appendChild(card);
})



const lang = ['javascript', 'java', 'php', 'pyhton', 'ruby', 'c++'];

let newLang1 = [];

lang.forEach((e, i) => {

    if (i % 2 == 0) {

        newLang1.push(e)
    }
})

const newLang2 = lang.map((e, i) => {

    if (i % 2 == 0) {
        return e
    }
})


const newLang3 = lang.filter((e, i) => {

    return e !== 'javascript'
})

console.log(newLang1, newLang2, newLang3);
