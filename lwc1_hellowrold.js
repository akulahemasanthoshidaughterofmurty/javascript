<template>
    
    <lightning-card  title="2 way binding">
        <div class="slds-var-m-around_medium">
        <lightning-input type="text" label="Enter some text" 
                onkeyup={changeHandler}></lightning-input>  
        <p>my name is {fullname}</p>
        <p>my tech is {title}</p>  
    </div>
    </lightning-card>
</template>




javascript part

import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname="zero to hero";
    title="aura"
    changeHandler(event){
        this.title= event.target.value
    }
}

it is a two way binding process--it can be achieved through the methods in the javascript
----->input is the feild will get activated when any one starts writing
----->then event will be raised wchich is then send as parameter
----->if we want the value that entered in the html page
----->we can use event.target.value
