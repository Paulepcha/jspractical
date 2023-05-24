// document.getElementById("counter").innerHTML="hello world"

// let changeCount = document.getElementById("counter");
// console.log=(changeCount);

let changeCount = document.getElementById("counter");

let personPerHour = document. getElementById("personPerHour");


let countNum=0;
function count(){
    
   let counting = countNum+=1;
   changeCount.innerHTML = counting;
   
   
}
function save(){
    changeCount.innerHTML=0;
    let getCount = personPerHour.innerHTML;
   let add = getCount + countNum +"|";
      personPerHour.innerHTML = add;
}
function end(){  
personPerHour.innerHTML = " person per hour:";

 }   