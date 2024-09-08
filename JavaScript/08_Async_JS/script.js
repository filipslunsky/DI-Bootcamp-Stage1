// setTimeout(() => {
//     console.log('hi after 2 sec');
// }, 1000 *2);


// // callback
// function myCallback() {
//     console.log('my callback executed');
// }

// function exeCallback(func) {
//     func()
// }

// exeCallback(myCallback); //no parentheses for the callback, just the name

// function getX() {
//     setTimeout(() => {
//         myCallback(5);
//     }, 3 * 1000);
// }

// function getXY() {
//     getX((x) => console.log('x from callback=>', x));
// }

// getXY()

// sicne the callbacks are too complicated to keep track of, there exist promises
// PROMISES
    // pending
    // fulfilled -> resolve
    // fulfilled -> rejected
// - promises don't have timer, they just keep waiting

// let promise1 = new Promise ((resolve, reject) => {

//    })

let p = new Promise((res, rej) => {
    setTimeout(() => {
        rej(5);
    }, 4 * 1000) // if a promise is rejected, it throws an error
});

console.log(p);

p.then(item => {
    console.log(item);
}).catch((err) => {
    console.log('err =>' ,err)
});

function getX() {
    return new Promise((res) => {
        setTimeout(()=> {
            res(5);
        }, 2000);
    });
}

function getY() {
    return new Promise((res) => {
        setTimeout(()=> {
            res(6);
        }, 3000);
    });
}

getX().then((x) => {
    getY().then((y) => {
        console.log(x + y);
    });
});

const flip = () => {
    const coin = Math.floor(Math.random() *2);
    return coin === 0 ? "head" : "tail";
};

const flipcoin = new Promise((res, rej) => {
    setTimeout(()=>{
        const result = flip();
        if (result === "head") {
            res("you win => " + result);
        } else {
            rej("you lose => " + result);
        }
    }, 2000);
});

flipcoin
.then(result => { // works a little bit like try/catch
    console.log(result);
})
.catch((rejectResult) => {
    console.log(rejectResult);
});

// exercise
// 1. getDataFromServer function return a Promise with users data
// as Array of objects from server as json
// Simulate successful completion after 2 seconds
// 2. Call this function and log the data as an Array datatype
// 3. Simulate an error
// 4. return to step 2, and create render function
// that will display the users on

const users = [
    { username: "aaa", email: "aaa@gmail.com" },
    { username: "bbb", email: "bbb@gmail.com" },
    { username: "ccc", email: "ccc@gmail.com" },
];

const getDataFromServer = (arr) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (arr) {
                res(JSON.stringify(arr)); // Send back stringified users
            } else {
                rej('404 no data found');
            }
        }, 2000);
    });
};

getDataFromServer(users)
    .then(data => {
        console.log(data);  // Logs stringified array of users
        return JSON.parse(data);  // Parse the JSON string to an object and pass it to the next .then()
    })
    .then(parsedData => {
        render(parsedData);  // Pass the parsed array to render
    })
    .catch(err => {
        console.log(err);  // Logs any error that occurs
    });

const render = arr => {
    const html = arr.map(item => {
        return `<p>Email: ${item.email}</p>`; // Return an HTML string for each email
    });
    document.getElementsByTagName('body')[0].innerHTML = html.join(''); // Join and render the HTML array
};


// for situations with more promises:
// Promise.all(arrOfPromises)
    // promise that returns .then() only if all the promises are resolved

// Promise.allSettled(arrayOfPromises)
    // same thing only returns statuses

// Promise.race(arrayOfPromises)
    // .then(the fastes resolution)





