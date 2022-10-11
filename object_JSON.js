let obj={
    name:"salesfprce",
    age:23,
    day:"sat"
}
console.log(Object.keys(obj))
console.log(Object.values(obj))

//json.stringfy
//to convert the object int the string 
//especially we use it when we need to send to the org or lwc
let str=JSON.stringify(obj)
console.log(str)

console.log(JSON.parse(str))//converts the string into object
