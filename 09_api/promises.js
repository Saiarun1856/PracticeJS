const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log('async task is complete'); 
       resolve()
    },1000)

})

promiseOne.then(function(){
    console.log('promise consumed')
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: 'chai', email: 'chai@gmail.com'})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Arun", password: 123})
        }else{
            reject('Error: something went wrong')
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log('finally error got resoved or rejected')
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password: 123})
        }else{
            reject('Error: js went wrong')
        }
    },1000)
})

async function consmePromisefive(){
    const response = await promise5
    console.log(response)
}