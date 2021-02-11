function sayHello(name) {
    if (typeof name === 'undefined') {
        name = 'World';
    }
    console.log(`Hello ${name}!`);
}
sayHello('Julie');

setTimeout(function() {
    sayHello('Adam')
}, 2000);


function getWords(word) {
    console.log(`The word of the day is ${word}!`);
}
getWords('perfect');

setTimeout(function() {
    getWords('beautiful')
}, 3000);

setTimeout(function() {
    getWords('fantastic')
}, 5000);

setTimeout(function() {
    getWords('marvelous')
}, 6000);

function done(last) {
    console.log("Job's done!");
}
done();


const countDown = (num, callback) => {
    setTimeout(() => {
        if(num > 0) {
        console.log(num);
        countDown(num-1, callback);
    } else {
        callback();
    }
},1000)
};

const isDone = () => {
    console.log('This is done');
}
countDown(5, isDone);


//var lunchTime = false;

// const orderMeSomeFood = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (lunchTime === true) {
//                 resolve();
//             }
//             else {
//                 reject({status: 404},);
//             }
//         }, 3000);
//     });
// };
// orderMeSomeFood()
//     .then(() => {
//         console.log('My favorite lunch is spaghetti!');
//     })
//     .catch((res) => {
//         console.log(res.status);
//         console.log('No Food!');
//     });


var lunchTime = false;

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lunchTime === true) {
                resolve('My favorite lunch is Spaghetti');
        } else {
            reject('Ugh! Wrong order');
        }
    }, 1000);
}); 
};
orderMeSomeFood()
.then((response) => {
    console.log(response);
})
//orderMeSomeFood()
.catch((err) => {
    console.log(err);
});
