const promiseOne = new Promise(function(resolve , reject ) {
    //DoAsync task
    //DB calls , cryptography , networkRelated calls
    setTimeout(function(){
        console.log('async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async Task Two');
        resolve()
    },1000)
}).then(function () {
    console.log('async Two resolved');
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({userName : 'chai',email : 'chai@example.com'})
    } , 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({userName :'vaibhav',password:'123'})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
    .then((user) => {
    console.log(user);
    return user.userName
    })
    .then((userName) => {
    console.log(userName);
    })
    .catch(function (error) {
    console.log(error)
    })
    .finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ userName: 'vaibhav', password: '123' })
        }
        else {
            reject('ERROR : JS Went Wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    // const response = await promiseFive
    // console.log(response)
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

/*

async function getAllUsers(params) {
    try {
        const response = await fetch('https://jsonplaceholder.org/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('E : ' , error)
    }
}

getAllUsers()
*/

fetch('https://api.github.com/users')
    .then((response) => {
    return response.json()
    }).then((data) => {
        console.log(data)
    })
    .catch((error) => {
    console.log("ERROR")
    })
    