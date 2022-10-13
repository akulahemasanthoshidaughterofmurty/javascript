
//1.promise
//function executes automatically


function checksuccess(data)
{
return new Promise(function(resolve,reject){
    if(data=="success")
    {
        return resolve("success")  
    }else{
        return reject("unsuccess")
    }
    

})
}
//console.log(checksuccess("succes"))
//this then function is used to store the result
checksuccess("").then(function(result){
    console.log(result)
}).catch(function(error){
    console.error(error)
})

//catch cathes the error

fetch('https://www.google.co.in/').then(function(recieveddata){
    return recieveddata.json()
}).then(function(response){
    console.log(response)
 })
