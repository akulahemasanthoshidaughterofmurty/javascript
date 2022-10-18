function abc()
{
    return "nikhil"
}
console.log(abc())-------->normal

abd =()=>{
    console.log("hi")----------->arrow function with return used when there is more than one statement

}
abd()

const  a=()=>"nikhil" ---------->can be used if you can perform the process in single step mostly used in maps
console.log(a())


const sum=(data,data2)=>{
   let sum= data+data2
   return sum
}
console.log(sum(2,3))

const total=(data1,data2)=>data1+data2
console.log(total(2,3))

// we mostly use this arrow function in the maps

var arr=[1,2,3,4]
let newarr=arr.map((item)=>item*2)
console.log(newarr)

//problem solved by arrow function

let obj={
    name:"nikhil",
    getname:function(){
        console.log(this.name)
    }
}
obj.getname()

//functions in object is called as a method and to refer the one 
//which need to be reffered inside the object will be reffered y using the this 

let obj1={
    name1:"nikhil",
    getname:function(){
        console.log(this.name1)
        function fullname(){
            console.log(this.name1+"karma") //undefined karma
        }
        fullname()
    }

}
obj1.getname()

//above it will work fine upto getname then after it will forget the name

//now we are using the arrowfunction in the inner function
let obj2={
    name1:"nikhil",
    getname:function(){
        console.log(this.name1)
        fullname=()=>{
            console.log(this.name1+"karma") //undefined karma
        }
        fullname()
    }

}
obj2.getname()
