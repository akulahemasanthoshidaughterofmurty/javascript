//Array methods
// 1.map()-loop over the array and return new array based on the value return
// 2.every()-return true or false if every elemnet in the array satisfy the CSSConditionRule.
// apply3.filter()-return new array with all the elements that satisfy the CSSConditionRule.
// apply4.some()-return true if at least one element in the arraty satisfy
// 5.sort()-sort the elements of an array
// 6.reduce()-this method reduces the array to asingle value(left to right)
// 7.foreach()-this method calls for each array element.

//1.map()
let arr=[9,2,4,5,1,6]
//syntax
// arr.methodName(function(currentItem,index,actualArray){})
//it returns array

let newarray=arr.map(function(currentItem,index,array)
{
    console.log(`current item is ${currentItem} index is ${index}, array is${array}`)
    let vari=currentItem*2
    console.log(`vari is ${vari}`)
    return vari
})
console.log(newarray)

//filter
let newfilter=newarray.filter(function(currentItem,index,array){
    return currentItem>2
})
console.log(`new${newfilter}`)

//every
let newevery=arr.every(function(currentItem,index,array){
    return currentItem>4

})
console.log(newevery)

//some
console.log("some"+arr.some(function(currentItem,index,array){
    return currentItem>4

}))

//sort
let newarr=["hema","akula","santhoshi"]
console.log(newarr.sort())


//sort can function will return error if you use in the case of numbers
//for numbers we use function(A,b)
//a-b---> refers to the ascending order
//b-1---->refers to the descending order

let points=[9,6,1,5,34,12]
let sortedValue=points.sort(function(a,b){
    return b-a
})
console.log(sortedValue)


//reduce
//syntax is differnet when comapred with others
// array.reduce(function(total,currentItem,index,array){

// },intialvalue)

let num=[23,43,67]
let sum=num.reduce(function(total,currentItem){
    console.log(`total is${total} and currentitem is ${currentItem}`)
    return total+currentItem
    
},1)
console.log(sum)


// total is1 and currentitem is 23
//  total is24 and currentitem is 43
// total is67 and currentitem is 67



//foreach
num.forEach(function(currentItem){
    console.log(currentItem)
})
