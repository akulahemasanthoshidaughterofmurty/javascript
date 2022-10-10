//array destructuring
let arr=["amazon","googlr"]
// let company1=arr[0]
// let company2=arr[1]
let [company1,company2]=arr
console.log(company1,company2 )


//object destructuring
let options={
    title:"zero to hero",
    age:23,
    type:"crm"
}
//var title=options.title
//var age=options.age
//var type=options.type
so that using the destructuring we can directly get the values of object properties as variables with same name
let {title,age,type}=options
console.log(title,age,type)
