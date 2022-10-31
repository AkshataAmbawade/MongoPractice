// function getData()
// {
//     let handlePromise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("It will return pormise if you will not use await")
//         }, 1000);
//     })


//     console.log(handlePromise)
// }

// getData();

//The above code will return pormise as an output


async function getData()
{
    let handlePromise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("It will not return pormise if you will not use await")
        }, 1000);
    })
    let x=await handlePromise

    console.log(x)
}

getData();

