//creation of promises
const promiseOne = new Promise(function (resolve, reject) {
    //do an async task
    //DB calls, cryptoGraphy, network
    setTimeout(function () {
        console.log("task is completed")
        resolve()
    }, 1000)
})

promiseOne.then(function () {// then keyword directly have connection with resolve
    console.log("promise consumed")
})
//creating and consuming promise together
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task completed")
        resolve()
    }, 2000)

}).then(function () {
    console.log("async resolved")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "aparnaRai",
            email: "a"
        })//we can pass values(mostly objects) in the resolve
        //A new Promise is created that resolves with an object { username: "aparnaRai", email: "a" } after 1 second.
        //This means when .then() is called, it will receive this object as an argument.

    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})
//use of reject
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Aparna", password: "123" })
        }
        else {
            reject("ERROR:Something went wrong")
        }
    }, 1000)
})
//if we want to print on only username we can use then chaining
//here each then resolves the value from the previous one
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error)
    }).finally(() => {// this block always gets executed
        console.log("finally the promise is either resolved or rejected")
    })

//executing promise using async await
const promiseFive = new Promise(function () {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Aparna", password: "12345" })
        }
        else {
            reject("ERROR:JS went wrong")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
/*
async function fetchData() {
    try {
        let response = await fetch('https://invalid-url.com'); // Invalid URL
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchData();
More about async and await=>
The async keyword is used to define a function that always returns a promise.
Even if you return a non-promise value, JavaScript automatically wraps it in a promise.

The await keyword pauses the execution of an async function until the promise resolves.
It must be used inside an async function`.
It makes asynchronous code look like synchronous code.



*/
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')//values come in string so we cannot take out value out of it
        const data = await response.json();// we used await here because converting the values takes time
        console.log(data);
    }
    catch {
        console.log("E:", error);
    }
}
getAllUsers();
//writing the above code in then format
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log('found an error!!!')
    })

