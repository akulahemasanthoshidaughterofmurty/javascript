//nomal export
// export const PI=3.14

// export function add(a,b){
//     console.log(a+b)
// -----------------------------------------------------------------------
// }
// export together
// export{PI,add} 
//---------------------------------------------------------------------

//export with alias
const PI=3.14
function add(a,b){
    console.log(a+b)
// -----------------------------------------------------------------------
}

export{PI as pidata,add as adition}

//export with default
export default function minus(a,b)
{
    console.log(a-b)
}














// 1.import {pidata,adition} from './utilis.js'--multiple imports

// console.log(pidata)
// console.log(adition(2,3))

// import * as util from'./utilis.js' ---all members then use util.minus(2,3)

import minus from'./utilis.js'//import default member
 console.log(minus(90,20))




