let element=document.querySelector('h1')
console.log(element)

//document.queryselectoraall()returns all selectors
element.style.color='red'
 let allelemnts=document.querySelectorAll('h1')
 console .log(allelemnts)
// console.log(Array.from(allelemnts))



//inorder to perform any operations we do convert nodelist into array
//firstly, we are converting into the array
var data=Array.from(allelemnts)
//going through each and every element of the array using for each 
data.forEach(item => {
   item.style.color='blue'
    
});
