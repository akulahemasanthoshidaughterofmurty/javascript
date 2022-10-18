//settimeout window property

window.setTimeout(function(){
    console.log("hello")
},5000)

//if you don't want your settime out to be executed
//then store this into a variable
//then use cleartimeout and pass the variable which contains id
//as we know js executed from top to bottom
//the code will excute before 5 sec and it won't allow you to print hello

let timerid=window.setTimeout(function(){
    console.log("hello")
},5000)
console.log(timerid)
clearTimeout(timerid)

//setinterval
 let intervalid=window.setInterval(function(){
    console.log("hi")
 },1000)

 //if you want your work to be done for every interval
 // inorder to clear this you can use above method
 clearInterval(intervalid)
