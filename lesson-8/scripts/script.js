"use strict";

// OPTIONAL CHANING start //

let object = {
    title: "Dilshodbek Komilov",
    age: "23",
    brother: {
        name: "Sherzodbek",
        age: "20"
    },
    // numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

object.numbers?.forEach((el) => {
    const li = createElement('li', 'item', el);
    $('#list').appendChild(li)
})

// OPTIONAL CHANING end //



// ?? massege 

null ?? "ok"

"no" ?? "ok"

false ?? "ok"