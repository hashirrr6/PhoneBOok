




function details(){

  
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    
    // console.log(name,phone);

   nameValue=document.createElement('h1');
   phoneValue= document.createElement('h3');

 nameValue.textContent=`NAME:${name}`;
 phoneValue.textContent=`PHONE:${phone}`;

 console.log(nameValue,phoneValue);
 
 

//  document.getElementById("display").appendChild(nameValue);
//  document.getElementById("display").appendChild(phoneValue);
 alert("Saved Success Fully :)")

//  setTimeout(function() {
//     window.location.href = "../index.html"; 
// }, 2000);
}