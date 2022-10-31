let a = undefined;

let promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
        a = "hello ECMA"
        resolve("done")
    }, 3000);
})

promiseData.then(() => {
    console.log(a)
})
