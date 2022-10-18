 <!-- <button onclick="first()">click</button> -->first way to add event
        <!-- -------------------------------------------------------- -->
        
        <!-- <button>click</button>----second
        <div class="demo">hello</div> -->


        <!-- -------------------------------------------------- -->
       <!-- <form onclick="alert(' me')">-----event bubbling
           
            <div onclick="alert('common')">you
                <p onclick="alert('iam ')">yes yes</p>
            </div>
            
       </form> -->
       <!-- --------------------------------------------------------------- -->
       <button onclick="custommethod()">customevent</button>---custom event
 
 
 
 
 
 
//  function first(){---first way to add event
//     console.log("hurray")
//  }
//  let btn=document.querySelector("button")
//  btn.addEventListener("click",first)
//----------------------------------------------------------------------

// document.addEventListener("mousemove",handler)---second event
// function handler(){
//     document.querySelector(".demo").innerHTML=Math.random()
// }
document.addEventListener("hello",function(data){---custom event
    console.log(data.detail)
})

function custommethod(){
   let event= new CustomEvent("hello",{
        detail:{name:"nikhil"}
    })
    document.dispatchEvent(event)
}
