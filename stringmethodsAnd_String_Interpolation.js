var a=120
var b=23
var str="the sum of "+a+" and "+b+" is "+a+b+"hi"
console.log(str)

//String interpolaton

var namme="hema"
var age=23
console.log(`my name is ${namme} and my age is ${age}`)

//string methods 
let str1="hello guys i hope you are good guys"

//1.includes
//determines whether a string contains the specified character
let check=str1.includes("hopes")
console.log(check)

//2/index of
//returns the postion of the first occurence of a specified value in a string

let ind=str1.indexOf("guys")
console.log(ind)

//3.strats with
//determines whether a string begins with the characters of a specified string


let checking=str1.startsWith("ello")
console.log(checking)

//4.slice
//method ectracts parts of a string and returns the extracted parts in a new string

let slicing=str1.slice(2)
console.log(slicing)

//5.tolowercase

let lower=str1.toLocaleLowerCase()
console.log(lower)

//6.touppercase
console.log(str1.toUpperCase())

//7.trim-remove the white spaces from both sides of a string
let searchtext="     salesforce lwc    "
console.log(searchtext.trim())
